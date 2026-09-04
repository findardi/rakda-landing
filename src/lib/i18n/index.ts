import { id } from './id';
import { en } from './en';

export type Locale = 'id' | 'en';
export const LOCALES: readonly Locale[] = ['id', 'en'] as const;
export type Dict = typeof id;
export type Key = keyof Dict;
export type Params = Record<string, string | number>;
export type T = (key: Key, params?: Params) => string;

const dicts: Record<Locale, Record<Key, string>> = { id, en };

export function translate(locale: Locale, key: Key, params?: Params): string {
	const raw = dicts[locale][key] ?? dicts.id[key] ?? key;
	if (!params) return raw;
	return raw.replace(/\{(\w+)\}/g, (_, k: string) => (k in params ? String(params[k]) : `{${k}}`));
}

export function makeT(locale: Locale): T {
	return (key, params) => translate(locale, key, params);
}

export function localePath(locale: Locale, search = '', path = '/'): string {
	const clean = path === '/' ? '' : path;
	const base = locale === 'id' ? clean || '/' : `/en${clean}`;
	return base + search;
}

export function otherLocale(locale: Locale): Locale {
	return locale === 'id' ? 'en' : 'id';
}

export function intlTag(locale: Locale): string {
	return locale === 'id' ? 'id-ID' : 'en-GB';
}
