import type { ParamMatcher } from '@sveltejs/kit';
import { ARTICLE_SLUGS } from '$lib/articles/slugs';

export const match: ParamMatcher = (param) => (ARTICLE_SLUGS as readonly string[]).includes(param);
