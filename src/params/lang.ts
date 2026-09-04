import type { ParamMatcher } from '@sveltejs/kit';

// Only `/en` is a locale prefix; the bare path is Indonesian.
export const match: ParamMatcher = (param) => param === 'en';
