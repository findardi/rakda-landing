import type { Locale } from '$lib/i18n';

export type L = Record<Locale, string>;
export type Fact = { label: L; value: string };
import type { Ref } from '$lib/refs';
export type { Ref } from '$lib/refs';
export { REFS } from '$lib/refs';
export type FaqItem = { id: string; q: L; a: L; facts?: Fact[]; ref?: Ref };
export type FaqGroup = { id: string; title: L; items: FaqItem[] };

// General questions only. Every answer states what the product does today;
// nothing here promises a feature that is planned, a price, or a certificate
// Rakda does not hold. Facts in `facts` are the machine numbers an answer cites.
export const FAQ_INTRO: L = {
	id: 'Jawaban singkat untuk pertanyaan yang paling sering diajukan sebelum sebuah tim memindahkan dokumen deal ke Rakda. Untuk mekanismenya, lihat halaman utama.',
	en: 'Short answers to the questions teams ask most before moving deal documents into Rakda. For the mechanics, see the main page.'
};

export const FAQ_GROUPS: FaqGroup[] = [
	{
		id: 'dasar',
		title: { id: 'Dasar-dasar', en: 'The basics' },
		items: [
			{
				id: 'apa-itu-ruang-data',
				ref: 'grid',
				q: { id: 'Apa itu ruang data virtual?', en: 'What is a virtual data room?' },
				a: {
					id: 'Ruang data virtual (virtual data room, VDR) adalah tempat daring untuk menyimpan dan membagikan dokumen rahasia selama sebuah transaksi, dengan kendali siapa boleh melihat apa dan catatan siapa membuka apa. Bedanya dengan folder berbagi biasa: izin diatur per pihak per folder, setiap halaman bisa diberi watermark, dan setiap pembukaan tercatat.',
					en: 'A virtual data room (VDR) is an online place to store and share confidential documents during a transaction, with control over who may see what and a record of who opened what. Unlike an ordinary shared folder, permissions are set per party per folder, every page can be watermarked, and every opening is recorded.'
				}
			},
			{
				id: 'apa-itu-rakda',
				q: { id: 'Apa itu Rakda?', en: 'What is Rakda?' },
				a: {
					id: 'Rakda adalah ruang data virtual yang Anda siapkan sendiri, tanpa pelatihan dan tanpa jadwal demo. Dibuat untuk tim deal kecil, pendiri startup, serta profesional legal dan keuangan yang menjalankan due diligence, penggalangan dana, M&A, transaksi properti, audit, atau litigasi. Bahasa Indonesia lebih dulu; bahasa Inggris tersedia.',
					en: 'Rakda is a virtual data room you set up yourself, with no training and no demo call. It is built for small deal teams, startup founders, and legal and finance professionals running due diligence, fundraising, M&A, property transactions, audits, or litigation. Indonesian first; English available.'
				}
			},
			{
				id: 'siapa-memakai',
				q: { id: 'Siapa yang memakai ruang data?', en: 'Who uses a data room?' },
				a: {
					id: 'Pihak yang harus membuka dokumen rahasia ke pihak luar dalam waktu terbatas: penjual dan pembeli perusahaan, pendiri yang menggalang dana, kuasa hukum dan penasihat keuangan, tim audit, dan pihak dalam sengketa. Di Rakda, pemilik ruang mengundang pihak-pihak itu sebagai tamu ke dalam grup masing-masing.',
					en: 'Anyone who must open confidential documents to outside parties for a limited time: sellers and buyers of a company, founders raising capital, counsel and financial advisors, audit teams, and parties in a dispute. In Rakda, the room owner invites those parties as guests into their own groups.'
				}
			},
			{
				id: 'beda-drive',
				ref: 'security',
				q: {
					id: 'Apa bedanya dengan tautan Google Drive atau Dropbox?',
					en: 'How is it different from a Google Drive or Dropbox link?'
				},
				a: {
					id: 'Tautan berbagi memberi satu izin yang sama untuk semua penerima, bisa diteruskan ke siapa saja, dan tidak mencatat siapa membaca halaman mana. Di Rakda, akses diberikan per grup per folder, dokumen dibuka lewat viewer yang membakar watermark identitas pembaca ke setiap halaman, berkas asli tidak pernah keluar dari server, dan setiap pembukaan masuk ke jejak aktivitas yang tidak bisa dihapus.',
					en: 'A sharing link gives every recipient the same permission, can be forwarded to anyone, and does not record who read which page. In Rakda, access is granted per group per folder, documents open in a viewer that burns the reader’s identity watermark into every page, the original file never leaves the server, and every opening lands in an activity trail no one can erase.'
				}
			},
			{
				id: 'jenis-deal',
				ref: 'templates',
				q: {
					id: 'Untuk transaksi apa Rakda cocok?',
					en: 'What kinds of transactions is Rakda for?'
				},
				a: {
					id: 'Lima template folder bawaan menggambarkan kasus yang kami rancang: due diligence M&A, penggalangan dana, transaksi properti, audit dan pelaporan, serta legal dan litigasi. Ruang untuk kebutuhan lain bisa disusun manual, folder demi folder.',
					en: 'The five built-in folder templates describe the cases it was designed for: M&A due diligence, fundraising, property transactions, audit and reporting, and legal and litigation. A room for anything else can be built by hand, folder by folder.'
				},
				facts: [{ label: { id: 'Template bawaan', en: 'Built-in templates' }, value: '5' }]
			}
		]
	},
	{
		id: 'memulai',
		title: { id: 'Memulai', en: 'Getting started' },
		items: [
			{
				id: 'cara-membuat',
				ref: 'templates',
				q: { id: 'Bagaimana cara membuat ruang data?', en: 'How do I create a data room?' },
				a: {
					id: 'Daftar, buat ruang, lalu susun folder: terapkan salah satu template atau buat folder sendiri. Unggah dokumen, buat grup untuk tiap pihak, atur izin per folder, dan ubah status ruang menjadi Aktif. Setelah itu undang tamu lewat email.',
					en: 'Sign up, create a room, then build the folders: apply one of the templates or make your own. Upload documents, create a group for each party, set permissions per folder, and switch the room to Active. Then invite guests by email.'
				}
			},
			{
				id: 'berapa-lama',
				ref: 'templates',
				q: { id: 'Berapa lama menyiapkan ruang?', en: 'How long does setup take?' },
				a: {
					id: 'Hitungan menit untuk kerangkanya: template Due diligence M&A menambahkan 22 folder sekaligus. Waktu selebihnya adalah waktu Anda mengunggah dokumen.',
					en: 'Minutes for the skeleton: the M&A due diligence template adds 22 folders at once. The rest is the time it takes you to upload documents.'
				},
				facts: [{ label: { id: 'Folder template M&A', en: 'M&A template folders' }, value: '22' }]
			},
			{
				id: 'perlu-pelatihan',
				q: { id: 'Apakah saya perlu pelatihan?', en: 'Do I need training?' },
				a: {
					id: 'Tidak. Rakda dirancang untuk disiapkan sendiri: tiga peran yang tetap (Pemilik, Admin, Tamu), izin per folder yang mengalir ke subfolder, dan template yang menyusun folder untuk Anda. Tidak ada jadwal demo yang harus ditunggu.',
					en: 'No. Rakda is designed to be set up by you: three fixed roles (Owner, Admin, Guest), per-folder permissions that flow down to subfolders, and templates that build the folders for you. There is no demo to wait for.'
				}
			},
			{
				id: 'format-berkas',
				q: { id: 'Format berkas apa yang didukung?', en: 'Which file formats are supported?' },
				a: {
					id: 'Semua yang bisa dijadikan PDF: PDF sendiri, dokumen Word, Excel, dan PowerPoint (termasuk format OpenDocument, RTF, TXT, dan CSV), serta gambar JPG, PNG, GIF, BMP, TIFF, dan SVG. Setiap berkas disajikan sebagai halaman gambar ber-watermark di viewer. Berkas yang tidak bisa dijadikan PDF ditolak saat diunggah; batas ukuran 500 MB per berkas.',
					en: 'Anything that can become a PDF: PDFs themselves, Word, Excel, and PowerPoint documents (OpenDocument, RTF, TXT, and CSV included), and JPG, PNG, GIF, BMP, TIFF, and SVG images. Every file is served as watermarked page images in the viewer. A file that cannot become a PDF is refused at upload; the size limit is 500 MB per file.'
				},
				facts: [{ label: { id: 'Batas ukuran berkas', en: 'File size limit' }, value: '500 MB' }]
			},
			{
				id: 'perlu-instal',
				q: {
					id: 'Apakah tamu perlu memasang aplikasi?',
					en: 'Do guests need to install anything?'
				},
				a: {
					id: 'Tidak. Rakda berjalan di browser modern. Tamu menerima undangan email, membuat akun dengan email dan kata sandi atau lewat Google dan GitHub, lalu membaca dokumen di viewer. Tanpa unduhan, tanpa plugin.',
					en: 'No. Rakda runs in a modern browser. Guests receive an email invitation, create an account with email and password or through Google or GitHub, and read documents in the viewer. No downloads, no plugins.'
				}
			},
			{
				id: 'ponsel',
				q: { id: 'Bisakah dokumen dibaca di ponsel?', en: 'Can documents be read on a phone?' },
				a: {
					id: 'Rakda dibuka di browser, termasuk di ponsel, tetapi viewer dokumen tidak disajikan di layar di bawah 768×480 piksel. Tamu membaca dokumen di laptop atau tablet dalam posisi lanskap.',
					en: 'Rakda opens in a browser, phones included, but the document viewer is not served on screens below 768×480 pixels. Guests read documents on a laptop or a tablet in landscape.'
				},
				facts: [{ label: { id: 'Batas viewer', en: 'Viewer minimum' }, value: '768×480' }]
			}
		]
	},
	{
		id: 'akses',
		title: { id: 'Akses dan izin', en: 'Access and permissions' },
		items: [
			{
				id: 'siapa-lihat-apa',
				ref: 'grid',
				q: {
					id: 'Bisakah saya mengatur siapa melihat dokumen mana?',
					en: 'Can I control who sees which documents?'
				},
				a: {
					id: 'Ya, per grup per folder. Untuk setiap grup Anda menyalakan Lihat, Watermark, Unduh, atau Unduh PDF tanpa watermark. Izin mengalir ke seluruh isi folder termasuk subfolder, kecuali subfolder yang diberi aturan sendiri. Folder yang tidak diizinkan tidak muncul sama sekali di daftar tamu.',
					en: 'Yes, per group per folder. For each group you switch on View, Watermark, Download, or Download clean PDF. Permissions flow down to everything in the folder, subfolders included, unless a subfolder has its own rule. A folder a group is not allowed to see does not appear in their list at all.'
				}
			},
			{
				id: 'peran',
				ref: 'grid',
				q: {
					id: 'Apa beda Pemilik, Admin, dan Tamu?',
					en: 'What is the difference between Owner, Admin, and Guest?'
				},
				a: {
					id: 'Pemilik membuat ruang dan memegang kendali penuh, termasuk mengarsipkannya. Admin membantu mengelola folder, dokumen, grup, dan izin. Tamu adalah pihak luar yang diundang ke satu grup dan hanya melihat apa yang diizinkan untuk grupnya. Ketiga peran ini tetap; tidak ada peran kustom.',
					en: 'The Owner creates the room and holds full control, including archiving it. Admins help manage folders, documents, groups, and permissions. A Guest is an outside party invited into one group who sees only what that group is allowed. The three roles are fixed; there are no custom roles.'
				},
				facts: [{ label: { id: 'Peran tetap', en: 'Fixed roles' }, value: '3' }]
			},
			{
				id: 'grup',
				ref: 'grid',
				q: { id: 'Apa itu grup?', en: 'What is a group?' },
				a: {
					id: 'Grup adalah satu pihak dalam transaksi, misalnya “Pembeli A” atau “Penasihat”. Izin folder diberikan ke grup, bukan ke orang per orang, dan setiap tamu berada tepat di satu grup. Q&A juga disekat per grup.',
					en: 'A group is one party in the transaction, for example “Buyer A” or “Advisors”. Folder permissions are granted to groups, not to individuals, and every guest belongs to exactly one group. Q&A is siloed per group too.'
				}
			},
			{
				id: 'batas-waktu',
				q: { id: 'Bisakah akses tamu dibatasi waktunya?', en: 'Can guest access be time-limited?' },
				a: {
					id: 'Ya. Saat mengundang, Anda bisa menetapkan tanggal berakhirnya akses. Setelah tanggal itu lewat, tamu tidak bisa masuk lagi.',
					en: 'Yes. When inviting, you can set the date on which access ends. After that date, the guest can no longer enter.'
				}
			},
			{
				id: 'cabut-akses',
				ref: 'security',
				q: {
					id: 'Apa yang terjadi saat saya mencabut akses?',
					en: 'What happens when I revoke access?'
				},
				a: {
					id: 'Sejak pembukaan berikutnya, tamu tidak bisa lagi masuk ke folder atau ruang itu. Halaman yang sudah dimuat di browser tamu sebelum pencabutan tidak bisa ditarik kembali; itulah gunanya watermark: setiap halaman yang pernah dibuka membawa identitas pembacanya.',
					en: 'From the next opening on, the guest can no longer enter that folder or room. Pages already loaded in the guest’s browser before the revocation cannot be recalled; that is what the watermark is for: every page ever opened carries its reader’s identity.'
				}
			},
			{
				id: 'mengundang',
				q: { id: 'Bagaimana cara mengundang tamu?', en: 'How do I invite guests?' },
				a: {
					id: 'Lewat email, dari dalam ruang, dengan memilih grup tujuan dan, jika perlu, batas masa akses. Undangan bisa dikirim ulang atau dicabut sebelum diterima.',
					en: 'By email, from inside the room, choosing the target group and, if needed, an access expiry. An invitation can be resent or revoked before it is accepted.'
				}
			}
		]
	},
	{
		id: 'keamanan',
		title: { id: 'Keamanan', en: 'Security' },
		items: [
			{
				id: 'seberapa-aman',
				ref: 'security',
				q: {
					id: 'Seberapa aman dibanding berbagi tautan biasa?',
					en: 'How secure is it compared with ordinary link sharing?'
				},
				a: {
					id: 'Empat hal yang tidak dimiliki tautan berbagi: izin per grup per folder; watermark identitas, waktu, dan alamat IP yang dibakar ke setiap halaman saat dibuka; berkas asli yang tidak pernah keluar dari server; dan jejak aktivitas hanya-tambah yang tidak bisa disunting siapa pun.',
					en: 'Four things a sharing link does not have: permissions per group per folder; a watermark of identity, time, and IP address burned into every page as it is opened; an original file that never leaves the server; and an append-only activity trail no one can edit.'
				}
			},
			{
				id: 'watermark',
				ref: 'security',
				q: { id: 'Bagaimana watermark bekerja?', en: 'How does the watermark work?' },
				a: {
					id: 'Setiap kali halaman dibuka, halaman itu dirender di server dan identitas pembaca, waktu per menit, serta alamat IP-nya dibakar ke gambar halaman. Watermark tidak bisa diangkat oleh alat PDF karena bukan lapisan, melainkan bagian dari piksel. Unduhan ber-watermark juga berupa PDF raster tanpa lapisan teks, maksimum 750 halaman.',
					en: 'Every time a page is opened, it is rendered on the server and the reader’s identity, the minute, and their IP address are burned into the page image. No PDF tool can lift the watermark because it is not a layer but part of the pixels. Watermarked downloads are likewise raster PDFs without a text layer, capped at 750 pages.'
				},
				facts: [
					{
						label: { id: 'Batas unduhan ber-watermark', en: 'Watermarked download cap' },
						value: '750'
					}
				]
			},
			{
				id: 'enkripsi',
				ref: 'security',
				q: { id: 'Bagaimana data dilindungi saat disimpan?', en: 'How is data protected at rest?' },
				a: {
					id: 'Dokumen disimpan di penyimpanan objek yang dienkripsi saat diam dengan AES-256 (SSE-S3); server memverifikasi enkripsi ini setiap kali dinyalakan. Kunci enkripsi dipegang penyedia penyimpanan. Lalu lintas ke dan dari Rakda berjalan lewat HTTPS.',
					en: 'Documents live in object storage encrypted at rest with AES-256 (SSE-S3); the server verifies that encryption every time it starts. The encryption key is held by the storage provider. Traffic to and from Rakda runs over HTTPS.'
				},
				facts: [{ label: { id: 'Enkripsi saat diam', en: 'Encryption at rest' }, value: 'AES-256' }]
			},
			{
				id: 'lokasi-data',
				ref: 'security',
				q: { id: 'Di mana dokumen saya disimpan?', en: 'Where are my documents stored?' },
				a: {
					id: 'Di penyimpanan objek di pusat data Jakarta, Indonesia.',
					en: 'In object storage in a Jakarta, Indonesia data center.'
				},
				facts: [{ label: { id: 'Lokasi dokumen', en: 'Document location' }, value: 'Jakarta' }]
			},
			{
				id: 'sertifikasi',
				q: {
					id: 'Apakah Rakda tersertifikasi ISO 27001 atau SOC 2?',
					en: 'Is Rakda certified to ISO 27001 or SOC 2?'
				},
				a: {
					id: 'Rakda sendiri tidak memegang sertifikasi. Infrastruktur tempat dokumen Anda disimpan memegangnya: penyimpanan objek Rakda berjalan di Biznet Gio (NEO Object Storage, Jakarta), yang menyatakan tersertifikasi ISO 27001, ISO 27017, ISO 27018, ISO 27701, SOC 2 Type II, PCI DSS, dan ISO 9001. Sertifikasi itu milik penyedia infrastruktur, bukan milik Rakda.',
					en: 'Rakda itself does not hold a certification. The infrastructure your documents live on does: Rakda’s object storage runs on Biznet Gio (NEO Object Storage, Jakarta), which states it is certified to ISO 27001, ISO 27017, ISO 27018, ISO 27701, SOC 2 Type II, PCI DSS, and ISO 9001. Those certifications belong to the infrastructure provider, not to Rakda.'
				},
				facts: [
					{ label: { id: 'Penyedia penyimpanan', en: 'Storage provider' }, value: 'Biznet Gio NEO' }
				]
			},
			{
				id: 'screenshot',
				ref: 'security',
				q: { id: 'Bisakah tangkapan layar dicegah?', en: 'Can screenshots be prevented?' },
				a: {
					id: 'Tidak, dan tidak ada layanan yang bisa mengklaimnya dengan jujur. Yang Rakda lakukan: Mode privasi menyamarkan halaman saat jendela viewer kehilangan fokus, klik kanan dan cetak dimatikan di viewer, dan watermark memastikan tangkapan layar apa pun membawa identitas, waktu, dan alamat IP pengambilnya.',
					en: 'No, and no service can honestly claim otherwise. What Rakda does: Privacy mode veils the page when the viewer window loses focus, right-click and print are switched off in the viewer, and the watermark makes sure any screenshot carries the identity, time, and IP address of whoever took it.'
				}
			},
			{
				id: 'berkas-asli',
				ref: 'security',
				q: {
					id: 'Apakah berkas asli saya bisa diunduh orang lain?',
					en: 'Can anyone download my original file?'
				},
				a: {
					id: 'Tidak. Byte yang Anda unggah tidak pernah dikirim ke siapa pun, termasuk pemilik dan admin. Yang diunduh adalah rendisi: PDF ber-watermark, atau rendisi bersih jika grup itu diberi izin Unduh PDF tanpa watermark.',
					en: 'No. The bytes you upload are never sent to anyone, owner and admins included. What gets downloaded is a rendition: a watermarked PDF, or a clean rendition if that group has been given Download clean PDF.'
				}
			}
		]
	},
	{
		id: 'pelacakan',
		title: { id: 'Pelacakan dan Q&A', en: 'Tracking and Q&A' },
		items: [
			{
				id: 'siapa-membuka',
				ref: 'engagement',
				q: { id: 'Bisakah saya melihat siapa membuka apa?', en: 'Can I see who opened what?' },
				a: {
					id: 'Ya. Jejak aktivitas mencatat setiap aksi di ruang: folder dibuat, dokumen diunggah, undangan dikirim, izin diubah, dokumen dibuka dan diunduh. Per pembaca, Anda melihat halaman mana yang dibuka dan berapa lama. Semuanya bisa diekspor ke CSV.',
					en: 'Yes. The activity trail records every action in the room: folders created, documents uploaded, invitations sent, permissions changed, documents opened and downloaded. Per reader, you see which pages were opened and for how long. All of it exports to CSV.'
				}
			},
			{
				id: 'tamu-lihat-aktivitas',
				ref: 'engagement',
				q: { id: 'Apakah tamu bisa melihat aktivitas?', en: 'Can guests see activity?' },
				a: {
					id: 'Tidak. Aktivitas hanya terlihat oleh Pemilik dan Admin. Tamu tidak melihat aktivitas siapa pun, termasuk miliknya sendiri.',
					en: 'No. Activity is visible to the Owner and Admins only. Guests see no one’s activity, including their own.'
				}
			},
			{
				id: 'hapus-jejak',
				ref: 'engagement',
				q: {
					id: 'Bisakah jejak aktivitas diubah atau dihapus?',
					en: 'Can the activity trail be edited or deleted?'
				},
				a: {
					id: 'Tidak. Jejak aktivitas hanya-tambah: entri tidak bisa disunting atau dihapus, dan nama pelaku dibekukan saat dicatat. Satu-satunya cara menghilangkannya adalah menghapus ruang beserta seluruh isinya, dan ruang yang diarsipkan tidak bisa dihapus sebelum diaktifkan kembali.',
					en: 'No. The trail is append-only: entries cannot be edited or deleted, and actor names are frozen when written. The only way to remove it is to delete the room with everything in it, and an archived room cannot be deleted until it is reactivated.'
				}
			},
			{
				id: 'qa',
				ref: 'qa',
				q: { id: 'Bagaimana Q&A bekerja?', en: 'How does Q&A work?' },
				a: {
					id: 'Tamu mengajukan pertanyaan dari dalam ruang, dan pertanyaan itu hanya terlihat oleh grupnya dan pengelola ruang. Pemilik dan Admin menjawab dari satu antrean, bisa menutup pertanyaan, dan bisa menerbitkan jawaban sebagai FAQ yang tampil untuk semua grup tanpa identitas penanya. Q&A bisa dimatikan atau dibatasi kuotanya per grup, dan seluruh daftar bisa diekspor ke CSV.',
					en: 'Guests ask questions from inside the room, and a question is visible only to their group and the room managers. Owner and Admins answer from one queue, can close a question, and can publish an answer as an FAQ shown to every group without the asker’s identity. Q&A can be switched off or capped per group, and the whole list exports to CSV.'
				}
			}
		]
	},
	{
		id: 'paket',
		title: { id: 'Paket dan uji coba', en: 'Plans and trial' },
		items: [
			{
				id: 'uji-coba',
				q: { id: 'Apakah ada uji coba gratis?', en: 'Is there a free trial?' },
				a: {
					id: 'Ya, 30 hari. Kami memilih 30 hari, bukan 14, karena sebuah deal jarang selesai dalam dua minggu.',
					en: 'Yes, 30 days. We chose 30 rather than 14 because a deal rarely closes in two weeks.'
				},
				facts: [{ label: { id: 'Uji coba', en: 'Trial' }, value: '30 hari' }]
			},
			{
				id: 'paket-gratis',
				q: { id: 'Apakah ada paket gratis permanen?', en: 'Is there a permanent free plan?' },
				a: {
					id: 'Tidak. Setelah uji coba, semua paket berbayar.',
					en: 'No. After the trial, every plan is paid.'
				}
			},
			{
				id: 'bayar-per-tamu',
				q: {
					id: 'Apakah saya membayar per tamu atau per pengguna?',
					en: 'Do I pay per guest or per user?'
				},
				a: {
					id: 'Tidak. Tamu adalah pihak lawan Anda dalam transaksi; kami tidak menagih per tamu, per kursi, atau per GB. Paket dibedakan oleh kapasitas, bukan oleh siapa yang Anda undang.',
					en: 'No. Guests are the other side of your transaction; we do not charge per guest, per seat, or per GB. Plans differ by capacity, not by whom you invite.'
				}
			},
			{
				id: 'harga',
				q: { id: 'Berapa biayanya?', en: 'How much does it cost?' },
				a: {
					id: 'Harga akan kami umumkan secara terbuka di situs ini; tidak perlu meminta penawaran atau menjadwalkan demo. Yang sudah pasti: harga yang jelas dan diumumkan terbuka, tanpa biaya per tamu.',
					en: 'Prices will be published openly on this site; no quote to request, no demo to schedule. What is already certain: a flat price, published openly, with no per-guest charge.'
				}
			},
			{
				id: 'keamanan-per-paket',
				ref: 'security',
				q: {
					id: 'Apakah fitur keamanan bergantung pada paket?',
					en: 'Do security features depend on the plan?'
				},
				a: {
					id: 'Tidak. Mode privasi, pengerasan viewer, dan watermark tampilan ada di semua paket. Sebuah paket tidak boleh mengurangi keamanan siapa pun.',
					en: 'No. Privacy mode, viewer hardening, and view watermarking are on every plan. A plan must never reduce anyone’s security.'
				}
			}
		]
	},
	{
		id: 'setelah',
		title: { id: 'Setelah deal selesai', en: 'After the deal' },
		items: [
			{
				id: 'arsip',
				ref: 'lifecycle',
				q: {
					id: 'Apa yang terjadi dengan ruang setelah transaksi selesai?',
					en: 'What happens to the room when the deal is done?'
				},
				a: {
					id: 'Anda mengarsipkannya. Ruang Arsip menjadi hanya-baca untuk semua peran: tamu tetap dapat membaca, unduhan dimatikan, dan setiap halaman diberi watermark. Arsip bisa diaktifkan kembali kapan saja.',
					en: 'You archive it. An archived room is read-only for every role: guests can still read, downloads are off, and every page is watermarked. An archive can be reactivated at any time.'
				}
			},
			{
				id: 'unduh-semua',
				ref: 'lifecycle',
				q: {
					id: 'Bisakah saya mengunduh seluruh isi ruang?',
					en: 'Can I download the whole room?'
				},
				a: {
					id: 'Ya, sebagai paket arsip: berkas ZIP seluruh ruang atau folder tertentu, berikut CSV aktivitas untuk paket seluruh ruang. Tautan unduhnya berlaku 30 hari dan bisa dilanjutkan jika terputus.',
					en: 'Yes, as an archive package: a ZIP of the whole room or of chosen folders, with the activity CSVs for a whole-room package. The download link is valid for 30 days and resumes if interrupted.'
				},
				facts: [
					{ label: { id: 'Tautan paket arsip', en: 'Archive package link' }, value: '30 hari' }
				]
			},
			{
				id: 'retensi',
				ref: 'lifecycle',
				q: { id: 'Berapa lama data disimpan?', en: 'How long is data kept?' },
				a: {
					id: 'Selama ruang ada. Dokumen yang dihapus masuk ke Sampah selama 30 hari sebelum dihapus permanen. Ruang tidak dihapus otomatis; menghapus ruang menghapus juga jejak aktivitasnya, karena itu ruang berstatus Arsip harus diaktifkan kembali dulu sebelum bisa dihapus.',
					en: 'For as long as the room exists. A deleted document sits in Trash for 30 days before permanent deletion. Rooms are never deleted automatically; deleting a room deletes its activity trail too, which is why an archived room must be reactivated before it can be deleted.'
				},
				facts: [{ label: { id: 'Sampah', en: 'Trash' }, value: '30 hari' }]
			},
			{
				id: 'versi',
				q: {
					id: 'Bisakah dokumen diperbarui tanpa kehilangan versi lama?',
					en: 'Can I update a document without losing the old version?'
				},
				a: {
					id: 'Ya. Unggah versi baru untuk dokumen yang sama; versi lama tetap tersimpan dan bisa dikembalikan sebagai versi aktif. Pembukaan dan unduhan dicatat dengan nomor versinya.',
					en: 'Yes. Upload a new version of the same document; the old version stays and can be restored as the active one. Openings and downloads are recorded with their version number.'
				}
			}
		]
	}
];

export const FAQ_COUNT = FAQ_GROUPS.reduce((n, g) => n + g.items.length, 0);
