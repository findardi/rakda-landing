import type { Locale } from '$lib/i18n';

export type L = Record<Locale, string>;

export const ROOM_NAME = 'Proyek Cendana';
export const DEMO_IP = '203.0.113.24'; // documentation range, never a real address
export const ACCESS_UNTIL: L = { id: '30 Sep 2026', en: '30 Sep 2026' };

export type Group = { id: string; name: L; reader: string };
export const GROUPS: readonly Group[] = [
	{ id: 'a', name: { id: 'Pembeli A', en: 'Buyer A' }, reader: 'rina@pembeli-a.example' },
	{ id: 'b', name: { id: 'Pembeli B', en: 'Buyer B' }, reader: 'dimas@pembeli-b.example' },
	{ id: 'adv', name: { id: 'Penasihat', en: 'Advisors' }, reader: 'ayu@penasihat.example' }
];

// The landing grid: the first two groups over three of the twelve folders.
export const HERO_GROUPS: readonly Group[] = GROUPS.slice(0, 2);

export type Folder = {
	id: string;
	name: L;
	doc: L;
	pages: number;
	excerpt: L;
	rows: [L, string][];
};

// The twelve top-level folders of the real M&A due diligence template, each with one
// synthetic document. Every figure below is invented for the demonstration.
export const FOLDERS: readonly Folder[] = [
	{
		id: 'overview',
		name: { id: 'Ringkasan perusahaan', en: 'Company overview' },
		doc: { id: 'Profil perusahaan 2026.pdf', en: 'Company profile 2026.pdf' },
		pages: 18,
		excerpt: {
			id: 'PT Cendana Agri Nusantara memproduksi minyak atsiri untuk pasar ekspor sejak 2011, dengan dua pabrik di Jawa Timur dan 640 karyawan tetap.',
			en: 'PT Cendana Agri Nusantara has produced essential oils for export since 2011, with two plants in East Java and 640 permanent employees.'
		},
		rows: [
			[{ id: 'Tahun berdiri', en: 'Founded' }, '2011'],
			[{ id: 'Karyawan tetap', en: 'Permanent staff' }, '640'],
			[{ id: 'Pabrik', en: 'Plants' }, '2']
		]
	},
	{
		id: 'financials',
		name: { id: 'Keuangan', en: 'Financials' },
		doc: { id: 'Laporan keuangan FY2025.pdf', en: 'Financial statements FY2025.pdf' },
		pages: 24,
		excerpt: {
			id: 'Laporan keuangan konsolidasian untuk tahun yang berakhir 31 Desember 2025, disajikan dalam jutaan rupiah kecuali dinyatakan lain.',
			en: 'Consolidated financial statements for the year ended 31 December 2025, presented in millions of rupiah unless stated otherwise.'
		},
		rows: [
			[{ id: 'Pendapatan', en: 'Revenue' }, '184.230'],
			[{ id: 'Laba kotor', en: 'Gross profit' }, '61.417'],
			[{ id: 'Laba bersih', en: 'Net profit' }, '22.905']
		]
	},
	{
		id: 'legal',
		name: { id: 'Legal & korporasi', en: 'Legal & corporate' },
		doc: { id: 'Akta perubahan anggaran dasar.pdf', en: 'Deed of amendment to the articles.pdf' },
		pages: 31,
		excerpt: {
			id: 'Akta Nomor 14 tanggal 9 Februari 2024 tentang perubahan anggaran dasar dan susunan pemegang saham perseroan.',
			en: 'Deed No. 14 dated 9 February 2024 on the amendment to the articles of association and the composition of shareholders.'
		},
		rows: [
			[{ id: 'Nomor akta', en: 'Deed number' }, '14/2024'],
			[{ id: 'Pemegang saham', en: 'Shareholders' }, '5'],
			[{ id: 'Modal disetor', en: 'Paid-up capital' }, '48.000']
		]
	},
	{
		id: 'tax',
		name: { id: 'Pajak', en: 'Tax' },
		doc: { id: 'SPT Tahunan PPh Badan 2025.pdf', en: 'Corporate income tax return 2025.pdf' },
		pages: 12,
		excerpt: {
			id: 'Surat Pemberitahuan Tahunan PPh Badan tahun pajak 2025 beserta lampiran rekonsiliasi fiskal.',
			en: 'Annual corporate income tax return for the 2025 tax year with the fiscal reconciliation schedules.'
		},
		rows: [
			[{ id: 'Tahun pajak', en: 'Tax year' }, '2025'],
			[{ id: 'Status', en: 'Status' }, 'Nihil'],
			[{ id: 'Dilaporkan', en: 'Filed' }, '28 Apr 2026']
		]
	},
	{
		id: 'contracts',
		name: { id: 'Kontrak & komersial', en: 'Contracts & commercial' },
		doc: {
			id: 'Kontrak distribusi PT Nusantara.pdf',
			en: 'Distribution agreement PT Nusantara.pdf'
		},
		pages: 46,
		excerpt: {
			id: 'Perjanjian distribusi eksklusif wilayah Jawa dan Bali antara perseroan dan PT Nusantara Distribusi, berlaku lima tahun sejak 1 Juli 2025.',
			en: 'Exclusive distribution agreement for Java and Bali between the company and PT Nusantara Distribusi, valid five years from 1 July 2025.'
		},
		rows: [
			[{ id: 'Berlaku sampai', en: 'Valid until' }, '30 Jun 2030'],
			[{ id: 'Wilayah', en: 'Territory' }, 'Jawa, Bali'],
			[{ id: 'Minimum order', en: 'Minimum order' }, '120 t/th']
		]
	},
	{
		id: 'hr',
		name: { id: 'SDM', en: 'Human resources' },
		doc: { id: 'Daftar karyawan & remunerasi.pdf', en: 'Employee register & remuneration.pdf' },
		pages: 9,
		excerpt: {
			id: 'Daftar karyawan tetap per 30 Juni 2026 berikut struktur remunerasi manajemen kunci.',
			en: 'Register of permanent employees as of 30 June 2026 with the remuneration structure of key management.'
		},
		rows: [
			[{ id: 'Karyawan tetap', en: 'Permanent staff' }, '640'],
			[{ id: 'Manajemen kunci', en: 'Key management' }, '7'],
			[{ id: 'Serikat pekerja', en: 'Union' }, 'Ya']
		]
	},
	{
		id: 'ip',
		name: { id: 'Kekayaan intelektual', en: 'Intellectual property' },
		doc: { id: 'Sertifikat merek Cendana.pdf', en: 'Cendana trademark certificate.pdf' },
		pages: 4,
		excerpt: {
			id: 'Sertifikat merek “Cendana” kelas 3 dan 30, diperpanjang Maret 2026 dan berlaku sampai 2036.',
			en: '“Cendana” trademark certificate, classes 3 and 30, renewed March 2026 and valid until 2036.'
		},
		rows: [
			[{ id: 'Kelas', en: 'Classes' }, '3, 30'],
			[{ id: 'Berlaku sampai', en: 'Valid until' }, '2036'],
			[{ id: 'Sengketa', en: 'Disputes' }, '0']
		]
	},
	{
		id: 'product',
		name: { id: 'Produk & teknologi', en: 'Product & technology' },
		doc: { id: 'Arsitektur sistem v3.pdf', en: 'System architecture v3.pdf' },
		pages: 27,
		excerpt: {
			id: 'Peta proses produksi dan sistem kendali mutu, termasuk sertifikasi ISO 22000 untuk kedua pabrik.',
			en: 'Map of the production process and quality control system, including ISO 22000 certification for both plants.'
		},
		rows: [
			[{ id: 'Lini produksi', en: 'Production lines' }, '6'],
			[{ id: 'Kapasitas', en: 'Capacity' }, '2.400 t/th'],
			[{ id: 'Sertifikasi', en: 'Certification' }, 'ISO 22000']
		]
	},
	{
		id: 'customers',
		name: { id: 'Pelanggan & penjualan', en: 'Customers & sales' },
		doc: { id: 'Pipeline penjualan Q3 2026.pdf', en: 'Sales pipeline Q3 2026.pdf' },
		pages: 15,
		excerpt: {
			id: 'Sepuluh pelanggan terbesar menyumbang 71% pendapatan; tiga di antaranya terikat kontrak multi-tahun.',
			en: 'The ten largest customers account for 71% of revenue; three of them are on multi-year contracts.'
		},
		rows: [
			[{ id: 'Pelanggan aktif', en: 'Active customers' }, '138'],
			[{ id: '10 terbesar', en: 'Top 10 share' }, '71%'],
			[{ id: 'Ekspor', en: 'Export share' }, '58%']
		]
	},
	{
		id: 'assets',
		name: { id: 'Aset & asuransi', en: 'Assets & insurance' },
		doc: { id: 'Daftar aset tetap 2025.pdf', en: 'Fixed asset register 2025.pdf' },
		pages: 22,
		excerpt: {
			id: 'Daftar aset tetap per 31 Desember 2025 dengan nilai buku, polis asuransi, dan status agunan.',
			en: 'Fixed asset register as of 31 December 2025 with book values, insurance policies, and collateral status.'
		},
		rows: [
			[{ id: 'Nilai buku', en: 'Book value' }, '96.310'],
			[{ id: 'Diagunkan', en: 'Pledged' }, '2 unit'],
			[{ id: 'Polis aktif', en: 'Active policies' }, '11']
		]
	},
	{
		id: 'compliance',
		name: { id: 'Kepatuhan & risiko', en: 'Compliance & risk' },
		doc: { id: 'Register risiko 2026.pdf', en: 'Risk register 2026.pdf' },
		pages: 11,
		excerpt: {
			id: 'Register risiko perusahaan 2026: 23 risiko teridentifikasi, 4 di antaranya berperingkat tinggi dengan rencana mitigasi.',
			en: 'Corporate risk register 2026: 23 identified risks, 4 rated high, each with a mitigation plan.'
		},
		rows: [
			[{ id: 'Risiko tercatat', en: 'Risks logged' }, '23'],
			[{ id: 'Peringkat tinggi', en: 'Rated high' }, '4'],
			[{ id: 'Audit terakhir', en: 'Last audit' }, 'Mei 2026']
		]
	},
	{
		id: 'closing',
		name: { id: 'Dokumen closing', en: 'Closing documents' },
		doc: { id: 'Draf perjanjian jual beli saham.pdf', en: 'Draft share purchase agreement.pdf' },
		pages: 58,
		excerpt: {
			id: 'Draf ketujuh perjanjian jual beli saham, termasuk jadwal jaminan dan mekanisme penyesuaian harga.',
			en: 'Seventh draft of the share purchase agreement, including the warranty schedules and the price adjustment mechanism.'
		},
		rows: [
			[{ id: 'Draf', en: 'Draft' }, '7'],
			[{ id: 'Jaminan', en: 'Warranties' }, '41'],
			[{ id: 'Escrow', en: 'Escrow' }, '10%']
		]
	}
];

// Engagement sample: seconds spent on each of the 24 pages of the FY2025 statements by one reader.
export const HERO_FOLDERS: readonly Folder[] = [FOLDERS[1], FOLDERS[2], FOLDERS[5]];
export const TEMPLATE_FOLDER_TOTAL = 53; // sum of TEMPLATES[].count, checked in the e2e test

export const DWELL: readonly number[] = [
	38, 52, 71, 64, 190, 242, 118, 96, 44, 0, 0, 205, 388, 172, 61, 0, 0, 0, 27, 33, 0, 0, 0, 0
];

export type TemplateNode = { name: L; children?: TemplateNode[] };
export type Template = { key: string; name: L; desc: L; count: number; folders: TemplateNode[] };

// The five built-in folder templates, names and structure as shipped in the app.
export const TEMPLATES: readonly Template[] = [
	{
		key: 'ma-dd',
		name: { id: 'Due diligence M&A', en: 'M&A due diligence' },
		desc: {
			id: 'Jual-beli perusahaan — checklist lengkap untuk pemeriksaan seluruh aspek bisnis.',
			en: 'Buying or selling a company — a full checklist covering every aspect of the business.'
		},
		count: 22,
		folders: [
			{ name: { id: 'Ringkasan perusahaan', en: 'Company overview' } },
			{
				name: { id: 'Keuangan', en: 'Financials' },
				children: [
					{ name: { id: 'Laporan historis', en: 'Historical statements' } },
					{ name: { id: 'Laporan manajemen', en: 'Management accounts' } },
					{ name: { id: 'Proyeksi', en: 'Projections' } }
				]
			},
			{
				name: { id: 'Legal & korporasi', en: 'Legal & corporate' },
				children: [
					{ name: { id: 'Dokumen korporasi', en: 'Corporate documents' } },
					{ name: { id: 'Perjanjian pemegang saham', en: 'Shareholder agreements' } },
					{ name: { id: 'Litigasi & sengketa', en: 'Litigation & disputes' } },
					{ name: { id: 'Perizinan & regulasi', en: 'Licenses & regulatory' } }
				]
			},
			{ name: { id: 'Pajak', en: 'Tax' } },
			{
				name: { id: 'Kontrak & komersial', en: 'Contracts & commercial' },
				children: [
					{ name: { id: 'Kontrak pelanggan', en: 'Customer contracts' } },
					{ name: { id: 'Kontrak pemasok', en: 'Supplier contracts' } },
					{ name: { id: 'Kemitraan & NDA', en: 'Partnerships & NDAs' } }
				]
			},
			{ name: { id: 'SDM', en: 'Human resources' } },
			{ name: { id: 'Kekayaan intelektual', en: 'Intellectual property' } },
			{ name: { id: 'Produk & teknologi', en: 'Product & technology' } },
			{ name: { id: 'Pelanggan & penjualan', en: 'Customers & sales' } },
			{ name: { id: 'Aset & asuransi', en: 'Assets & insurance' } },
			{ name: { id: 'Kepatuhan & risiko', en: 'Compliance & risk' } },
			{ name: { id: 'Dokumen closing', en: 'Closing documents' } }
		]
	},
	{
		key: 'fundraising',
		name: { id: 'Fundraising', en: 'Fundraising' },
		desc: {
			id: 'Penggalangan dana — ruangan ringkas yang bercerita ke investor, dari pitch sampai traksi.',
			en: 'Raising capital — a compact room that tells investors the story, from pitch to traction.'
		},
		count: 11,
		folders: [
			{ name: { id: 'Ringkasan & pitch', en: 'Overview & pitch' } },
			{
				name: { id: 'Keuangan', en: 'Financials' },
				children: [
					{ name: { id: 'Laporan keuangan', en: 'Financial statements' } },
					{ name: { id: 'Proyeksi & model', en: 'Projections & model' } }
				]
			},
			{
				name: { id: 'Legal & struktur', en: 'Legal & structure' },
				children: [
					{ name: { id: 'Dokumen korporasi', en: 'Corporate documents' } },
					{ name: { id: 'Cap table & riwayat pendanaan', en: 'Cap table & funding history' } }
				]
			},
			{ name: { id: 'Produk & teknologi', en: 'Product & technology' } },
			{ name: { id: 'Traksi & metrik', en: 'Traction & metrics' } },
			{ name: { id: 'Pasar & kompetisi', en: 'Market & competition' } },
			{ name: { id: 'Tim', en: 'Team' } }
		]
	},
	{
		key: 'property',
		name: { id: 'Transaksi properti', en: 'Property transaction' },
		desc: {
			id: 'Jual-beli atau pemeriksaan satu aset properti — berpusat pada objek, bukan perusahaan.',
			en: 'Sale or review of a single property asset — centred on the object, not a company.'
		},
		count: 7,
		folders: [
			{ name: { id: 'Kepemilikan & sertifikat', en: 'Title & ownership' } },
			{ name: { id: 'Sewa & penghuni', en: 'Leases & tenancy' } },
			{ name: { id: 'Keuangan properti', en: 'Property financials' } },
			{ name: { id: 'Perizinan & tata ruang', en: 'Permits & zoning' } },
			{ name: { id: 'Inspeksi & lingkungan', en: 'Inspections & environmental' } },
			{ name: { id: 'Kontrak pengelolaan', en: 'Management contracts' } },
			{ name: { id: 'Asuransi & sengketa', en: 'Insurance & disputes' } }
		]
	},
	{
		key: 'audit',
		name: { id: 'Audit & pelaporan', en: 'Audit & reporting' },
		desc: {
			id: 'Audit atau pelaporan berkala — bukti per periode buku untuk auditor.',
			en: 'An audit or recurring reporting cycle — evidence per book period for the auditors.'
		},
		count: 7,
		folders: [
			{ name: { id: 'Laporan keuangan', en: 'Financial statements' } },
			{ name: { id: 'Buku besar & rekonsiliasi', en: 'General ledger & reconciliations' } },
			{ name: { id: 'Pajak', en: 'Tax' } },
			{ name: { id: 'Perbankan & kas', en: 'Banking & cash' } },
			{ name: { id: 'Kontrak material', en: 'Material contracts' } },
			{ name: { id: 'Kebijakan & SOP', en: 'Policies & SOPs' } },
			{ name: { id: 'Korespondensi auditor', en: 'Auditor correspondence' } }
		]
	},
	{
		key: 'legal',
		name: { id: 'Legal & litigasi', en: 'Legal & litigation' },
		desc: {
			id: 'Perkara atau sengketa — kronologi dan bukti untuk kuasa hukum.',
			en: 'A case or dispute — chronology and evidence for counsel.'
		},
		count: 6,
		folders: [
			{ name: { id: 'Dokumen inti perkara', en: 'Core case documents' } },
			{ name: { id: 'Korespondensi', en: 'Correspondence' } },
			{ name: { id: 'Bukti & catatan internal', en: 'Evidence & internal records' } },
			{ name: { id: 'Keuangan terkait', en: 'Related financials' } },
			{ name: { id: 'Laporan ahli', en: 'Expert reports' } },
			{ name: { id: 'Pengajuan & putusan', en: 'Filings & rulings' } }
		]
	}
];
