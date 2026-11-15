import { readFileSync, writeFileSync, readdirSync, mkdirSync, copyFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const dataDir = join(root, "data");
const srcDir = join(root, "src");
const outDir = join(root, "docs");

const MODULES = ["p1m1","p1m2","p1m3","p1m4","p1m5","p1m6","p1m7","p1m8","p1m9","p2m1","p2m2","p2m3","p2m4","p2m5","p2m6","extra"];
const DOMAINS = ["responsible","features","data","prompt","productivity","privacy"];

const errors = [];
const questions = [];
const cards = [];
const ids = new Set();
const nonEmpty = v => typeof v === "string" && v.trim().length > 0;

for (const file of readdirSync(dataDir).filter(f => /^part-.*\.json$/.test(f)).sort()) {
  let data;
  try {
    data = JSON.parse(readFileSync(join(dataDir, file), "utf8"));
  } catch (e) {
    errors.push(`${file}: invalid JSON (${e.message})`);
    continue;
  }
  for (const q of data.questions || []) {
    const where = `${file} ${q.id}`;
    if (!nonEmpty(q.id) || ids.has(q.id)) errors.push(`${where}: missing or duplicate id`);
    ids.add(q.id);
    if (!MODULES.includes(q.module)) errors.push(`${where}: bad module ${q.module}`);
    if (!DOMAINS.includes(q.domain)) errors.push(`${where}: bad domain ${q.domain}`);
    if (!nonEmpty(q.q)) errors.push(`${where}: missing question`);
    if (!Array.isArray(q.options) || q.options.length !== 4 || !q.options.every(nonEmpty)) errors.push(`${where}: needs 4 non-empty options`);
    else if (new Set(q.options.map(o => o.trim().toLowerCase())).size !== 4) errors.push(`${where}: duplicate options`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) errors.push(`${where}: bad answer index`);
    if (!nonEmpty(q.explain)) errors.push(`${where}: missing explanation`);
    if (!/^https:\/\//.test(q.source || "")) errors.push(`${where}: missing https source`);
    questions.push({ id: q.id, module: q.module, domain: q.domain, q: q.q.trim(), options: q.options.map(o => o.trim()), answer: q.answer, explain: q.explain.trim(), source: q.source });
  }
  for (const c of data.cards || []) {
    const where = `${file} ${c.id}`;
    if (!nonEmpty(c.id) || ids.has(c.id)) errors.push(`${where}: missing or duplicate id`);
    ids.add(c.id);
    if (!MODULES.includes(c.module)) errors.push(`${where}: bad module ${c.module}`);
    if (!DOMAINS.includes(c.domain)) errors.push(`${where}: bad domain ${c.domain}`);
    if (!nonEmpty(c.front) || !nonEmpty(c.back)) errors.push(`${where}: missing front/back`);
    if (!/^https:\/\//.test(c.source || "")) errors.push(`${where}: missing https source`);
    cards.push({ id: c.id, module: c.module, domain: c.domain, front: c.front.trim(), back: c.back.trim(), source: c.source });
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} error(s). Build aborted.`);
  process.exit(1);
}

const count = (arr, key) => arr.reduce((m, x) => ((m[x[key]] = (m[x[key]] || 0) + 1), m), {});
const qm = count(questions, "module"), cm = count(cards, "module");
const qd = count(questions, "domain");
console.log("module   questions  cards");
for (const m of MODULES) console.log(`${m.padEnd(8)} ${String(qm[m] || 0).padStart(9)}  ${String(cm[m] || 0).padStart(5)}`);
console.log(`total    ${String(questions.length).padStart(9)}  ${String(cards.length).padStart(5)}`);
console.log("\nquestions by domain:", qd);

const bank = { built: "15 Nov 2026", questions, cards };
const json = JSON.stringify(bank).replace(/</g, "\\u003c");
const html = readFileSync(join(srcDir, "index.html"), "utf8").replace("/*BANK*/null", () => json);
const version = createHash("sha256").update(html).digest("hex").slice(0, 10);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "index.html"), html);
writeFileSync(join(outDir, "sw.js"), readFileSync(join(srcDir, "sw.js"), "utf8").replace("__VERSION__", version));
for (const f of ["manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"]) copyFileSync(join(srcDir, f), join(outDir, f));
writeFileSync(join(outDir, ".nojekyll"), "");
console.log(`\nBuilt docs/ (version ${version})`);
