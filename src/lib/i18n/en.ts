import type { id } from './id';

export const en: Record<keyof typeof id, string> = {
	'meta.title': 'Rakda — A secure data room for your deal documents',
	'meta.description':
		'A virtual data room you set up yourself: access per group per folder, a watermark on every page, and an activity trail no one can erase. 30-day trial.',

	'nav.skip': 'Skip to content',
	'nav.signIn': 'Sign in',
	'nav.trial': 'Start trial',
	'nav.faq': 'FAQ',
	'nav.lang': 'ID',
	'nav.langAria': 'Ganti ke Bahasa Indonesia',

	'cta.notify': 'Tell me when the trial opens',
	'cta.notify.short': 'Notify me',
	'cta.notify.subject': 'Tell me when the Rakda trial opens',
	'cta.soon': 'The 30-day trial opens soon.',

	'hero.h1': 'Who sees what. You decide.',
	'hero.sub':
		'Rakda is a data room for deal documents: access per group per folder, a watermark on every page that is opened, and an activity trail no one can erase.',
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
	'grid.rule': 'Clean PDF download turns on Download; Download and watermark turn on View.',
	'grid.exclusive':
		'Watermark and clean download cannot both be on: marking the screen while handing out a clean file protects nothing.',
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

	'close.title': 'A secure data room for your deal documents.',
	'close.body':
		'Built for confidential documents. Controlled, audited access from preparation to archive.',
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
	'footer.lang': 'Bahasa Indonesia',
	'footer.rights': '© 2026 {org}',

	'sim.badge': 'SIMULATION — fictional data',
	'sim.aria':
		'This block is a simulation with fictional data. There is no real file, account, or download.',

	'legal.updated': 'Updated {date}',
	'legal.org': 'Legal entity',
	'legal.address': 'Address',
	'legal.email': 'Email'
};
