// The seven landing sections a FAQ answer can point at, numbered in landing order.
// The numeral is printed at both ends: on the landing section and in the FAQ margin.
export type Ref = 'grid' | 'qa' | 'engagement' | 'templates' | 'lifecycle' | 'security' | 'setup';

export const REFS: Record<Ref, { anchor: string; n: number }> = {
	grid: { anchor: 'access', n: 1 },
	qa: { anchor: 'qa', n: 2 },
	engagement: { anchor: 'activity', n: 3 },
	templates: { anchor: 'templates', n: 4 },
	lifecycle: { anchor: 'lifecycle', n: 5 },
	security: { anchor: 'security', n: 6 },
	setup: { anchor: 'setup', n: 7 }
};

export const secnum = (ref: Ref): string => `§${REFS[ref].n}`;
