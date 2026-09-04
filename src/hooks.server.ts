import type { Handle } from '@sveltejs/kit';

// The document language is decided by the route: `/` is Indonesian, `/en` is English.
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%lang%', event.params.lang === 'en' ? 'en' : 'id')
	});
