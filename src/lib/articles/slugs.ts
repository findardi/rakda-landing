// Kept apart from the content so the route matcher and the footer import nothing heavy.
export const ARTICLE_SLUGS = [
	'apa-itu-virtual-data-room',
	'data-room-fundraising',
	'data-room-due-diligence-ma',
	'rakda-vs-google-drive'
] as const;
export type ArticleSlug = (typeof ARTICLE_SLUGS)[number];

export const ARTICLE_TITLES: Record<ArticleSlug, { id: string; en: string }> = {
	'apa-itu-virtual-data-room': {
		id: 'Apa itu virtual data room?',
		en: 'What is a virtual data room?'
	},
	'data-room-fundraising': { id: 'Data room untuk fundraising', en: 'A data room for fundraising' },
	'data-room-due-diligence-ma': {
		id: 'Data room untuk due diligence M&A',
		en: 'A data room for M&A due diligence'
	},
	'rakda-vs-google-drive': {
		id: 'Rakda vs Google Drive untuk dokumen deal',
		en: 'Rakda vs Google Drive for deal documents'
	}
};
