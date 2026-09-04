import { env } from '$env/dynamic/public';
import type { Locale } from '$lib/i18n';

// The public origin, e.g. https://rakda.id. Canonical, hreflang, Open Graph URLs,
// the sitemap, and the robots Sitemap line appear only once this is set.
export const SITE_URL = (env.PUBLIC_SITE_URL ?? '').replace(/\/+$/, '');
export const siteConfigured = SITE_URL.length > 0;

export function absolute(path: string): string | null {
	return siteConfigured ? `${SITE_URL}${path}` : null;
}

/** Paths of one page in both locales. `path` is the locale-less path, e.g. '/faq'. */
export function localizedPaths(path: string): Record<Locale, string> {
	const clean = path === '/' ? '' : path;
	return { id: clean || '/', en: `/en${clean}` };
}

export const PAGES = ['/', '/faq'] as const;

/** `<` is escaped so a JSON-LD script can never close itself. */
export function jsonLd(data: unknown): string {
	return JSON.stringify(data).replace(/</g, '\\u003c');
}
