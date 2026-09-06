import { expect, test } from '@playwright/test';

test('Indonesian landing renders the grid and writes toggles to the URL', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('html')).toHaveAttribute('lang', 'id');
	await expect(page.locator('h1')).toContainText('Berhenti kirim dokumen deal');
	await expect(page).toHaveTitle(/Virtual Data Room/);

	const cell = page.getByRole('button', { name: 'Lihat untuk Pembeli A di folder SDM' });
	await expect(cell).toHaveAttribute('aria-pressed', 'false');
	await cell.click();
	await expect(page).toHaveURL(/\?g=/);
	await expect(cell).toHaveAttribute('aria-pressed', 'true');

	await page.goBack();
	await expect(page).not.toHaveURL(/\?g=/);
	await expect(cell).toHaveAttribute('aria-pressed', 'false');
});

test('English landing lives at /en', async ({ page }) => {
	await page.goto('/en');
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await expect(page.locator('h1')).toContainText('Stop sending deal documents');
});

test('the head carries the share card, canonical, hreflang, and JSON-LD', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
		'content',
		/\/og-id\.png$/
	);
	await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
		'content',
		'summary_large_image'
	);
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/$/);
	await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
		'href',
		/\/en$/
	);
	const ld = await page.locator('script[type="application/ld+json"]').textContent();
	expect(ld).toContain('"SoftwareApplication"');
	expect(ld).toContain('"FAQPage"');
	expect(ld).toContain('"Organization"');
});

test('the only form is the email waitlist; every page links the legal pages', async ({ page }) => {
	for (const path of ['/', '/en', '/faq', '/fitur', '/harga', '/privacy', '/en/contact']) {
		await page.goto(path);
		// One kind of field only: an email address. Never a password or a code.
		await expect(page.locator('input:not([type="email"]):not([type="hidden"])')).toHaveCount(0);
		await expect(page.locator('textarea, select')).toHaveCount(0);
		await expect(page.locator('footer a[href$="/privacy"]')).toHaveCount(1);
		await expect(page.locator('footer a[href$="/terms"]')).toHaveCount(1);
		await expect(page.locator('footer a[href$="/contact"]')).toHaveCount(1);
	}
	await page.goto('/');
	const forms = page.locator('form[action="/api/waitlist"]');
	await expect(forms).toHaveCount(2);
	await expect(forms.first().locator('input[type="email"]')).toBeVisible();
	await expect(page.locator('main [role="note"]').first()).toContainText('SIMULASI');
	// The viewer is inside the aside: nothing in it may be a button (the matrix toggles are not download controls).
	await expect(page.locator('aside button')).toHaveCount(0);
});

test('features, pricing, and the intent pages render in both locales', async ({ page }) => {
	await page.goto('/fitur');
	await expect(page.locator('h1')).toContainText('Semua fitur');
	await expect(page.locator('#qa')).toHaveCount(1);
	await page.goto('/harga');
	await expect(page.locator('h1')).toContainText('Belum final');
	await page.goto('/apa-itu-virtual-data-room');
	await expect(page.locator('h1')).toContainText('Apa itu virtual data room');
	await page.goto('/en/rakda-vs-google-drive');
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await expect(page.locator('h1')).toContainText('Rakda vs Google Drive');
	// The FAQ margin points at the page that holds the section.
	await page.goto('/faq#jenis-deal');
	await expect(page.locator('details#jenis-deal a.ref')).toHaveAttribute(
		'href',
		'/fitur#templates'
	);
});
