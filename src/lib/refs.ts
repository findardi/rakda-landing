// The seven numbered sections a FAQ answer can point at, in reading order across
// the landing page (§1–§3) and the features page (§4–§7). The numeral is printed
// at both ends: on the section and in the FAQ margin.
export type Ref = 'grid' | 'engagement' | 'security' | 'qa' | 'templates' | 'lifecycle' | 'setup';

export const REFS: Record<Ref, { path: string; anchor: string; n: number }> = {
	grid: { path: '/', anchor: 'access', n: 1 },
	engagement: { path: '/', anchor: 'activity', n: 2 },
	security: { path: '/', anchor: 'security', n: 3 },
	qa: { path: '/fitur', anchor: 'qa', n: 4 },
	templates: { path: '/fitur', anchor: 'templates', n: 5 },
	lifecycle: { path: '/fitur', anchor: 'lifecycle', n: 6 },
	setup: { path: '/fitur', anchor: 'setup', n: 7 }
};

export const secnum = (ref: Ref): string => `§${REFS[ref].n}`;
