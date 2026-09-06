// Renders the Open Graph cards (1200×630) into static/og-{id,en}.png with the
// brand font. Run `bun run og` after changing the copy below.
import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';

const font = (
	await readFile('node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2')
).toString('base64');

const COPY = {
	id: {
		kicker: 'Virtual Data Room Indonesia',
		h: 'Berhenti kirim dokumen deal lewat Google Drive.',
		sub: 'Hak akses per grup · Watermark di setiap halaman · Jejak aktivitas',
		foot: 'Data di Jakarta. Tanpa jadwal demo, tanpa sales.'
	},
	en: {
		kicker: 'Virtual Data Room in Indonesia',
		h: 'Stop sending deal documents through Google Drive.',
		sub: 'Access per group · A watermark on every page · Activity trail',
		foot: 'Data in Jakarta. No demo call, no sales.'
	}
};

const html = (c) => `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:Inter;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
html,body{margin:0}
body{width:1200px;height:630px;background:#f8fbfc;color:#1d2a33;font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.card{box-sizing:border-box;width:1200px;height:630px;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
.brand{display:flex;align-items:center;gap:14px;color:#14697D}
.brand span{font-size:30px;font-weight:600;letter-spacing:-.01em;color:#1d2a33}
.kicker{margin-top:44px;font-size:24px;font-weight:500;color:#14697D;letter-spacing:.01em}
h1{margin:16px 0 0;font-size:66px;line-height:1.05;letter-spacing:-.025em;font-weight:600;max-width:20ch}
.sub{margin-top:28px;font-size:26px;color:#3b4a55;line-height:1.4}
.foot{display:flex;justify-content:space-between;align-items:baseline;font-size:22px;color:#5a6873}
.foot b{font-weight:600;color:#1d2a33}
.rule{height:1px;background:#d2dbe0;margin-bottom:22px}
</style><div class="card"><div>
<div class="brand"><svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="1.4"/><path d="M6 6.75h12M6 10.1h8.2M6 13.45h8.2M6 16.8h8.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg><span>Rakda</span></div>
<p class="kicker">${c.kicker}</p>
<h1>${c.h}</h1>
<p class="sub">${c.sub}</p>
</div><div><div class="rule"></div><div class="foot"><span>${c.foot}</span><b>rakda.id</b></div></div></div>`;

const browser = await chromium.launch();
const page = await browser.newPage({
	viewport: { width: 1200, height: 630 },
	deviceScaleFactor: 1
});
for (const lang of Object.keys(COPY)) {
	await page.setContent(html(COPY[lang]), { waitUntil: 'load' });
	await page.evaluate(() => document.fonts.ready);
	await page.screenshot({ path: `static/og-${lang}.png`, type: 'png' });
	console.log(`static/og-${lang}.png`);
}
await browser.close();
