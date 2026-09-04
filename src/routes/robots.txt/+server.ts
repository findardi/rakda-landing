import type { RequestHandler } from './$types';
import { SITE_URL, siteConfigured } from '$lib/seo';

export const prerender = true;

export const GET: RequestHandler = () => {
	const lines = ['User-agent: *', 'Allow: /'];
	if (siteConfigured) lines.push(`Sitemap: ${SITE_URL}/sitemap.xml`);
	return new Response(lines.join('\n') + '\n', {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
};
