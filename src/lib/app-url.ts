import { env } from '$env/dynamic/public';

// The app is not in production yet. Until PUBLIC_APP_URL exists, app links are
// null and callers render nothing for them (never a link to nowhere). With only
// PUBLIC_CONTACT_EMAIL set, the trial action becomes a mailto asking to be told
// when the trial opens; with neither, it is a plain statement.
// Only a production origin is ever linked: a dev, staging, or plain-http host
// here is ignored, so the public site never sends visitors to a test login.
const raw = (env.PUBLIC_APP_URL ?? '').replace(/\/+$/, '');
const base = /^https:\/\/(?!(dev|staging|test|localhost)[.:])[^/]+$/.test(raw) ? raw : '';

export function appUrl(path: '/register' | '/login'): string | null {
	return base ? `${base}${path}` : null;
}

// The trial sandbox (a separate instance, read-only, 15 minutes per email).
// When set, every "try" action points here instead of the app's sign-up; the
// same https-only rule applies, and a dev/staging host is ignored.
const sandboxRaw = (env.PUBLIC_SANDBOX_URL ?? '').replace(/\/+$/, '');
export const sandboxUrl: string | null =
	/^https:\/\/(?!(dev|staging|test|localhost)[.:])[^/]+$/.test(sandboxRaw) ? `${sandboxRaw}/try` : null;

export const appConfigured = base.length > 0;
export const contactEmail: string | null = (env.PUBLIC_CONTACT_EMAIL ?? '').trim() || null;
