import { JokiPackage, Testimonial, FaqItem, NavLink } from '@/types';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📌 Navigation Links
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '/#hero' },
  { label: 'Harga', href: '/#pricing' },
  { label: 'Cara Order', href: '/#how-it-works' },
  { label: 'Testimoni', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 💰 Pricing / Joki Packages
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const JOKI_PACKAGES: JokiPackage[] = [
  // ── Solo Rank ──
  {
    id: 'solo-1',
    name: 'Warrior → Elite',
    fromRank: 'Warrior',
    toRank: 'Elite',
    price: 25000,
    priceFormatted: 'Rp 25.000',
    estimasi: '1–2 Hari',
    features: ['Akun Aman', 'Offline Mode', 'Garansi Rank'],
    isPopular: false,
    category: 'solo',
    rankColor: '#22C55E',
  },
  {
    id: 'solo-2',
    name: 'Elite → Master',
    fromRank: 'Elite',
    toRank: 'Master',
    price: 45000,
    priceFormatted: 'Rp 45.000',
    estimasi: '1–3 Hari',
    features: ['Akun Aman', 'Offline Mode', 'Garansi Rank'],
    isPopular: false,
    category: 'solo',
    rankColor: '#3B82F6',
  },
  {
    id: 'solo-3',
    name: 'Master → Grandmaster',
    fromRank: 'Master',
    toRank: 'Grandmaster',
    price: 65000,
    priceFormatted: 'Rp 65.000',
    estimasi: '2–4 Hari',
    features: ['Akun Aman', 'Offline Mode', 'Garansi Rank', 'Screenshot Update'],
    isPopular: false,
    category: 'solo',
    rankColor: '#A855F7',
  },
  {
    id: 'solo-4',
    name: 'Grandmaster → Epic',
    fromRank: 'Grandmaster',
    toRank: 'Epic',
    price: 85000,
    priceFormatted: 'Rp 85.000',
    estimasi: '2–4 Hari',
    features: ['Akun Aman', 'Offline Mode', 'Garansi Rank', 'Screenshot Update'],
    isPopular: true,
    category: 'solo',
    rankColor: '#7C3AED',
  },
  {
    id: 'solo-5',
    name: 'Epic → Legend',
    fromRank: 'Epic',
    toRank: 'Legend',
    price: 150000,
    priceFormatted: 'Rp 150.000',
    estimasi: '3–5 Hari',
    features: ['Akun Aman', 'Offline Mode', 'Garansi Rank', 'Screenshot Update', 'Priority Booster'],
    isPopular: true,
    category: 'solo',
    rankColor: '#F97316',
  },
  {
    id: 'solo-6',
    name: 'Legend → Mythic',
    fromRank: 'Legend',
    toRank: 'Mythic',
    price: 300000,
    priceFormatted: 'Rp 300.000',
    estimasi: '5–7 Hari',
    features: ['Akun Aman', 'Offline Mode', 'Garansi Rank', 'Screenshot Update', 'Priority Booster', 'Live Stream'],
    isPopular: false,
    category: 'solo',
    rankColor: '#EF4444',
  },

  // ── Duo Rank ──
  {
    id: 'duo-1',
    name: 'Warrior → Elite (Duo)',
    fromRank: 'Warrior',
    toRank: 'Elite',
    price: 40000,
    priceFormatted: 'Rp 40.000',
    estimasi: '1–2 Hari',
    features: ['Main Bareng', 'Akun Aman', 'Garansi Rank'],
    isPopular: false,
    category: 'duo',
    rankColor: '#22C55E',
  },
  {
    id: 'duo-2',
    name: 'Elite → Master (Duo)',
    fromRank: 'Elite',
    toRank: 'Master',
    price: 65000,
    priceFormatted: 'Rp 65.000',
    estimasi: '2–3 Hari',
    features: ['Main Bareng', 'Akun Aman', 'Garansi Rank'],
    isPopular: false,
    category: 'duo',
    rankColor: '#3B82F6',
  },
  {
    id: 'duo-3',
    name: 'Master → Grandmaster (Duo)',
    fromRank: 'Master',
    toRank: 'Grandmaster',
    price: 95000,
    priceFormatted: 'Rp 95.000',
    estimasi: '2–4 Hari',
    features: ['Main Bareng', 'Akun Aman', 'Garansi Rank', 'Screenshot Update'],
    isPopular: false,
    category: 'duo',
    rankColor: '#A855F7',
  },
  {
    id: 'duo-4',
    name: 'Grandmaster → Epic (Duo)',
    fromRank: 'Grandmaster',
    toRank: 'Epic',
    price: 125000,
    priceFormatted: 'Rp 125.000',
    estimasi: '3–5 Hari',
    features: ['Main Bareng', 'Akun Aman', 'Garansi Rank', 'Screenshot Update'],
    isPopular: true,
    category: 'duo',
    rankColor: '#7C3AED',
  },
  {
    id: 'duo-5',
    name: 'Epic → Legend (Duo)',
    fromRank: 'Epic',
    toRank: 'Legend',
    price: 225000,
    priceFormatted: 'Rp 225.000',
    estimasi: '4–7 Hari',
    features: ['Main Bareng', 'Akun Aman', 'Garansi Rank', 'Screenshot Update', 'Priority Booster'],
    isPopular: false,
    category: 'duo',
    rankColor: '#F97316',
  },
  {
    id: 'duo-6',
    name: 'Legend → Mythic (Duo)',
    fromRank: 'Legend',
    toRank: 'Mythic',
    price: 450000,
    priceFormatted: 'Rp 450.000',
    estimasi: '7–10 Hari',
    features: ['Main Bareng', 'Akun Aman', 'Garansi Rank', 'Screenshot Update', 'Priority Booster', 'Live Stream'],
    isPopular: false,
    category: 'duo',
    rankColor: '#EF4444',
  },

  // ── Win Boost ──
  {
    id: 'win-1',
    name: '5 Win Boost',
    fromRank: 'Epic',
    toRank: 'Epic',
    price: 35000,
    priceFormatted: 'Rp 35.000',
    estimasi: '1–2 Hari',
    features: ['5x Menang', 'Akun Aman', 'Garansi Win'],
    isPopular: false,
    category: 'winboost',
    rankColor: '#3B82F6',
  },
  {
    id: 'win-2',
    name: '10 Win Boost',
    fromRank: 'Epic',
    toRank: 'Legend',
    price: 65000,
    priceFormatted: 'Rp 65.000',
    estimasi: '2–3 Hari',
    features: ['10x Menang', 'Akun Aman', 'Garansi Win', 'Screenshot Update'],
    isPopular: true,
    category: 'winboost',
    rankColor: '#F97316',
  },
  {
    id: 'win-3',
    name: '20 Win Boost',
    fromRank: 'Legend',
    toRank: 'Mythic',
    price: 120000,
    priceFormatted: 'Rp 120.000',
    estimasi: '3–5 Hari',
    features: ['20x Menang', 'Akun Aman', 'Garansi Win', 'Screenshot Update', 'Priority Booster'],
    isPopular: false,
    category: 'winboost',
    rankColor: '#EF4444',
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 💬 Testimonials
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Rizky Pratama',
    avatarUrl: '',
    fromRank: 'Grandmaster',
    toRank: 'Epic',
    rating: 5,
    comment: 'Gila cepet banget! Semalem order, pagi udah selesai. Booster ramah dan akun aman. Recommended banget!',
    date: '2026-03-15',
  },
  {
    id: 'testi-2',
    name: 'Annisa Rahmawati',
    avatarUrl: '',
    fromRank: 'Epic',
    toRank: 'Legend',
    rating: 5,
    comment: 'Udah 3 kali order di sini, selalu puas. Win rate juga dijaga, ga asal push. Top service!',
    date: '2026-03-22',
  },
  {
    id: 'testi-3',
    name: 'Dimas Arya',
    avatarUrl: '',
    fromRank: 'Master',
    toRank: 'Epic',
    rating: 4,
    comment: 'Proses cukup cepat, 2 hari udah kelar. Cuma agak deg-degan aja pertama kali, tapi ternyata aman!',
    date: '2026-02-28',
  },
  {
    id: 'testi-4',
    name: 'Sarah Kirana',
    avatarUrl: '',
    fromRank: 'Legend',
    toRank: 'Mythic',
    rating: 5,
    comment: 'Akhirnya tembus Mythic! Udah stuck di Legend 3 season. Boosternya pro banget, KDA bagus semua.',
    date: '2026-04-01',
  },
  {
    id: 'testi-5',
    name: 'Bayu Setiawan',
    avatarUrl: '',
    fromRank: 'Elite',
    toRank: 'Grandmaster',
    rating: 5,
    comment: 'Harga murah, pelayanan mantap. CS-nya fast respon, update progress terus via WA. Pasti order lagi!',
    date: '2026-03-10',
  },
  {
    id: 'testi-6',
    name: 'Mega Putri',
    avatarUrl: '',
    fromRank: 'Grandmaster',
    toRank: 'Legend',
    rating: 4,
    comment: 'Awalnya ragu karena takut kena banned, tapi ternyata mereka pakai VPN + mode offline. Aman sentosa!',
    date: '2026-04-05',
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ❓ FAQ Items
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah akun saya aman saat di-joki?',
    answer: 'Tentu! Kami menggunakan VPN premium dan mode offline saat bermain. Booster kami berpengalaman dan tidak akan mengubah pengaturan akun, membeli item, atau melakukan hal yang merugikan akun Anda.',
  },
  {
    id: 'faq-2',
    question: 'Berapa lama proses joki berlangsung?',
    answer: 'Durasi tergantung paket yang dipilih. Rata-rata 1–7 hari kerja. Kami akan memberikan estimasi waktu di setiap paket dan update progres via WhatsApp.',
  },
  {
    id: 'faq-3',
    question: 'Bagaimana jika rank turun saat proses joki?',
    answer: 'Kami memberikan garansi rank. Jika rank turun selama proses, booster akan menaikkan kembali tanpa biaya tambahan. Jika gagal, uang kembali 100%.',
  },
  {
    id: 'faq-4',
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer: 'Kami menerima pembayaran via DANA, GoPay, QRIS (semua e-wallet), dan Transfer Bank (BCA, BRI, BNI, Mandiri). Pembayaran dikonfirmasi otomatis.',
  },
  {
    id: 'faq-5',
    question: 'Apakah win rate saya akan turun?',
    answer: 'Tidak! Booster kami adalah pemain profesional dengan win rate tinggi. Kami justru akan menjaga dan meningkatkan win rate akun Anda selama proses boosting.',
  },
  {
    id: 'faq-6',
    question: 'Bisakah saya memilih hero tertentu?',
    answer: 'Untuk paket Solo Rank, booster akan menggunakan hero terbaik mereka. Untuk paket Duo Rank, Anda bisa request hero tertentu dan berdiskusi strategi dengan booster.',
  },
  {
    id: 'faq-7',
    question: 'Apakah ada garansi uang kembali?',
    answer: 'Ya! Jika dalam waktu yang ditentukan rank tidak naik sesuai paket, kami berikan refund 100%. Proses refund 1–3 hari kerja ke metode pembayaran asal.',
  },
  {
    id: 'faq-8',
    question: 'Apakah JokiMLBB.id terafiliasi dengan Moonton?',
    answer: 'Tidak. JokiMLBB.id adalah layanan independen dan tidak berafiliasi, bekerja sama, atau didukung oleh Moonton atau Mobile Legends: Bang Bang dalam bentuk apapun.',
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🌐 Server Regions
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const SERVER_REGIONS = [
  { value: 'indonesia', label: 'Indonesia' },
  { value: 'malaysia', label: 'Malaysia' },
  { value: 'philippines', label: 'Philippines' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'other', label: 'Lainnya' },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 💳 Payment Methods
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const PAYMENT_METHODS = [
  { value: 'qris', label: 'QRIS', icon: '📱', group: 'E-Wallet' },
  { value: 'dana', label: 'DANA', icon: '🔵', group: 'E-Wallet' },
  { value: 'ovo', label: 'OVO', icon: '🟣', group: 'E-Wallet' },
  { value: 'gopay', label: 'GoPay', icon: '🟢', group: 'E-Wallet' },
  { value: 'bca', label: 'BCA', icon: '🏦', group: 'Virtual Account' },
  { value: 'mandiri', label: 'Mandiri', icon: '🏦', group: 'Virtual Account' },
];
