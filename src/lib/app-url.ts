import { env } from '$env/dynamic/public';

// The app is not in production yet. PUBLIC_APP_URL is filled in when it is;
// until then every app link resolves to an in-page anchor so nothing 404s.
const base = (env.PUBLIC_APP_URL ?? '').replace(/\/+$/, '');

export function appUrl(path: '/register' | '/login'): string {
	return base ? `${base}${path}` : '#trial';
}

export const appConfigured = base.length > 0;
