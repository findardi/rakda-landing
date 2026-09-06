import type { Locale } from '$lib/i18n';
import { ARTICLE_TITLES, type ArticleSlug } from './slugs';

export type L = Record<Locale, string>;
export type ArticleSection = { h: L; p: L[]; table?: { head: [L, L, L]; rows: [L, L, L][] } };
export type Article = {
	slug: ArticleSlug;
	title: L;
	description: L;
	h1: L;
	lede: L;
	updated: string;
	sections: ArticleSection[];
	related: ArticleSlug[];
};

// One page per search intent. Every sentence states what the product does today
// (PRODUCT.md); nothing here promises a planned feature, a price, or a certificate.
export const ARTICLES: Record<ArticleSlug, Article> = {
	'apa-itu-virtual-data-room': {
		slug: 'apa-itu-virtual-data-room',
		title: {
			id: 'Apa itu virtual data room (VDR)? — Rakda',
			en: 'What is a virtual data room (VDR)? — Rakda'
		},
		description: {
			id: 'Penjelasan singkat virtual data room: apa isinya, kapan dibutuhkan, apa bedanya dengan folder berbagi, siapa saja di dalamnya, dan apa yang tidak bisa dilakukan VDR mana pun.',
			en: 'A short explanation of the virtual data room: what it holds, when you need one, how it differs from a shared folder, who is in it, and what no VDR can do.'
		},
		h1: ARTICLE_TITLES['apa-itu-virtual-data-room'],
		lede: {
			id: 'Untuk yang pertama kali diminta “siapkan data room”: apa isinya, kapan dibutuhkan, dan apa bedanya dengan folder berbagi.',
			en: 'For anyone asked to “set up a data room” for the first time: what it holds, when it is needed, and how it differs from a shared folder.'
		},
		updated: '2026-09-06',
		sections: [
			{
				h: { id: 'Definisi', en: 'Definition' },
				p: [
					{
						id: 'Virtual data room (VDR) adalah tempat daring untuk menyimpan dan membagikan dokumen rahasia selama sebuah transaksi. Dua hal membedakannya dari penyimpanan biasa: kendali siapa boleh melihat apa, dan catatan siapa membuka apa.',
						en: 'A virtual data room (VDR) is an online place to store and share confidential documents during a transaction. Two things set it apart from ordinary storage: control over who may see what, and a record of who opened what.'
					},
					{
						id: 'Istilah lain yang dipakai di Indonesia: data room, ruang data, ruang data virtual. Semuanya merujuk ke hal yang sama.',
						en: 'Other names for the same thing: data room, deal room, ruang data.'
					}
				]
			},
			{
				h: { id: 'Kapan dibutuhkan', en: 'When you need one' },
				p: [
					{
						id: 'Setiap kali dokumen rahasia harus dibuka ke pihak luar dalam waktu terbatas: due diligence saat perusahaan dijual atau dibeli, penggalangan dana dari investor, transaksi properti, audit, dan litigasi.',
						en: 'Whenever confidential documents must be opened to outside parties for a limited time: due diligence when a company is sold or bought, raising capital from investors, property transactions, audits, and litigation.'
					},
					{
						id: 'Ciri umumnya: lebih dari satu pihak luar, masing-masing hanya boleh melihat sebagian, dan Anda perlu tahu siapa sudah membaca apa.',
						en: 'The common shape: more than one outside party, each allowed to see only part, and you need to know who has read what.'
					}
				]
			},
			{
				h: {
					id: 'Yang membedakannya dari folder berbagi',
					en: 'What sets it apart from a shared folder'
				},
				p: [
					{
						id: 'Tautan berbagi memberi satu izin yang sama untuk semua penerima dan bisa diteruskan ke siapa saja. Di VDR, izin diberikan per pihak per folder, dan folder yang tidak diizinkan tidak muncul sama sekali.',
						en: 'A sharing link gives every recipient the same permission and can be forwarded to anyone. In a VDR, permissions are granted per party per folder, and a folder a party is not allowed to see does not appear at all.'
					},
					{
						id: 'Dokumen dibuka lewat viewer, bukan diunduh sebagai berkas asli. Setiap halaman bisa diberi watermark identitas pembaca, dan setiap pembukaan tercatat: siapa, kapan, halaman mana, berapa lama.',
						en: 'Documents open in a viewer rather than being downloaded as the original file. Every page can carry the reader’s identity as a watermark, and every opening is recorded: who, when, which page, for how long.'
					}
				]
			},
			{
				h: { id: 'Siapa saja di dalamnya', en: 'Who is in it' },
				p: [
					{
						id: 'Di Rakda ada tiga peran. Pemilik membuat ruang dan memegang kendali penuh. Admin membantu menyusun folder, mengunggah, dan mengatur izin. Tamu adalah pihak luar: mereka membaca sesuai izin grupnya dan tidak pernah melihat aktivitas siapa pun.',
						en: 'Rakda has three roles. The Owner creates the room and holds full control. Admins help build folders, upload, and set permissions. Guests are the outside parties: they read according to their group’s permissions and never see anyone’s activity.'
					},
					{
						id: 'Tamu dikelompokkan ke grup, misalnya “Pembeli A” dan “Penasihat”. Izin diberikan ke grup, bukan orang per orang.',
						en: 'Guests are organised into groups, say “Buyer A” and “Advisors”. Permissions go to the group, not to people one by one.'
					}
				]
			},
			{
				h: { id: 'Siklus sebuah ruang', en: 'A room’s lifecycle' },
				p: [
					{
						id: 'Ruang lahir dalam Persiapan: privat, tamu belum bisa masuk. Setelah folder, dokumen, grup, dan izin siap, ruang dibuka menjadi Aktif dan tamu diundang lewat email. Setelah deal selesai, ruang dibekukan sebagai Arsip: masih bisa dibaca, unduhan dimatikan, dan paket arsip (ZIP seluruh ruang berikut CSV aktivitas) bisa dibuat.',
						en: 'A room is born in Prepare: private, no guest can enter. Once folders, documents, groups, and permissions are ready, it is opened to Active and guests are invited by email. When the deal is done, the room is frozen as Archive: still readable, downloads off, and an archive package (a ZIP of the whole room with the activity CSV) can be generated.'
					}
				]
			},
			{
				h: { id: 'Yang tidak bisa dilakukan VDR mana pun', en: 'What no VDR can do' },
				p: [
					{
						id: 'Tidak ada VDR yang bisa mencegah tangkapan layar; watermark memastikan tangkapan apa pun membawa identitas pengambilnya. Halaman yang sudah dimuat di browser tamu tidak bisa ditarik kembali; pencabutan akses berlaku untuk pembukaan berikutnya. Penyedia yang menjanjikan sebaliknya sebaiknya ditanya bagaimana caranya.',
						en: 'No VDR can prevent screenshots; a watermark makes sure any capture carries the identity of whoever took it. A page already loaded in a guest’s browser cannot be recalled; revoking access applies to the next opening. A vendor who promises otherwise should be asked how.'
					}
				]
			}
		],
		related: ['rakda-vs-google-drive', 'data-room-fundraising', 'data-room-due-diligence-ma']
	},

	'data-room-fundraising': {
		slug: 'data-room-fundraising',
		title: { id: 'Data room untuk fundraising — Rakda', en: 'A data room for fundraising — Rakda' },
		description: {
			id: 'Data room untuk penggalangan dana: dokumen apa yang diminta investor, kenapa tautan Drive tidak cukup saat beberapa investor memeriksa bersamaan, dan bagaimana Rakda menyusunnya.',
			en: 'A data room for raising capital: what investors ask for, why a Drive link is not enough when several investors look at once, and how Rakda lays it out.'
		},
		h1: ARTICLE_TITLES['data-room-fundraising'],
		lede: {
			id: 'Setelah pitch, investor meminta data room. Yang mereka butuhkan, yang perlu Anda tahu, dan bagaimana Rakda menyusunnya.',
			en: 'After the pitch, investors ask for a data room. What they need, what you need to know, and how Rakda lays it out.'
		},
		updated: '2026-09-06',
		sections: [
			{
				h: { id: 'Yang diminta investor', en: 'What investors ask for' },
				p: [
					{
						id: 'Template Fundraising di Rakda menyusun 11 folder: ringkasan dan pitch; keuangan (laporan keuangan, proyeksi dan model); legal dan struktur (dokumen korporasi, cap table dan riwayat pendanaan); produk dan teknologi; traksi dan metrik; pasar dan kompetisi; serta tim.',
						en: 'Rakda’s Fundraising template lays out 11 folders: overview and pitch; financials (financial statements, projections and model); legal and structure (corporate documents, cap table and funding history); product and technology; traction and metrics; market and competition; and team.'
					},
					{
						id: 'Template menambahkan folder ke ruang Anda dan tidak pernah mengganti yang sudah ada. Folder yang tidak relevan tinggal dibiarkan kosong atau dihapus.',
						en: 'A template adds folders to your room and never replaces what is there. A folder you do not need can stay empty or be deleted.'
					}
				]
			},
			{
				h: { id: 'Kenapa bukan tautan Drive', en: 'Why not a Drive link' },
				p: [
					{
						id: 'Sebuah putaran biasanya dibaca beberapa investor sekaligus. Satu tautan berarti satu izin untuk semua, dan tautan itu bisa diteruskan ke rekan, analis, atau kompetitor tanpa Anda tahu.',
						en: 'A round is usually read by several investors at once. One link means one permission for everyone, and that link can be forwarded to a partner, an analyst, or a competitor without your knowledge.'
					},
					{
						id: 'Yang lebih mahal adalah yang tidak Anda ketahui: investor mana yang sungguh membaca proyeksi, halaman mana yang dibuka lama, dan siapa yang belum membuka apa pun sejak minggu lalu.',
						en: 'What costs more is what you do not know: which investor actually read the projections, which pages held their attention, and who has not opened anything since last week.'
					}
				]
			},
			{
				h: { id: 'Bagaimana di Rakda', en: 'How Rakda handles it' },
				p: [
					{
						id: 'Satu grup per investor. Tiap grup hanya melihat folder yang Anda izinkan, dan tidak melihat grup lain. Setiap halaman yang dibuka membawa watermark identitas pembaca, waktu, dan alamat IP.',
						en: 'One group per investor. Each group sees only the folders you allow, and never sees another group. Every page opened carries the reader’s identity, the time, and the IP address as a watermark.'
					},
					{
						id: 'Per pembaca, Anda melihat halaman demi halaman berikut durasinya. Pertanyaan masuk lewat Q&A yang terpisah per grup; jawaban yang berguna untuk semua bisa diangkat menjadi FAQ tanpa identitas penanya.',
						en: 'Per reader, you see page by page with dwell time. Questions arrive through a Q&A siloed per group; an answer useful to everyone can be promoted to an FAQ without the asker’s identity.'
					}
				]
			},
			{
				h: { id: 'Setelah putaran selesai', en: 'After the round' },
				p: [
					{
						id: 'Arsipkan ruang: tamu masih bisa membaca, unduhan dimatikan, setiap halaman diberi watermark. Paket arsip berisi ZIP seluruh ruang berikut CSV aktivitas. Untuk putaran berikutnya, ruang arsip bisa diaktifkan kembali.',
						en: 'Archive the room: guests can still read, downloads are off, every page is watermarked. The archive package holds a ZIP of the whole room with the activity CSV. For the next round, an archived room can be reactivated.'
					}
				]
			},
			{
				h: { id: 'Batas yang perlu Anda tahu', en: 'Limits you should know' },
				p: [
					{
						id: 'Viewer tidak disajikan di layar di bawah 768×480; investor membaca di laptop. Tangkapan layar tidak bisa dicegah oleh siapa pun; watermark memastikan tangkapan membawa identitas pengambilnya.',
						en: 'The viewer is not served on screens below 768×480; investors read on a laptop. Screenshots cannot be prevented by anyone; the watermark makes sure a capture carries the identity of whoever took it.'
					}
				]
			}
		],
		related: ['data-room-due-diligence-ma', 'rakda-vs-google-drive', 'apa-itu-virtual-data-room']
	},

	'data-room-due-diligence-ma': {
		slug: 'data-room-due-diligence-ma',
		title: {
			id: 'Data room untuk due diligence M&A — Rakda',
			en: 'A data room for M&A due diligence — Rakda'
		},
		description: {
			id: 'Data room untuk due diligence M&A: folder yang diperiksa pembeli, cara memisahkan beberapa penawar dalam satu ruang, jejak aktivitas yang bisa dipertanggungjawabkan, dan penutupan deal.',
			en: 'A data room for M&A due diligence: the folders a buyer examines, how to keep several bidders apart in one room, an activity trail you can stand behind, and closing the deal.'
		},
		h1: ARTICLE_TITLES['data-room-due-diligence-ma'],
		lede: {
			id: 'Beberapa calon pembeli, satu ruang, dan jejak yang bisa dipertanggungjawabkan saat deal ditutup.',
			en: 'Several bidders, one room, and a trail you can stand behind when the deal closes.'
		},
		updated: '2026-09-06',
		sections: [
			{
				h: { id: 'Yang diperiksa pembeli', en: 'What a buyer examines' },
				p: [
					{
						id: 'Template Due diligence M&A di Rakda menyusun 22 folder dalam dua belas kelompok: ringkasan perusahaan, keuangan, legal dan korporasi, pajak, kontrak dan komersial, SDM, kekayaan intelektual, produk dan teknologi, pelanggan dan penjualan, aset dan asuransi, kepatuhan dan risiko, serta dokumen closing.',
						en: 'Rakda’s M&A due diligence template lays out 22 folders in twelve groups: company overview, financials, legal and corporate, tax, contracts and commercial, human resources, intellectual property, product and technology, customers and sales, assets and insurance, compliance and risk, and closing documents.'
					},
					{
						id: 'Unggah dokumen ke folder mana pun; versi sebelumnya tetap tersimpan dan bisa dipulihkan.',
						en: 'Upload into any folder; earlier versions are kept and can be restored.'
					}
				]
			},
			{
				h: { id: 'Beberapa penawar, satu ruang', en: 'Several bidders, one room' },
				p: [
					{
						id: 'Setiap penawar masuk ke grupnya sendiri. Penawar tahap awal cukup melihat ringkasan dan keuangan; yang sudah menandatangani term sheet dibuka ke legal, kontrak, dan SDM. Folder yang tidak diizinkan tidak muncul sama sekali di daftar mereka.',
						en: 'Each bidder goes into its own group. An early-stage bidder sees the overview and financials; one that has signed a term sheet is opened to legal, contracts, and HR. A folder a group is not allowed to see does not appear in their list at all.'
					},
					{
						id: 'Q&A terpisah per grup: pertanyaan Pembeli A tidak pernah terlihat oleh Pembeli B. Anda menjawab dari satu antrean dan mengekspor CSV-nya.',
						en: 'Q&A is siloed per group: Buyer A’s questions are never visible to Buyer B. You answer from one queue and export the CSV.'
					}
				]
			},
			{
				h: { id: 'Jejak yang bisa dipertanggungjawabkan', en: 'A trail you can stand behind' },
				p: [
					{
						id: 'Setiap pembukaan halaman tercatat: siapa, kapan, halaman mana, berapa lama, dari alamat IP mana. Catatan ini hanya-tambah; nama dan aktor dibekukan saat dicatat, dan tidak ada entri yang bisa diubah atau dihapus, termasuk oleh pemilik ruang.',
						en: 'Every page opening is recorded: who, when, which page, for how long, from which IP address. The record is append-only; names and actors are frozen at write time, and no entry can be edited or deleted, not even by the room owner.'
					},
					{
						id: 'Saat ada sengketa tentang apa yang sudah diungkapkan, CSV aktivitas menjawabnya.',
						en: 'When there is a dispute about what was disclosed, the activity CSV answers it.'
					}
				]
			},
			{
				h: { id: 'Penasihat Anda sendiri', en: 'Your own advisors' },
				p: [
					{
						id: 'Kuasa hukum dan penasihat keuangan penjual biasanya perlu berkas untuk dikerjakan. Beri grup mereka izin Unduh PDF tanpa watermark: rendisi bersih, tanpa watermark. Berkas asli yang diunggah tetap tidak pernah keluar dari server, untuk siapa pun.',
						en: 'The seller’s counsel and financial advisors usually need files to work on. Give their group the Download clean PDF permission: a clean rendition, no watermark. The uploaded original still never leaves the server, for anyone.'
					}
				]
			},
			{
				h: { id: 'Menutup deal', en: 'Closing the deal' },
				p: [
					{
						id: 'Setelah penandatanganan, arsipkan ruang. Tamu masih bisa membaca, unduhan dimatikan, dan setiap halaman diberi watermark. Paket arsip berisi ZIP seluruh ruang berikut CSV aktivitas, dengan tautan yang berlaku 30 hari.',
						en: 'After signing, archive the room. Guests can still read, downloads are off, and every page is watermarked. The archive package holds a ZIP of the whole room with the activity CSV, on a link valid for 30 days.'
					}
				]
			}
		],
		related: ['data-room-fundraising', 'rakda-vs-google-drive', 'apa-itu-virtual-data-room']
	},

	'rakda-vs-google-drive': {
		slug: 'rakda-vs-google-drive',
		title: {
			id: 'Rakda vs Google Drive untuk dokumen deal',
			en: 'Rakda vs Google Drive for deal documents'
		},
		description: {
			id: 'Kapan Google Drive cukup, kapan tidak, dan apa yang berbeda di Rakda saat dokumen rahasia harus dibuka ke pihak lawan: izin per grup, watermark, jejak aktivitas, dan berkas asli yang tidak pernah keluar.',
			en: 'When Google Drive is enough, when it is not, and what differs in Rakda once confidential documents must be opened to the other side: per-group permissions, watermarks, an activity trail, and an original that never leaves.'
		},
		h1: ARTICLE_TITLES['rakda-vs-google-drive'],
		lede: {
			id: 'Drive tetap bagus untuk kerja sehari-hari. Masalah muncul saat dokumen rahasia harus dibuka ke pihak lawan.',
			en: 'Drive is still good for everyday work. The trouble starts when confidential documents must be opened to the other side.'
		},
		updated: '2026-09-06',
		sections: [
			{
				h: { id: 'Untuk apa Drive tetap tepat', en: 'What Drive is still right for' },
				p: [
					{
						id: 'Menyimpan, menyunting bersama, dan berbagi di dalam tim Anda sendiri. Rakda tidak menggantikan itu, dan tidak mencoba.',
						en: 'Storing, co-editing, and sharing inside your own team. Rakda does not replace that, and does not try to.'
					}
				]
			},
			{
				h: { id: 'Di mana bedanya', en: 'Where they differ' },
				p: [
					{
						id: 'Perbedaannya bukan pada fitur berbagi, melainkan pada apa yang terjadi setelah dokumen sampai di pihak lain.',
						en: 'The difference is not in the sharing feature but in what happens after a document reaches the other party.'
					}
				],
				table: {
					head: [
						{ id: 'Hal', en: 'Aspect' },
						{ id: 'Google Drive', en: 'Google Drive' },
						{ id: 'Rakda', en: 'Rakda' }
					],
					rows: [
						[
							{ id: 'Izin', en: 'Permissions' },
							{
								id: 'Per berkas atau folder, untuk orang tertentu atau “siapa saja yang punya tautan”.',
								en: 'Per file or folder, for named people or “anyone with the link”.'
							},
							{
								id: 'Per grup per folder: Lihat, Watermark, Unduh, Unduh tanpa watermark. Folder tanpa izin tidak muncul.',
								en: 'Per group per folder: View, Watermark, Download, Download clean. A folder without permission does not appear.'
							}
						],
						[
							{ id: 'Penerusan', en: 'Forwarding' },
							{
								id: 'Tautan yang diteruskan membawa izin yang sama.',
								en: 'A forwarded link carries the same permission.'
							},
							{
								id: 'Tamu masuk dengan akun dan undangan email ke satu grup; tidak ada tautan yang bisa diteruskan.',
								en: 'Guests sign in with an account and an email invitation to one group; there is no link to forward.'
							}
						],
						[
							{ id: 'Watermark', en: 'Watermark' },
							{ id: 'Tidak ada watermark per pembaca.', en: 'No per-reader watermark.' },
							{
								id: 'Identitas pembaca, waktu, dan alamat IP dibakar ke piksel setiap halaman yang dibuka.',
								en: 'The reader’s identity, the time, and the IP address are burned into the pixels of every page opened.'
							}
						],
						[
							{ id: 'Siapa membaca apa', en: 'Who read what' },
							{
								id: 'Tidak ada catatan halaman demi halaman berikut durasinya.',
								en: 'No page-by-page record with dwell time.'
							},
							{
								id: 'Setiap pembukaan mencatat halaman dan durasinya; catatan hanya-tambah dengan ekspor CSV.',
								en: 'Every opening records the page and the dwell time; the record is append-only, with CSV export.'
							}
						],
						[
							{ id: 'Berkas asli', en: 'The original file' },
							{
								id: 'Penerima dengan izin unduh mendapat berkas asli.',
								en: 'A recipient with download permission gets the original file.'
							},
							{
								id: 'Berkas asli tidak pernah keluar dari server; unduhan adalah rendisi, ber-watermark atau bersih.',
								en: 'The original never leaves the server; a download is a rendition, watermarked or clean.'
							}
						],
						[
							{ id: 'Q&A', en: 'Q&A' },
							{
								id: 'Komentar di berkas, terlihat oleh semua yang diberi akses komentar.',
								en: 'Comments on the file, visible to everyone given comment access.'
							},
							{
								id: 'Q&A terpisah per grup, dengan status dan ekspor CSV; FAQ tanpa identitas penanya.',
								en: 'Q&A siloed per group, with status and CSV export; an FAQ without the asker’s identity.'
							}
						],
						[
							{ id: 'Setelah selesai', en: 'After the deal' },
							{
								id: 'Anda mencabut akses satu per satu.',
								en: 'You revoke access one by one.'
							},
							{
								id: 'Arsip: ruang dibekukan, unduhan dimatikan, paket arsip ZIP berikut CSV aktivitas.',
								en: 'Archive: the room is frozen, downloads are off, an archive package ZIP with the activity CSV.'
							}
						]
					]
				}
			},
			{
				h: { id: 'Kapan Anda perlu pindah', en: 'When to move' },
				p: [
					{
						id: 'Saat penerima adalah pihak lawan: calon pembeli, investor, kuasa hukum pihak lain, auditor eksternal. Saat lebih dari satu pihak memeriksa bersamaan dan tidak boleh saling melihat. Saat Anda harus bisa menunjukkan, nanti, siapa membuka apa.',
						en: 'When the recipient is the other side: a prospective buyer, an investor, opposing counsel, an external auditor. When more than one party examines at once and they must not see each other. When you must be able to show, later, who opened what.'
					}
				]
			},
			{
				h: { id: 'Yang tetap sama', en: 'What stays the same' },
				p: [
					{
						id: 'Anda tetap bekerja di Drive. Saat deal dimulai, unggah PDF-nya ke ruang Rakda, undang pihak lawan ke grup masing-masing, dan biarkan Drive untuk tim Anda sendiri.',
						en: 'You keep working in Drive. When the deal starts, upload the PDFs into a Rakda room, invite the other parties into their own groups, and leave Drive to your own team.'
					},
					{
						id: 'Rakda bukan alat penyuntingan dan bukan penyimpanan umum: dokumen dibaca di viewer, dan viewer tidak disajikan di ponsel.',
						en: 'Rakda is not an editor and not general storage: documents are read in a viewer, and the viewer is not served on phones.'
					}
				]
			},
			{
				h: { id: 'Yang tidak kami klaim', en: 'What we do not claim' },
				p: [
					{
						id: 'Rakda tidak mencegah tangkapan layar; tidak ada yang bisa. Akses yang dicabut berlaku untuk pembukaan berikutnya, bukan halaman yang sudah dimuat. Unduhan ber-watermark adalah PDF raster tanpa lapisan teks, maksimum 750 halaman.',
						en: 'Rakda does not prevent screenshots; nothing can. Revoked access applies to the next opening, not to a page already loaded. Watermarked downloads are raster PDFs without a text layer, capped at 750 pages.'
					}
				]
			}
		],
		related: ['apa-itu-virtual-data-room', 'data-room-fundraising', 'data-room-due-diligence-ma']
	}
};
