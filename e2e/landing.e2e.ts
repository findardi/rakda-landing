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
