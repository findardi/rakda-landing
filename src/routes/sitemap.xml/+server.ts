import type { RequestHandler } from './$types';
import { PAGES, SITE_URL, localizedPaths, siteConfigured } from '$lib/seo';

export const prerender = true;

export const GET: RequestHandler = () => {
	const urls = siteConfigured
		? PAGES.map((path) => {
				const p = localizedPaths(path);
				const alternates = [
					`<xhtml:link rel="alternate" hreflang="id" href="${SITE_URL}${p.id}"/>`,
					`<xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${p.en}"/>`,
					`<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${p.id}"/>`
				].join('');
				return [p.id, p.en]
					.map((loc) => `<url><loc>${SITE_URL}${loc}</loc>${alternates}</url>`)
					.join('');
			}).join('')
		: '<!-- PUBLIC_SITE_URL is not set; no absolute URLs can be listed -->';
	const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
