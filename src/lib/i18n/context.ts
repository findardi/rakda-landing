import { getContext, setContext } from 'svelte';
import type { Locale, T } from './index';

export type I18n = { locale: Locale; t: T; tag: string };

const KEY = Symbol('rakda:i18n');

export function setI18n(value: I18n): void {
	setContext(KEY, value);
}

export function getI18n(): I18n {
	return getContext<I18n>(KEY);
}
