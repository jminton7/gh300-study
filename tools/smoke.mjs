import http from "node:http";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";
import { mkdirSync } from "node:fs";
import { spawn } from "node:child_process";

const DOCS = join(dirname(fileURLToPath(import.meta.url)), "..", "docs");
const OUT = join(tmpdir(), "gh300-shots");
mkdirSync(OUT, { recursive: true });
const CHROME = process.env.CHROME || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const types = { ".html": "text/html", ".js": "text/javascript", ".png": "image/png", ".webmanifest": "application/manifest+json" };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  const f = join(DOCS, p);
  if (!existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "content-type": types[extname(f)] || "application/octet-stream" });
  res.end(readFileSync(f));
}).listen(8765);

const chrome = spawn(CHROME, ["--headless=new", "--remote-debugging-port=9333", "--user-data-dir=" + join(tmpdir(), "gh300-chrome-prof"), "--no-first-run", "about:blank"], { stdio: "ignore" });
const sleep = ms => new Promise(r => setTimeout(r, ms));
let targets;
for (let i = 0; i < 50; i++) {
  try { targets = await (await fetch("http://127.0.0.1:9333/json")).json(); if (targets.length) break; } catch {}
  await sleep(200);
}
const page = targets.find(t => t.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener("open", r));
let id = 0; const pending = new Map(); const errors = [];
ws.addEventListener("message", ev => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  if (m.method === "Runtime.exceptionThrown") errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
  if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") errors.push(m.params.args.map(a => a.value).join(" "));
});
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const evalJs = async expr => (await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true })).result?.result?.value;
const shot = async name => {
  const r = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  writeFileSync(`${OUT}/${name}.png`, Buffer.from(r.result.data, "base64"));
};

await send("Runtime.enable"); await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
await send("Page.navigate", { url: "http://127.0.0.1:8765/" });
await sleep(1500);
await evalJs("localStorage.clear(); location.reload()");
await sleep(1200);
await shot("01-home");

const clickText = t => evalJs(`(()=>{const b=[...document.querySelectorAll('button')].find(b=>b.textContent.includes(${JSON.stringify(t)}));if(!b)return 'missing';b.click();return 'ok'})()`);

console.log("quiz:", await clickText("Quiz"));
await sleep(300); await shot("02-question");
// answer wrong on purpose: find a wrong option via BANK lookup
await evalJs(`(()=>{const q=document.querySelector('.q').textContent;const it=BANK.questions.find(x=>x.q===q);if(Array.isArray(it.answer))return;const btn=[...document.querySelectorAll('.opt')].find(b=>b.lastChild.textContent!==it.options[it.answer]);btn.click()})()`);
await sleep(500); await evalJs("window.scrollTo(0,0)"); await shot("03-feedback-wrong");
// answer the rest correctly
for (let i = 0; i < 120; i++) {
  const done = await evalJs(`(()=>{
    const q=document.querySelector('.q')?.textContent; const it=q&&BANK.questions.find(x=>x.q===q);
    const opts=[...document.querySelectorAll('.opt')];
    const chk=[...document.querySelectorAll('button')].find(b=>b.textContent.startsWith('Check answer'));
    if(chk){ if(chk.disabled){ for(const a of it.answer){ opts.find(b=>b.lastChild.textContent===it.options[a]).click(); } return 'picked'; } chk.click(); window.__multi=(window.__multi||0)+1; return 'checked'; }
    const n=[...document.querySelectorAll('button')].find(b=>/^(Next|Finish)$/.test(b.textContent));
    if(!n)return 'none';
    if(n.disabled){ opts.find(b=>b.lastChild.textContent===it.options[it.answer]).click(); return 'answered'; }
    n.click(); return 'next'})()`);
  if (done === "none") break;
  if (i === 79) console.log("stuck:", await evalJs(`(()=>{const q=document.querySelector('.q')?.textContent;const it=BANK.questions.find(x=>x.q===q);return JSON.stringify({q,found:!!it,opts:[...document.querySelectorAll('.opt')].map(b=>b.lastChild.textContent),ans:it&&it.options[it.answer]})})()`));
  await sleep(80);
}
await sleep(300); await shot("04-summary");
console.log("summary:", await evalJs("document.querySelector('.big')?.textContent"), "multi answered:", await evalJs("window.__multi||0"));
await clickText("Done"); await sleep(200);
console.log("weak:", await clickText("Weak spots")); await sleep(200);
console.log("weak item count:", await evalJs("document.querySelector('.grow')?.textContent"));
await evalJs("history.back()"); await sleep(300);
console.log("after back:", await evalJs("document.querySelector('h1')?.textContent"));
await evalJs("document.querySelector('.x')?.click()"); await sleep(200);
console.log("flash:", await clickText("Flashcards")); await sleep(200);
await evalJs("document.querySelector('.flash').click()"); await sleep(200); await shot("05-card");
await clickText("Knew it"); await sleep(100);
await evalJs("window.confirm=()=>true; document.querySelector('.x').click()"); await sleep(200);
await clickText("Done"); await sleep(100);
console.log("mock:", await clickText("Mock exam")); await sleep(300);
console.log("mock header:", await evalJs("document.querySelector('.grow').textContent + ' ' + document.getElementById('timer').textContent"));
const mockDomains = await evalJs(`(()=>{const c={};for(const b of [...document.querySelectorAll('.tag')].slice(1,2))c[b.textContent]=1;return c})()`);
await shot("06-mock");
await evalJs("window.confirm=()=>true; document.querySelector('.x').click()"); await sleep(200);
await evalJs("[...document.querySelectorAll('button')].find(b=>b.textContent==='Done').click()"); await sleep(100);
await evalJs("document.querySelector('[data-tab=stats]').click()"); await sleep(200); await shot("07-stats");
await evalJs("document.querySelector('[data-tab=home]').click()"); await sleep(100);
await evalJs("[...document.querySelectorAll('.chip')].find(c=>c.textContent==='MCP Server').click()"); await sleep(100);
console.log("filtered quiz label:", await evalJs("[...document.querySelectorAll('.mode small')][0].textContent"));
await shot("08-topics");
console.log("errors:", errors.length ? errors : "none");
ws.close(); chrome.kill(); server.close();
process.exit(0);
