// The only server code on the site: POST /api/waitlist writes an email to Workers
// KV. Everything else is a static asset (build/). Bindings come from wrangler.jsonc.
// ponytail: a KV key per email is enough for a waitlist; read it back with
// `npx wrangler kv key list --binding WAITLIST`. Move to D1 when you need queries.

type Env = {
	ASSETS: { fetch(request: Request): Promise<Response> };
	WAITLIST?: { put(key: string, value: string): Promise<void> };
};

const EMAIL = /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/;

function json(body: unknown, status = 200): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
	});
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		if (url.pathname !== '/api/waitlist') return env.ASSETS.fetch(request);
		if (request.method !== 'POST') {
			return new Response(null, { status: 405, headers: { Allow: 'POST' } });
		}

		const form = await request.formData().catch(() => null);
		const email = String(form?.get('email') ?? '')
			.trim()
			.toLowerCase();
		const lang = form?.get('lang') === 'en' ? 'en' : 'id';
		const wantsJson = request.headers.get('accept')?.includes('application/json') ?? false;
		// Without JavaScript the form lands here directly; send it back to its page.
		const back = (query: string) =>
			Response.redirect(`${url.origin}${lang === 'en' ? '/en' : '/'}?${query}#waitlist`, 303);

		if (!EMAIL.test(email) || email.length > 254) {
			return wantsJson ? json({ ok: false, error: 'invalid' }, 400) : back('joined=0');
		}
		if (!env.WAITLIST) {
			// The KV binding is not configured yet (see README); the form shows the contact address.
			return wantsJson ? json({ ok: false, error: 'unavailable' }, 503) : back('joined=0');
		}
		await env.WAITLIST.put(email, JSON.stringify({ at: new Date().toISOString(), lang }));
		return wantsJson ? json({ ok: true }) : back('joined=1');
	}
};
