import { env } from '$env/dynamic/public';

// The app is not in production yet. Until PUBLIC_APP_URL exists, app links are
// null and callers render nothing for them (never a link to nowhere). With only
// PUBLIC_CONTACT_EMAIL set, the trial action becomes a mailto asking to be told
// when the trial opens; with neither, it is a plain statement.
const base = (env.PUBLIC_APP_URL ?? '').replace(/\/+$/, '');

export function appUrl(path: '/register' | '/login'): string | null {
	return base ? `${base}${path}` : null;
}

export const appConfigured = base.length > 0;
export const contactEmail: string | null = (env.PUBLIC_CONTACT_EMAIL ?? '').trim() || null;
