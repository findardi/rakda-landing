import type { Locale } from '$lib/i18n';
import { contactEmail } from '$lib/app-url';

export type L = Record<Locale, string>;

// The operator's identity. The contact page, the footer, and the Organization
// JSON-LD all read from here. Fill in the registered name and address before
// launch; a bracketed placeholder is never shipped as a fact.
export const ORG = {
	brand: 'Rakda',
	legalName: 'Rakda ID', // TODO: the name as registered
	address: 'Yogyakarta, Indonesia', // TODO: the registered address
	email: contactEmail ?? 'halo@rakda.id'
};

export type LegalSlug = 'privacy' | 'terms' | 'contact';
export type LegalSection = { h: L; p: L[] };
export type LegalDoc = {
	slug: LegalSlug;
	title: L;
	description: L;
	updated: string;
	sections: LegalSection[];
};

// `{org}` and `{email}` are filled in from ORG at render time.
export const LEGAL: Record<LegalSlug, LegalDoc> = {
	privacy: {
		slug: 'privacy',
		title: { id: 'Kebijakan Privasi', en: 'Privacy Policy' },
		description: {
			id: 'Data apa yang dikumpulkan situs rakda.id dan aplikasi Rakda, untuk apa, di mana disimpan, dan hak Anda atasnya.',
			en: 'What data the rakda.id website and the Rakda app collect, why, where it is stored, and your rights over it.'
		},
		updated: '2026-09-05',
		sections: [
			{
				h: { id: 'Siapa kami', en: 'Who we are' },
				p: [
					{
						id: 'Rakda dioperasikan oleh {org}. Kebijakan ini berlaku untuk situs rakda.id dan aplikasi Rakda. Pertanyaan tentang kebijakan ini dikirim ke {email}.',
						en: 'Rakda is operated by {org}. This policy covers the rakda.id website and the Rakda app. Questions about it go to {email}.'
					}
				]
			},
			{
				h: { id: 'Situs ini', en: 'This website' },
				p: [
					{
						id: 'Halaman rakda.id tidak memakai cookie pelacak, analitik pihak ketiga, atau formulir. Semua nama, dokumen, dan angka di halaman ini fiktif; kisi izin dan pratinjau dokumen adalah simulasi yang berjalan di browser Anda dan tidak mengirim apa pun.',
						en: 'The rakda.id pages use no tracking cookies, no third-party analytics, and no forms. Every name, document, and number on them is fictional; the permission grid and the document preview are simulations that run in your browser and send nothing.'
					},
					{
						id: 'Jaringan pengiriman yang menyajikan situs (Cloudflare) menyimpan log teknis seperti alamat IP, waktu, dan halaman yang diminta, untuk keamanan dan ketersediaan.',
						en: 'The delivery network that serves the site (Cloudflare) keeps technical logs such as IP address, time, and the page requested, for security and availability.'
					}
				]
			},
			{
				h: { id: 'Data akun', en: 'Account data' },
				p: [
					{
						id: 'Saat mendaftar di aplikasi, kami menyimpan alamat email, nama, dan kata sandi dalam bentuk hash. Jika Anda masuk dengan akun Google atau GitHub, kami menerima email dan nama dari layanan itu, dan tidak pernah kata sandi Anda di sana.',
						en: 'When you sign up in the app we store your email address, name, and a hash of your password. If you sign in with a Google or GitHub account we receive your email and name from that service, and never your password there.'
					}
				]
			},
			{
				h: { id: 'Dokumen dan aktivitas', en: 'Documents and activity' },
				p: [
					{
						id: 'Dokumen yang diunggah pemilik ruang disimpan untuk disajikan kepada grup yang diberi izin. Setiap pembukaan halaman dicatat: siapa, kapan, halaman mana, berapa lama, dan dari alamat IP mana. Identitas pembaca, waktu, dan alamat IP dibakar ke watermark halaman yang dibuka.',
						en: 'Documents uploaded by a room owner are stored to be served to the groups given access. Every page opening is recorded: who, when, which page, for how long, and from which IP address. The reader’s identity, the time, and the IP address are burned into the watermark of every page opened.'
					},
					{
						id: 'Catatan aktivitas hanya-tambah dan hanya terlihat oleh pemilik dan admin ruang. Tamu tidak melihat aktivitas siapa pun, termasuk miliknya sendiri.',
						en: 'The activity trail is append-only and visible only to the room’s owner and admins. Guests see no one’s activity, including their own.'
					}
				]
			},
			{
				h: { id: 'Penyimpanan dan keamanan', en: 'Storage and security' },
				p: [
					{
						id: 'Dokumen dan basis data berada di Indonesia (Jakarta). Penyimpanan objek dienkripsi saat diam dengan AES-256; lalu lintas ke dan dari Rakda berjalan lewat HTTPS. Berkas yang diunggah tidak pernah dikirim kembali: pembaca menerima rendisi yang dirender ulang.',
						en: 'Documents and the database live in Indonesia (Jakarta). Object storage is encrypted at rest with AES-256; traffic to and from Rakda runs over HTTPS. An uploaded file is never sent back out: readers receive a re-rendered rendition.'
					}
				]
			},
			{
				h: { id: 'Berbagi data', en: 'Sharing' },
				p: [
					{
						id: 'Kami tidak menjual data pribadi. Data diproses oleh penyedia infrastruktur (jaringan pengiriman, server, penyimpanan objek, pengiriman email) sebatas yang diperlukan untuk menjalankan layanan. Data diungkap ke pihak berwenang hanya jika diwajibkan hukum yang berlaku.',
						en: 'We do not sell personal data. Data is processed by infrastructure providers (delivery network, servers, object storage, email delivery) only as far as needed to run the service. Data is disclosed to authorities only where applicable law requires it.'
					}
				]
			},
			{
				h: { id: 'Retensi', en: 'Retention' },
				p: [
					{
						id: 'Dokumen yang dihapus masuk Tempat Sampah selama 30 hari, lalu dihapus permanen. Tautan paket arsip berlaku 30 hari. Akun dan data pribadinya dihapus atas permintaan ke {email}; catatan aktivitas di ruang milik pihak lain tetap tersimpan selama ruang itu ada.',
						en: 'A deleted document sits in Trash for 30 days, then is removed permanently. An archive package link is valid for 30 days. An account and its personal data are deleted on request to {email}; activity records in rooms owned by others remain for as long as those rooms exist.'
					}
				]
			},
			{
				h: { id: 'Hak Anda', en: 'Your rights' },
				p: [
					{
						id: 'Sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak mengakses, memperbaiki, dan menghapus data pribadi Anda, serta menarik persetujuan. Kirim permintaan ke {email} dari alamat email akun Anda; kami menanggapinya sesuai ketentuan yang berlaku.',
						en: 'Under Indonesian Law No. 27 of 2022 on Personal Data Protection you may access, correct, and delete your personal data, and withdraw consent. Send a request to {email} from your account’s email address; we respond within the statutory period.'
					}
				]
			},
			{
				h: { id: 'Perubahan', en: 'Changes' },
				p: [
					{
						id: 'Perubahan pada kebijakan ini diumumkan di halaman ini beserta tanggal pembaruannya.',
						en: 'Changes to this policy are posted on this page with the date of the update.'
					}
				]
			}
		]
	},
	terms: {
		slug: 'terms',
		title: { id: 'Ketentuan Layanan', en: 'Terms of Service' },
		description: {
			id: 'Syarat penggunaan aplikasi Rakda: akun, uji coba, konten Anda, penggunaan yang dilarang, tanggung jawab, dan hukum yang berlaku.',
			en: 'The terms for using the Rakda app: accounts, the trial, your content, prohibited use, liability, and governing law.'
		},
		updated: '2026-09-05',
		sections: [
			{
				h: { id: 'Layanan', en: 'The service' },
				p: [
					{
						id: 'Rakda adalah ruang data virtual yang dioperasikan oleh {org}. Mekanismenya dijelaskan di halaman utama dan FAQ. Dengan membuat akun, Anda menyetujui ketentuan ini.',
						en: 'Rakda is a virtual data room operated by {org}. Its mechanics are described on the main page and in the FAQ. By creating an account you agree to these terms.'
					}
				]
			},
			{
				h: { id: 'Akun', en: 'Accounts' },
				p: [
					{
						id: 'Anda bertanggung jawab atas kerahasiaan kredensial dan setiap tindakan yang dilakukan dari akun Anda. Satu orang, satu akun. Tamu masuk ke ruang hanya atas undangan pemilik atau admin ruang.',
						en: 'You are responsible for keeping your credentials confidential and for every action taken from your account. One person, one account. Guests enter a room only on an invitation from its owner or an admin.'
					}
				]
			},
			{
				h: { id: 'Uji coba dan biaya', en: 'Trial and fees' },
				p: [
					{
						id: 'Uji coba berlangsung 30 hari tanpa biaya. Belum ada penagihan. Paket berbayar dan harganya diumumkan sebelum berlaku, dan tidak ada tagihan tanpa persetujuan Anda yang tegas.',
						en: 'The trial runs for 30 days at no cost. There is no billing yet. Paid plans and their prices are announced before they apply, and nothing is charged without your explicit agreement.'
					}
				]
			},
			{
				h: { id: 'Konten Anda', en: 'Your content' },
				p: [
					{
						id: 'Dokumen yang Anda unggah tetap milik Anda. Anda memberi kami izin terbatas untuk menyimpan, merender, memberi watermark, dan menyajikannya kepada grup yang Anda beri izin, semata-mata untuk menjalankan layanan. Anda menjamin berhak membagikan dokumen tersebut kepada pihak yang Anda undang.',
						en: 'Documents you upload remain yours. You grant us a limited licence to store, render, watermark, and serve them to the groups you give access to, solely to run the service. You warrant that you have the right to share those documents with the parties you invite.'
					}
				]
			},
			{
				h: { id: 'Penggunaan yang dilarang', en: 'Prohibited use' },
				p: [
					{
						id: 'Dilarang mengunggah konten yang melanggar hukum atau hak pihak lain, menyebarkan perangkat lunak berbahaya, mencoba mengakses ruang atau akun tanpa izin, mengganggu layanan, atau menggunakan data tamu di luar keperluan transaksi yang bersangkutan.',
						en: 'You may not upload content that breaks the law or infringes others’ rights, distribute malicious software, attempt to access rooms or accounts without authorisation, disrupt the service, or use guest data beyond the needs of the transaction in question.'
					}
				]
			},
			{
				h: { id: 'Tanggung jawab pemilik ruang', en: 'Room owner responsibility' },
				p: [
					{
						id: 'Pemilik ruang mengatur izin dan undangan; Rakda menjalankan izin persis sebagaimana diatur. Watermark dan pengerasan viewer mengurangi risiko kebocoran, bukan meniadakannya. Batasnya dijelaskan di bagian “Yang tidak kami klaim” pada halaman utama.',
						en: 'The room owner sets permissions and invitations; Rakda enforces permissions exactly as set. Watermarks and viewer hardening reduce the risk of leaks; they do not remove it. The limits are described under “What we do not claim” on the main page.'
					}
				]
			},
			{
				h: { id: 'Ketersediaan', en: 'Availability' },
				p: [
					{
						id: 'Selama uji coba, layanan disediakan apa adanya tanpa jaminan tingkat layanan. Kami berusaha memberi tahu sebelum pemeliharaan terjadwal.',
						en: 'During the trial the service is provided as is, without a service-level guarantee. We try to give notice before scheduled maintenance.'
					}
				]
			},
			{
				h: { id: 'Pengakhiran', en: 'Termination' },
				p: [
					{
						id: 'Anda dapat menghapus akun kapan saja. Kami dapat menangguhkan atau menutup akun yang melanggar ketentuan ini. Setelah pengakhiran, dokumen dihapus sesuai kebijakan retensi di Kebijakan Privasi.',
						en: 'You may delete your account at any time. We may suspend or close an account that breaches these terms. After termination, documents are removed under the retention rules in the Privacy Policy.'
					}
				]
			},
			{
				h: { id: 'Batasan tanggung jawab', en: 'Limitation of liability' },
				p: [
					{
						id: 'Sejauh diizinkan hukum, {org} tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan, atau kehilangan data yang timbul dari penggunaan layanan. Tanggung jawab total kami terbatas pada jumlah yang Anda bayarkan dalam 12 bulan terakhir, yang selama uji coba adalah nol.',
						en: 'To the extent the law allows, {org} is not liable for indirect loss, lost profit, or loss of data arising from use of the service. Our total liability is capped at the amount you paid in the previous 12 months, which during the trial is nil.'
					}
				]
			},
			{
				h: { id: 'Hukum yang berlaku', en: 'Governing law' },
				p: [
					{
						id: 'Ketentuan ini tunduk pada hukum Republik Indonesia. Sengketa diselesaikan lebih dulu secara musyawarah, dan bila tidak tercapai, melalui pengadilan yang berwenang di Jakarta.',
						en: 'These terms are governed by the law of the Republic of Indonesia. Disputes are settled first by negotiation and, failing that, by the competent court in Jakarta.'
					}
				]
			},
			{
				h: { id: 'Perubahan', en: 'Changes' },
				p: [
					{
						id: 'Perubahan pada ketentuan ini diumumkan di halaman ini beserta tanggal pembaruannya.',
						en: 'Changes to these terms are posted on this page with the date of the update.'
					}
				]
			}
		]
	},
	contact: {
		slug: 'contact',
		title: { id: 'Kontak', en: 'Contact' },
		description: {
			id: 'Identitas badan usaha di balik Rakda dan cara menghubungi kami untuk pertanyaan, laporan keamanan, dan permintaan data pribadi.',
			en: 'The legal entity behind Rakda and how to reach us for questions, security reports, and personal-data requests.'
		},
		updated: '2026-09-05',
		sections: [
			{
				h: { id: 'Pertanyaan dan uji coba', en: 'Questions and the trial' },
				p: [
					{
						id: 'Kirim email ke {email}. Kami menjawab dalam bahasa Indonesia atau Inggris pada hari kerja.',
						en: 'Email {email}. We reply in Indonesian or English on working days.'
					}
				]
			},
			{
				h: { id: 'Laporan keamanan', en: 'Security reports' },
				p: [
					{
						id: 'Menemukan celah keamanan? Kirim ke {email} dengan subjek “Keamanan”. Jangan sertakan dokumen rahasia atau data pribadi pihak lain dalam laporan.',
						en: 'Found a security issue? Send it to {email} with the subject “Security”. Do not include confidential documents or other people’s personal data in the report.'
					}
				]
			},
			{
				h: { id: 'Permintaan data pribadi', en: 'Personal-data requests' },
				p: [
					{
						id: 'Permintaan akses, perbaikan, atau penghapusan data pribadi dikirim ke {email} dari alamat email akun Anda. Rinciannya ada di Kebijakan Privasi.',
						en: 'Requests to access, correct, or delete personal data go to {email} from your account’s email address. Details are in the Privacy Policy.'
					}
				]
			}
		]
	}
};
