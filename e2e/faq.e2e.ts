import { expect, test } from '@playwright/test';

test('FAQ deep link opens its clause and the page carries FAQPage JSON-LD', async ({ page }) => {
	await page.goto('/faq#cabut-akses');
	await expect(page.locator('html')).toHaveAttribute('lang', 'id');
	await expect(page.locator('h1')).toContainText('Pertanyaan umum');
	await expect(page.locator('details#cabut-akses')).toHaveAttribute('open', '');
	const ld = await page.locator('script[type="application/ld+json"]').textContent();
	expect(ld).toContain('"FAQPage"');
	expect(ld).toContain('Apa yang terjadi saat saya mencabut akses?');
});

test('English FAQ lives at /en/faq and links back to the English landing', async ({ page }) => {
	await page.goto('/en/faq');
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await expect(page.locator('h1')).toContainText('Frequently asked questions');
	await expect(page.locator('main a.back')).toHaveAttribute('href', '/en');
});

test('robots and sitemap are served', async ({ request }) => {
	const robots = await request.get('/robots.txt');
	expect(robots.ok()).toBeTruthy();
	expect(await robots.text()).toContain('User-agent: *');
	const sitemap = await request.get('/sitemap.xml');
	expect(sitemap.ok()).toBeTruthy();
	const xml = await sitemap.text();
	expect(xml).toContain('<urlset');
	expect(xml).toContain('https://rakda.id/en/fitur');
	expect(xml).toContain('https://rakda.id/rakda-vs-google-drive');
});
