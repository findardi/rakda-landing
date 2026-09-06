import type { id } from './id';

export const en: Record<keyof typeof id, string> = {
	'meta.title':
		'Rakda — Virtual Data Room (VDR) in Indonesia for M&A, Fundraising, and Due Diligence',
	'meta.description':
		'A virtual data room in Indonesia you set up yourself: per-group, per-folder access, a watermark on every page, an activity trail no one can erase. Data in Jakarta. No demo call, no sales.',

	'nav.skip': 'Skip to content',
	'nav.signIn': 'Sign in',
	'nav.trial': 'Start trial',
	'nav.faq': 'FAQ',
	'nav.lang': 'ID',
	'nav.langAria': 'Ganti ke Bahasa Indonesia',

	'hero.h1': 'Stop sending deal documents through Google Drive.',
	'hero.sub':
		'Rakda is a virtual data room for deal documents: per-group, per-folder access, a watermark on every page opened, and an activity trail no one can erase. Data stored in Jakarta. No demo call, no sales.',
	'hero.cta': 'Start the 30-day trial',
	'hero.ctaHint': 'No demo call. Your first room is ready in minutes.',
	'hero.tryHint': 'Try it: switch permissions on or off in this grid.',
	'hero.tryHint.wide': 'The preview on the right follows.',
	'hero.tryHint.narrow': 'The preview below follows.',

	'grid.template': 'M&A due diligence template',
	'grid.folder': 'Folder',
	'grid.perm.view': 'View',
	'grid.perm.watermark': 'Watermark',
	'grid.perm.download': 'Download',
	'grid.perm.original': 'Download clean PDF',
	'grid.cellAria': '{perm} for {group} in folder {folder}',
	'grid.tip.view': 'View: this group can open the document in the viewer.',
	'grid.tip.watermark':
		'Watermark: the reader’s identity is burned into every page opened. Turns off Download clean PDF.',
	'grid.tip.download': 'Download: a watermarked PDF. Turns on View.',
	'grid.tip.original':
		'Download clean PDF: a clean rendition. Turns on Download, turns off Watermark.',
	'grid.flow': 'Access flows down to everything in the folder, subfolders included.',
	'grid.reset': 'Restore the starting setup',
	'grid.groupTabs': 'Choose a group',
	'grid.keys':
		'This grid is one Tab stop: use the arrow keys to move between cells and Space to change a permission.',

	'preview.viewingAs': 'Viewed as',
	'preview.doc': 'Sample document',
	'preview.page': 'Page {n} of {total}',
	'preview.confidential': 'CONFIDENTIAL',
	'preview.watermarked': 'Watermarked',
	'preview.protected':
		'Secure view: every page carries the reader’s identity watermark and is never sent as the original file.',
	'preview.forbidden.title': '{group} has no access',
	'preview.forbidden.body':
		'{group} cannot see the folder “{folder}”. Its documents do not appear in their list at all.',
	'preview.download.marked': 'Download PDF (available to {group})',
	'preview.download.markedHint': '{n} pages, watermarked. No text layer.',
	'preview.download.clean': 'Download clean PDF (available to {group})',
	'preview.download.cleanHint':
		'A clean rendition, no watermark. The original file still never leaves.',
	'preview.download.offLabel': 'Download PDF (off for {group})',
	'preview.download.off': 'The document can only be read in the viewer.',
	'preview.wmAria': 'Watermark on every page: {text}',

	'activity.title': 'Activity',
	'activity.appendOnly': 'Append-only. No entry can be edited or deleted.',
	'activity.you': 'You',
	'activity.seed.created': 'created the data room “{room}”',
	'activity.seed.template': 'added 22 folders at once from the M&A due diligence template',
	'activity.seed.invite': 'invited {email} as Guest in group {group}, access until {date}',
	'activity.on': 'turned on {perm} for {group} in folder “{folder}”',
	'activity.off': 'turned off {perm} for {group} in folder “{folder}”',
	'activity.viewed': 'opened document “{doc}” (v1)',
	'activity.navigated': 'went back to a previous setup',
	'activity.reset': 'restored the starting setup',

	'qa.title': 'Q&A per group. One queue for you.',
	'qa.desc':
		'Each group only sees its own questions. You answer from one queue, then choose which answers deserve to become an FAQ for every group, without the asker’s identity.',
	'qa.sees': 'What {who} sees',
	'qa.owner': 'You (Owner)',
	'qa.status.waiting': 'Waiting',
	'qa.status.answered': 'Answered',
	'qa.status.closed': 'Closed',
	'qa.from': 'from {group}',
	'qa.faq': 'FAQ',
	'qa.faqNote': 'FAQs are shown to every group without the asker’s identity.',
	'qa.export': 'Export CSV',
	'qa.quota': 'Quota per group',
	'qa.q1': 'Do the 2027 projections already include the PT Nusantara Distribusi contract?',
	'qa.a1': 'They do. The contract is in from Q2 2026. See Financials › Projections, page 4.',
	'qa.q2': 'Which shareholders have not yet signed the 2024 shareholder agreement?',
	'qa.q3': 'When was the “Cendana” trademark last renewed?',
	'qa.a3': 'March 2026, valid until 2036. The copy is under Intellectual property.',
	'qa.faqQ': 'Are the FY2023–FY2025 financial statements audited?',
	'qa.faqA': 'Yes. All three were audited by an independent firm with an unmodified opinion.',

	'eng.title': 'You know which pages were read, and for how long.',
	'eng.desc':
		'Every document opening records page by page with its duration. Guests never see anyone’s activity, including their own.',
	'eng.reader': 'Reader',
	'eng.doc': 'Document',
	'eng.total': 'Total reading',
	'eng.longest': 'Longest',
	'eng.read': 'Read',
	'eng.page': 'p. {n}',
	'eng.pageLong': 'Page {n}',
	'eng.dwell': '{m} min {s} s',
	'eng.dwellShort': '{s} s',
	'eng.unread': 'not opened',
	'eng.pagesRead': '{read} of {total} pages opened',
	'eng.legend': 'Bar height = time the page stayed open. Pages without a bar were not opened.',
	'eng.export': 'Export CSV',

	'tpl.title': 'Start from a template, not an empty folder.',
	'tpl.desc':
		'Five built-in templates, one per deal type. A template adds folders to your room; it never replaces what is already there.',
	'tpl.folders': '{n} folders',
	'tpl.structure': 'Folder structure',
	'tpl.apply': 'Apply — {n} new folders',
	'tpl.pick': 'Choose a template',

	'life.title': 'One room, three states.',
	'life.desc':
		'A room is born in Preparation, opens to guests when Active, then freezes as Archive. An archive can be reactivated.',
	'life.status': 'Status',
	'life.prepare': 'Preparation',
	'life.prepare.hint': 'The room is still being prepared. Guests cannot open it yet.',
	'life.prepare.body':
		'Build the folder index, upload documents, create groups, set permissions. A guest who tries to enter is refused.',
	'life.active': 'Active',
	'life.active.hint': 'The room is active. Parties with access can open it.',
	'life.active.body':
		'Invite guests by email into one group, with or without an access expiry. Every opening is recorded.',
	'life.archive': 'Archive',
	'life.archive.hint': 'The room becomes read-only for every role, including you.',
	'life.archive.body':
		'Guests can still read, but downloads are switched off and every page is watermarked. Archive package: a ZIP of the whole room with the activity CSVs, link valid for 30 days.',
	'life.guests': '{n} guests',
	'life.guestsNone': 'no guests yet',
	'life.package': 'Archive package',
	'life.packageMeta': '{n} documents · expires {date}',

	'sec.title': 'What we do. What we do not claim.',
	'sec.desc': 'Security claims the code can back, and the limits we state as they are.',
	'sec.do': 'What we do',
	'sec.dont': 'What we do not claim',
	'sec.notClaimed': 'not claimed',
	'sec.do.1.t': 'The watermark is burned into pixels',
	'sec.do.1.b':
		'Every time a page is opened, the reader’s identity, the minute, and the IP address are burned into the page image. No PDF tool can lift it.',
	'sec.do.2.t': 'The original file never leaves',
	'sec.do.2.b':
		'Even the room owner receives a rendition (a re-rendered copy), not the uploaded file. “Clean” means a clean rendition.',
	'sec.do.3.t': 'The activity trail is append-only',
	'sec.do.3.b':
		'Names and actors are frozen at write time. Guests never see any activity, including their own.',
	'sec.do.4.t': 'Encrypted at rest',
	'sec.do.4.b':
		'Object storage uses AES-256 (SSE-S3), verified every time the server starts. The key is held by the storage provider.',
	'sec.do.5.t': 'Stored in Jakarta',
	'sec.do.5.b': 'Documents and the database live in Indonesia.',
	'sec.do.6.t': 'Security is not sold per plan',
	'sec.do.6.b':
		'Privacy mode, viewer hardening (right-click and print disabled, the page curtained as soon as the window is not active), and view watermarking are on every plan. A plan gate never reduces anyone’s security.',
	'sec.dont.1.t': 'Blocking screenshots',
	'sec.dont.1.b':
		'Nobody can. Privacy mode veils the page when the window loses focus, and the watermark makes sure any capture carries the identity of whoever took it.',
	'sec.dont.2.t': 'Revoking access instantly',
	'sec.dont.2.b':
		'Pages already loaded in a guest’s browser cannot be recalled. Revocation applies to the next opening.',
	'sec.dont.3.t': 'Reading on a phone',
	'sec.dont.3.b': 'The viewer is not served below 768×480. Guests read on a laptop.',
	'sec.dont.4.t': 'A lightweight watermarked PDF',
	'sec.dont.4.b':
		'Watermarked downloads are raster: no text layer, larger, capped at 750 pages. Above that, read in the viewer.',

	'setup.title': 'Set it up yourself. Use it today.',
	'setup.desc':
		'No demo to schedule, no training, no sales call. Sign up, name the room, apply a template, and the room is ready to use. These six steps are the whole process.',
	'setup.steps': 'Room setup steps',
	'setup.1.t': 'Create an account',
	'setup.1.b':
		'Sign up with email and password, then verify with a code sent to your inbox. A Google or GitHub account works too.',
	'setup.1.art': 'Sign-up flow',
	'setup.1.f1': 'Enter your email',
	'setup.1.f2': 'A verification code arrives in your inbox',
	'setup.1.f3': 'Account active',
	'setup.2.t': 'Name the room',
	'setup.2.b':
		'One name, an optional description. The room is born in Preparation: private, and guests cannot open it yet.',
	'setup.3.t': 'Apply a template',
	'setup.3.b':
		'Pick one of five templates, one per deal type. Folders are added at once and never replace what is already there.',
	'setup.4.t': 'Upload documents',
	'setup.4.b':
		'Upload into any folder. Large uploads can be resumed rather than restarted; earlier versions stay on file.',
	'setup.pages': '{n} pages',
	'setup.5.t': 'Create groups, set folder access',
	'setup.5.b':
		'Permissions go to groups, not to individuals: view, watermark, download, or download the original, per folder, flowing down to subfolders.',
	'setup.5.art': '{group} in folder {folder}',
	'setup.5.state': 'View and watermark on; download off.',
	'setup.6.t': 'Invite guests, open the room',
	'setup.6.b':
		'Each email goes into one group, with or without an access expiry. Press Open room; guests enter with their group’s permissions. An opened room does not return to Preparation.',
	'setup.6.until': 'until {date}',
	'setup.6.open': 'Open room',

	'close.title': 'Your next deal, not through Drive.',
	'close.body': 'Your first room is ready in minutes. Data in Jakarta, no demo call, no sales.',
	'close.cta': 'Start the 30-day trial',
	'close.signIn': 'Already have an account? Sign in',

	'faq.metaTitle': 'Frequently asked questions — Rakda',
	'faq.metaDescription':
		'Short answers about the Rakda data room: what it is, getting started, access permissions, security, tracking, the trial, and what happens after the deal.',
	'faq.title': 'Frequently asked questions',
	'faq.index': 'Contents',
	'faq.count': '{n} questions',
	'faq.proof': 'Shown at',
	'faq.permalink': 'Link to question {n}',
	'faq.ref.grid': 'Permission grid',
	'faq.ref.qa': 'Q&A',
	'faq.ref.engagement': 'Activity',
	'faq.ref.templates': 'Templates',
	'faq.ref.lifecycle': 'Room lifecycle',
	'faq.ref.security': 'Security',
	'faq.ref.setup': 'Setup',
	'faq.close.title': 'Clear enough?',
	'faq.close.body': 'Your first room is ready in minutes. 30-day trial, no demo call.',
	'faq.close.cta': 'Start the 30-day trial',
	'faq.close.back': 'See the mechanics on the main page',
	'footer.synthetic':
		'Every name, document, and number on this page is fictional and for demonstration only.',
	'footer.privacy': 'Privacy Policy',
	'footer.terms': 'Terms of Service',
	'footer.contact': 'Contact',
	'footer.guides': 'Guides',
	'footer.lang': 'Bahasa Indonesia',
	'footer.rights': '© 2026 {org}',

	'sim.badge': 'SIMULATION — fictional data',
	'sim.aria':
		'This block is a simulation with fictional data. There is no real file, account, or download.',

	'legal.updated': 'Updated {date}',
	'legal.org': 'Legal entity',
	'legal.address': 'Address',
	'legal.email': 'Email',

	'meta.ogAlt': 'Rakda — Virtual Data Room in Indonesia. Data in Jakarta.',
	'nav.fitur': 'Features',
	'nav.harga': 'Pricing',
	'hero.scroll': 'Try the permission grid below',
	'grid.subset': 'Three of this room’s {n} folders are shown.',
	'grid.mini': 'View is always watermarked. Download gives a watermarked PDF and turns on View.',
	'grid.full': 'The full four-level permissions are on the features page.',
	'wl.label': 'Your work email',
	'wl.placeholder': 'name@company.com',
	'wl.submit': 'Join the waitlist',
	'wl.hint': 'The 30-day trial is not open yet. One email when it opens; nothing else.',
	'wl.pending': 'Sending…',
	'wl.ok': 'Thank you. We will tell you when the trial opens.',
	'wl.err': 'Could not send. Try again, or write to {email}.',
	'wl.nav': 'Waitlist',
	'core.title': 'Three reasons to leave Google Drive.',
	'core.desc':
		'A sharing link gives every recipient the same permission, can be forwarded to anyone, and does not record who read which page. Rakda fixes all three.',
	'core.1.t': 'Access per group',
	'core.1.b':
		'Permissions go to a group, not to people one by one, per folder, and flow down to subfolders. A folder a group is not allowed to see does not appear in their list at all.',
	'core.2.t': 'A watermark that cannot be removed',
	'core.2.b':
		'The reader’s identity, the time, and the IP address are burned into the pixels of every page opened. Not a layer; no PDF tool can lift it. The original file never leaves the server.',
	'core.3.t': 'Page analytics',
	'core.3.b':
		'Every opening records page by page, with dwell time. You know which parts a buyer read, and for how long.',
	'core.see': 'See {n}',
	'who.title': 'Who it is for.',
	'who.desc':
		'Five built-in templates, one per kind of deal. Pick the closest; the folders are already laid out, and you upload.',
	'who.1.p': 'A founder raising a round',
	'who.1.b':
		'Three investors look at once. One Drive link cannot tell you who actually read your projections.',
	'who.2.p': 'An owner or advisor on an M&A deal',
	'who.2.b': 'Several bidders, one room. One must not see what another sees.',
	'who.3.p': 'Counsel in litigation',
	'who.3.b':
		'Evidence and drafts travel as email attachments that can be forwarded to the other side without a trace.',
	'who.4.p': 'A property seller or agent',
	'who.4.b':
		'Title deeds and appraisals go to several prospects at once, with no record of who opened what.',
	'who.5.p': 'A finance team under audit',
	'who.5.b':
		'The auditors ask five teams for documents; the latest version is lost in an email thread.',
	'who.tree': 'Folder structure',
	'who.facts': '{t} templates · {f} folders, all in the product today.',
	'lfaq.title': 'Frequently asked.',
	'lfaq.desc': 'Short answers before you move deal documents into Rakda.',
	'lfaq.all': 'All {n} questions',
	'close.faq': 'FAQ',
	'close.fitur': 'All features',
	'fitur.metaTitle': 'Rakda features — access, per-group Q&A, templates, room lifecycle',
	'fitur.metaDescription':
		'Every feature of the Rakda virtual data room: four-level per-group, per-folder access, per-group Q&A, five folder templates, three room states, and a six-step setup with no training.',
	'fitur.title': 'Every feature, one page.',
	'fitur.lede':
		'The main page shows three things. This page shows the rest: per-group Q&A, five templates, three room states, and the six setup steps. All of it runs in the code today.',
	'fitur.perm.t': 'Full access control: four levels',
	'fitur.perm.b':
		'The grid on the main page shows two permissions. The app has four, per group per folder: View, Watermark, Download (a watermarked PDF), and Download clean PDF. Clean download turns on Download; Download and Watermark turn on View. Watermark and clean download cannot both be on: marking the screen while handing out a clean file protects nothing. Permissions flow down to subfolders.',
	'harga.metaTitle': 'Rakda pricing — flat, published, no per-guest fee',
	'harga.metaDescription':
		'Rakda’s virtual data room pricing is not final. What is certain: a 30-day trial, one flat price per plan, no per-guest or per-GB fees, and the same security on every plan.',
	'harga.title': 'Clear pricing. Not final yet.',
	'harga.lede':
		'We have not published numbers. What is certain is written below; the rest will appear on this page, not through a quote or a demo call.',
	'harga.1.t': 'A 30-day trial',
	'harga.1.b':
		'Every new account gets the full 30 days, not 14. A deal rarely closes in two weeks.',
	'harga.2.t': 'One flat price per plan',
	'harga.2.b':
		'Plans differ by capacity, not by whom you invite. The numbers will be listed here, openly.',
	'harga.3.t': 'No per-guest, per-seat, or per-GB fees',
	'harga.3.b':
		'Guests are the other side of your transaction. We do not bill them, and we do not bill you for them.',
	'harga.4.t': 'The same security on every plan',
	'harga.4.b':
		'Privacy mode, viewer hardening, and view watermarking are not sold per plan. A plan gate never reduces anyone’s security.',
	'harga.5.t': 'No permanent free plan',
	'harga.5.b': 'After the trial, every plan is paid. We would rather say so now.',
	'harga.6.t': 'No sales, no quotes',
	'harga.6.b': 'You sign up yourself, read the price yourself, and decide yourself.',
	'harga.cta': 'Tell me when pricing is published',
	'art.related': 'Read next',
	'art.updated': 'Updated {date}'
};
