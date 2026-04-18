import { JokiService } from '@/types';

export const CLASSIC_TIERS = [
  {
    id: 'low-tier',
    tier: 'LOW TIER',
    rankRange: 'Warrior — Epic',
    priceRange: 'Rp 4.000 – Rp 5.000',
    priceLabel: 'per match/win',
    color: '#A0AEC0', // silver-gray
    glowColor: 'rgba(160,174,192,0.3)',
    icon: '/ranks/epic.png', // use existing rank image
    badge: null,
    characteristics: [
      '🎯 Matchmaking lebih mudah',
      '⚡ Proses cepat & efisien',
      '✅ Cocok untuk pemula',
    ],
    rankTiers: ['Warrior', 'Elite', 'Master', 'Grandmaster', 'Epic'],
  },
  {
    id: 'mid-tier',
    tier: 'MID TIER',
    rankRange: 'Legend — Mythic',
    priceRange: 'Rp 5.000 – Rp 7.000',
    priceLabel: 'per match/win',
    color: '#F5C518', // gold accent
    glowColor: 'rgba(245,197,24,0.3)',
    icon: '/ranks/mythic.png',
    badge: '🔥 POPULER',
    characteristics: [
      '🏆 Win Rate terjaga tinggi',
      '💎 Booster berpengalaman',
      '🔒 Akun aman terjamin',
    ],
    rankTiers: ['Legend', 'Mythic'],
  },
  {
    id: 'high-tier',
    tier: 'HIGH TIER',
    rankRange: 'Mythical Honor — Immortal',
    priceRange: 'Rp 7.000 – Rp 10.000+',
    priceLabel: 'per match/win',
    color: '#9F7AEA', // purple
    glowColor: 'rgba(159,122,234,0.3)',
    icon: '/ranks/mythic-immortal.png',
    badge: '👑 ELITE',
    characteristics: [
      '🥇 Lawan pro player & profesional',
      '🎮 Mekanik tinggi level MPL',
      '⭐ Booster rank tertinggi',
    ],
    rankTiers: ['Mythical Honor', 'Mythical Glory', 'Mythical Immortal'],
  },
];

export const OFFER_PACKAGES = [
  {
    id: 'starter',
    name: 'Starter Pack',
    games: 5,
    tier: 'Low Tier',
    originalPrice: 25000,
    price: 18000,
    discount: 28,
    bonus: '+ 1 Game Gratis',
    icon: '🎮',
    color: '#A0AEC0',
  },
  {
    id: 'regular',
    name: 'Regular Pack',
    games: 10,
    tier: 'Mid Tier',
    originalPrice: 65000,
    price: 45000,
    discount: 31,
    bonus: '+ 2 Game Gratis',
    icon: '⚡',
    color: '#F5C518',
    isPopular: true,
  },
  {
    id: 'pro',
    name: 'Pro Pack',
    games: 20,
    tier: 'Mid Tier',
    originalPrice: 130000,
    price: 85000,
    discount: 35,
    bonus: '+ 5 Game Gratis',
    icon: '🏆',
    color: '#3B82F6',
  },
  {
    id: 'elite',
    name: 'Elite Pack',
    games: 10,
    tier: 'High Tier',
    originalPrice: 100000,
    price: 65000,
    discount: 35,
    bonus: '+ 2 Game Gratis + Prioritas',
    icon: '👑',
    color: '#9F7AEA',
  },
];

export const JOKI_SERVICES: JokiService[] = [
  // ━━━━━━━━━━━ 1. JOKI ECERAN ━━━━━━━━━━━
  {
    id: 'svc-eceran',
    slug: 'joki-eceran',
    category: 'eceran',
    title: 'JOKI ECERAN',
    description: 'Joki rank per bintang, mulai dari Master hingga Mythic Immortal. Harga terjangkau, proses cepat.',
    artworkPlaceholder: 'Fighter/Tank MLBB hero in dynamic battle pose',
    badgeColor: '#F5C518',
    packages: [
      // Sub-category: Joki Rank/Star
      { id: 'ec-1', serviceId: 'svc-eceran', name: 'Master / Bintang', subCategory: 'Joki Rank/Star', rankTier: 'Master', price: 4000, originalPrice: 5500, discountPercent: 27, isManual: true },
      { id: 'ec-2', serviceId: 'svc-eceran', name: 'Grandmaster / Bintang', subCategory: 'Joki Rank/Star', rankTier: 'Grandmaster', price: 5000, originalPrice: 6000, discountPercent: 17, isManual: true },
      { id: 'ec-3', serviceId: 'svc-eceran', name: 'Epic / Bintang', subCategory: 'Joki Rank/Star', rankTier: 'Epic', price: 7000, originalPrice: 7500, discountPercent: 7, isManual: true },
      { id: 'ec-4', serviceId: 'svc-eceran', name: 'Legend / Bintang', subCategory: 'Joki Rank/Star', rankTier: 'Legend', price: 8000, originalPrice: 8500, discountPercent: 6, isManual: true },
      { id: 'ec-5', serviceId: 'svc-eceran', name: 'Mythic / Bintang', subCategory: 'Joki Rank/Star', rankTier: 'Mythic', price: 17000, originalPrice: 25000, discountPercent: 32, isManual: true, isPopular: true },
      { id: 'ec-6', serviceId: 'svc-eceran', name: 'Mythic Honor / Bintang', subCategory: 'Joki Rank/Star', rankTier: 'Mythic Honor', price: 19000, originalPrice: 27000, discountPercent: 30, isManual: true },
      { id: 'ec-7', serviceId: 'svc-eceran', name: 'Mythical Glory / Bintang', subCategory: 'Joki Rank/Star', rankTier: 'Mythical Glory', price: 25000, originalPrice: 30000, discountPercent: 17, isManual: true },
      { id: 'ec-8', serviceId: 'svc-eceran', name: 'Mythic Immortal / Bintang', subCategory: 'Joki Rank/Star', rankTier: 'Mythic Immortal', price: 27000, originalPrice: 34000, discountPercent: 21, isManual: true },
      // Sub-category: Joki Naik Rank (Paketan Bintang)
      { id: 'ec-9', serviceId: 'svc-eceran', name: '10 Bintang + 2 Bonus Epic', subCategory: 'Joki Naik Rank (Paketan Bintang)', rankTier: 'Epic', price: 60000, originalPrice: 90000, discountPercent: 33, isManual: true },
      { id: 'ec-10', serviceId: 'svc-eceran', name: '10 Bintang + 2 Bonus Legend', subCategory: 'Joki Naik Rank (Paketan Bintang)', rankTier: 'Legend', price: 70000, originalPrice: 102000, discountPercent: 31, isManual: true },
      { id: 'ec-11', serviceId: 'svc-eceran', name: '10 Bintang + 2 Bonus Mythic', subCategory: 'Joki Naik Rank (Paketan Bintang)', rankTier: 'Mythic', price: 160000, originalPrice: 300000, discountPercent: 47, isManual: true, isPopular: true },
      { id: 'ec-12', serviceId: 'svc-eceran', name: '10 Bintang + 2 Bonus Mythic Honor', subCategory: 'Joki Naik Rank (Paketan Bintang)', rankTier: 'Mythic Honor', price: 180000, originalPrice: 324000, discountPercent: 44, isManual: true },
    ],
  },

  // ━━━━━━━━━━━ 2. JOKI PAKETAN & RISING OPEN ━━━━━━━━━━━
  {
    id: 'svc-paketan',
    slug: 'joki-paketan-rising',
    category: 'paketan-rising',
    title: 'JOKI PAKETAN & RISING OPEN',
    description: 'Paket joki rank lengkap dan turnamen MLBB Rising Open dari bracket kota hingga subregional.',
    artworkPlaceholder: 'Assassin/Mage MLBB hero in epic magical pose',
    badgeColor: '#A855F7',
    packages: [
      { id: 'pk-1', serviceId: 'svc-paketan', name: 'Rising Piala Coklat', subCategory: 'Paket MLBB Rising Open', rankTier: 'rising_coklat', price: 100000, originalPrice: 150000, discountPercent: 33, isManual: true },
      { id: 'pk-2', serviceId: 'svc-paketan', name: 'Rising Piala Biru (Bracket Kota)', subCategory: 'Paket MLBB Rising Open', rankTier: 'rising_biru', price: 100000, originalPrice: 150000, discountPercent: 33, isManual: true },
      { id: 'pk-3', serviceId: 'svc-paketan', name: 'Rising Piala Hijau (Bracket Area)', subCategory: 'Paket MLBB Rising Open', rankTier: 'rising_hijau', price: 100000, originalPrice: 150000, discountPercent: 33, isManual: true },
      { id: 'pk-4', serviceId: 'svc-paketan', name: 'Rising Piala Ungu (Bracket Provinsi)', subCategory: 'Paket MLBB Rising Open', rankTier: 'rising_ungu', price: 100000, originalPrice: 150000, discountPercent: 33, isManual: true },
      { id: 'pk-5', serviceId: 'svc-paketan', name: 'Rising Piala Merah (Bracket Regional)', subCategory: 'Paket MLBB Rising Open', rankTier: 'rising_merah', price: 150000, originalPrice: 200000, discountPercent: 25, isManual: true, isPopular: true },
      { id: 'pk-6', serviceId: 'svc-paketan', name: 'Rising Piala Emas (Bracket Subregional)', subCategory: 'Paket MLBB Rising Open', rankTier: 'rising_emas', price: 150000, originalPrice: 200000, discountPercent: 25, isManual: true },
    ],
  },

  // ━━━━━━━━━━━ 3. JOKI GENDONG ━━━━━━━━━━━
  {
    id: 'svc-gendong',
    slug: 'joki-gendong',
    category: 'gendong',
    title: 'JOKI GENDONG',
    description: 'Main bareng booster profesional. Kamu tetap bermain di akunmu, booster carry dari party.',
    artworkPlaceholder: 'Cool mysterious MLBB hero with dark aura',
    badgeColor: '#3B82F6',
    packages: [
      { id: 'gd-1', serviceId: 'svc-gendong', name: 'Epic Gendong / Game', subCategory: 'Joki Gendong per Game', rankTier: 'Epic', price: 5000, originalPrice: 7000, discountPercent: 29, isManual: false },
      { id: 'gd-2', serviceId: 'svc-gendong', name: 'Legend Gendong / Game', subCategory: 'Joki Gendong per Game', rankTier: 'Legend', price: 6000, originalPrice: 8000, discountPercent: 25, isManual: false, isPopular: true },
      { id: 'gd-3', serviceId: 'svc-gendong', name: 'Mythic Gendong / Game', subCategory: 'Joki Gendong per Game', rankTier: 'Mythic', price: 8000, originalPrice: 12000, discountPercent: 33, isManual: false },
      { id: 'gd-4', serviceId: 'svc-gendong', name: 'Mythic Honor / Game', subCategory: 'Joki Gendong per Game', rankTier: 'Mythic Honor', price: 10000, originalPrice: 15000, discountPercent: 33, isManual: false },
    ],
  },

  // ━━━━━━━━━━━ 4. JOKI CLASSIC ━━━━━━━━━━━
  {
    id: 'svc-classic',
    slug: 'joki-classic',
    category: 'classic',
    title: 'JOKI CLASSIC',
    description: 'Tingkatkan win rate classic mode. Cocok untuk unlock hero dan naikkan KDA.',
    artworkPlaceholder: 'Marksman/Support MLBB hero in action',
    badgeColor: '#22C55E',
    packages: [
      { id: 'low-tier', serviceId: 'svc-classic', name: 'Low Tier (Warrior-Epic)', subCategory: 'Classic Per Game', rankTier: 'Epic', price: 4000, originalPrice: 5000, discountPercent: 0, isManual: false },
      { id: 'mid-tier', serviceId: 'svc-classic', name: 'Mid Tier (Legend-Mythic)', subCategory: 'Classic Per Game', rankTier: 'Mythic', price: 5000, originalPrice: 7000, discountPercent: 0, isManual: false, isPopular: true },
      { id: 'high-tier', serviceId: 'svc-classic', name: 'High Tier (Honor-Immortal)', subCategory: 'Classic Per Game', rankTier: 'Mythic Immortal', price: 7000, originalPrice: 10000, discountPercent: 0, isManual: false },
      { id: 'starter', serviceId: 'svc-classic', name: 'Starter Pack', subCategory: 'Paket Hemat Classic', rankTier: 'Epic', price: 18000, originalPrice: 25000, discountPercent: 28, isManual: false },
      { id: 'regular', serviceId: 'svc-classic', name: 'Regular Pack', subCategory: 'Paket Hemat Classic', rankTier: 'Mythic', price: 45000, originalPrice: 65000, discountPercent: 31, isManual: false, isPopular: true },
      { id: 'pro', serviceId: 'svc-classic', name: 'Pro Pack', subCategory: 'Paket Hemat Classic', rankTier: 'Mythical Glory', price: 85000, originalPrice: 130000, discountPercent: 35, isManual: false },
      { id: 'elite', serviceId: 'svc-classic', name: 'Elite Pack', subCategory: 'Paket Hemat Classic', rankTier: 'Mythic Immortal', price: 65000, originalPrice: 100000, discountPercent: 35, isManual: false },
    ],
  },

  // ━━━━━━━━━━━ 5. JOKI MAGIC CHESS ━━━━━━━━━━━
  {
    id: 'svc-magic-chess',
    slug: 'joki-magic-chess',
    category: 'magic-chess',
    title: 'JOKI MAGIC CHESS',
    description: 'Push rank Magic Chess dari Bronze hingga Platinum. Booster spesialis auto-battler.',
    artworkPlaceholder: 'Magic Chess panda/creature character',
    badgeColor: '#F97316',
    packages: [
      // Estimasi Harga Per Bintang
      { id: 'mc-gm', serviceId: 'svc-magic-chess', name: 'Grandmaster / Bintang', subCategory: 'Estimasi Harga Per Bintang', rankTier: 'Grandmaster', price: 1500, originalPrice: 2000, discountPercent: 25, isManual: true },
      { id: 'mc-epic', serviceId: 'svc-magic-chess', name: 'Epic / Bintang', subCategory: 'Estimasi Harga Per Bintang', rankTier: 'Epic', price: 2500, originalPrice: 3500, discountPercent: 29, isManual: true },
      { id: 'mc-legend', serviceId: 'svc-magic-chess', name: 'Legend / Bintang', subCategory: 'Estimasi Harga Per Bintang', rankTier: 'Legend', price: 4000, originalPrice: 5000, discountPercent: 20, isManual: true, isPopular: true },
      { id: 'mc-mythic', serviceId: 'svc-magic-chess', name: 'Mythic / Bintang', subCategory: 'Estimasi Harga Per Bintang', rankTier: 'Mythic', price: 7500, originalPrice: 10000, discountPercent: 25, isManual: true },
      { id: 'mc-honor', serviceId: 'svc-magic-chess', name: 'Mythic Honor / Bintang', subCategory: 'Estimasi Harga Per Bintang', rankTier: 'Mythic Honor', price: 12000, originalPrice: 15000, discountPercent: 20, isManual: true },
      // Paket Bintang (10 + 1 Bonus)
      { id: 'mc-pkg-gm', serviceId: 'svc-magic-chess', name: 'Grandmaster 10+1 Bintang', subCategory: 'Paket Bintang (10+1 Bonus)', rankTier: 'Grandmaster', price: 15000, originalPrice: 22000, discountPercent: 32, isManual: true },
      { id: 'mc-pkg-epic', serviceId: 'svc-magic-chess', name: 'Epic 10+1 Bintang', subCategory: 'Paket Bintang (10+1 Bonus)', rankTier: 'Epic', price: 25000, originalPrice: 38500, discountPercent: 35, isManual: true },
      { id: 'mc-pkg-legend', serviceId: 'svc-magic-chess', name: 'Legend 10+1 Bintang', subCategory: 'Paket Bintang (10+1 Bonus)', rankTier: 'Legend', price: 40000, originalPrice: 55000, discountPercent: 27, isManual: true, isPopular: true },
      { id: 'mc-pkg-mythic', serviceId: 'svc-magic-chess', name: 'Mythic 10+1 Bintang', subCategory: 'Paket Bintang (10+1 Bonus)', rankTier: 'Mythic', price: 75000, originalPrice: 110000, discountPercent: 32, isManual: true },
      { id: 'mc-pkg-honor', serviceId: 'svc-magic-chess', name: 'Mythic Honor 10+1 Bintang', subCategory: 'Paket Bintang (10+1 Bonus)', rankTier: 'Mythic Honor', price: 120000, originalPrice: 165000, discountPercent: 27, isManual: true },
    ],
  },
];

export function getServiceBySlug(slug: string): JokiService | undefined {
  return JOKI_SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(cat: string): JokiService[] {
  if (cat === 'all') return JOKI_SERVICES;
  return JOKI_SERVICES.filter((s) => s.category === cat);
}
