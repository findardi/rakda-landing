// The app's folder-access model, mirrored exactly for the demo grid.
// Rules (from the app's folder access panel):
//   clean download ⇒ download ⇒ view;  watermark ⇒ view;
//   watermark and clean download are mutually exclusive.

export type Perm = 'view' | 'watermark' | 'download' | 'original';
export const PERMS: readonly Perm[] = ['view', 'watermark', 'download', 'original'] as const;

export type Cell = Record<Perm, boolean>;
export type Grid = Cell[][]; // [group][folder]

export const GROUP_COUNT = 3;
export const FOLDER_COUNT = 12;

const BIT: Record<Perm, number> = { view: 1, watermark: 2, download: 4, original: 8 };

export function normalize(c: Cell): Cell {
	let { view, watermark, download, original } = c;
	if (original) {
		download = true;
		watermark = false;
	}
	if (download || watermark) view = true;
	if (!view) {
		watermark = false;
		download = false;
		original = false;
	}
	return { view, watermark, download, original };
}

export function toggle(c: Cell, p: Perm): Cell {
	const next: Cell = { ...c, [p]: !c[p] };
	if (p === 'view' && !next.view) {
		next.watermark = next.download = next.original = false;
	}
	if (p === 'watermark' && next.watermark) {
		next.view = true;
		next.original = false;
	}
	if (p === 'download') {
		if (next.download) next.view = true;
		else next.original = false;
	}
	if (p === 'original' && next.original) {
		next.download = true;
		next.view = true;
		next.watermark = false;
	}
	return normalize(next);
}

export function cellToNibble(c: Cell): number {
	return PERMS.reduce((n, p) => n | (c[p] ? BIT[p] : 0), 0);
}

export function nibbleToCell(n: number): Cell {
	return normalize({
		view: !!(n & BIT.view),
		watermark: !!(n & BIT.watermark),
		download: !!(n & BIT.download),
		original: !!(n & BIT.original)
	});
}

export function encodeGrid(g: Grid): string {
	return g.map((row) => row.map((c) => cellToNibble(c).toString(16)).join('')).join('');
}

const HEX = /^[0-9a-f]+$/;

export function decodeGrid(s: string | null | undefined, fallback: Grid): Grid {
	if (!s || s.length !== GROUP_COUNT * FOLDER_COUNT || !HEX.test(s)) return cloneGrid(fallback);
	const out: Grid = [];
	for (let g = 0; g < GROUP_COUNT; g++) {
		const row: Cell[] = [];
		for (let f = 0; f < FOLDER_COUNT; f++) {
			row.push(nibbleToCell(parseInt(s[g * FOLDER_COUNT + f], 16)));
		}
		out.push(row);
	}
	return out;
}

export function cloneGrid(g: Grid): Grid {
	return g.map((row) => row.map((c) => ({ ...c })));
}

export function sameGrid(a: Grid, b: Grid): boolean {
	return encodeGrid(a) === encodeGrid(b);
}

// Starting configuration of the sample room. Group order: Buyer A, Buyer B, Advisors.
// Folder order follows the M&A due diligence template.
const A = [7, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0]; // view+watermark; download on the overview; nothing on HR or closing
const B = [3, 3, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0]; // an earlier-stage bidder sees four folders, all watermarked
const ADV = [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]; // the seller's own advisors: view, download, clean

export const DEFAULT_GRID: Grid = [A, B, ADV].map((row) => row.map(nibbleToCell));
export const DEFAULT_ENCODED = encodeGrid(DEFAULT_GRID);
