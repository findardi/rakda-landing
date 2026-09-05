import { expect, test } from '@playwright/test';

test('Indonesian landing renders the grid and writes toggles to the URL', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('html')).toHaveAttribute('lang', 'id');
	await expect(page.locator('h1')).toContainText('Siapa boleh melihat apa');

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
	await expect(page.locator('h1')).toContainText('Who sees what');
});

test('marketing pages carry no form elements and every page links the legal pages', async ({
	page
}) => {
	for (const path of ['/', '/en', '/faq', '/privacy', '/en/contact']) {
		await page.goto(path);
		await expect(page.locator('form, input, textarea, select')).toHaveCount(0);
		await expect(page.locator('footer a[href$="/privacy"]')).toHaveCount(1);
		await expect(page.locator('footer a[href$="/terms"]')).toHaveCount(1);
		await expect(page.locator('footer a[href$="/contact"]')).toHaveCount(1);
	}
	await page.goto('/');
	await expect(page.locator('main [role="note"]').first()).toContainText('SIMULASI');
	// The viewer is inside the aside: nothing in it may be a button (the matrix toggles are not download controls).
	await expect(page.locator('aside button')).toHaveCount(0);
});
