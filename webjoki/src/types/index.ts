// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔷 TypeScript Types & Interfaces
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type RankTier =
  | 'Warrior'
  | 'Elite'
  | 'Master'
  | 'Grandmaster'
  | 'Epic'
  | 'Legend'
  | 'Mythic'
  | 'Mythic Honor'
  | 'Mythic Glory'
  | 'Mythic Immortal'
  | 'Mythical Glory';

export type PackageCategory = 'solo' | 'duo' | 'winboost';
export type PaymentMethod = 'dana' | 'gopay' | 'qris' | 'transfer';

// ── Joki Service Types (Oura-style) ──
export type JokiCategory =
  | 'eceran'
  | 'paketan-rising'
  | 'gendong'
  | 'classic'
  | 'magic-chess';

export interface JokiServicePackage {
  id: string;
  serviceId: string;
  name: string;
  subCategory: string;
  rankTier?: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  isManual: boolean;
  isPopular?: boolean;
}

export interface JokiService {
  id: string;
  slug: string;
  category: JokiCategory;
  title: string;
  description: string;
  artworkPlaceholder: string;
  badgeColor: string;
  packages: JokiServicePackage[];
}

export interface AccountFormData {
  email: string;
  password: string;
  loginVia: 'moonton' | 'google' | 'vk' | 'facebook' | '';
  nickname: string;
  userId: string;
  serverId: string;
  requestHero: string;
  notes: string;
}

// ── Original types (kept for homepage sections) ──
export interface JokiPackage {
  id: string;
  name: string;
  fromRank: RankTier;
  toRank: RankTier;
  price: number;
  priceFormatted: string;
  estimasi: string;
  features: string[];
  isPopular: boolean;
  category: PackageCategory;
  rankColor: string;
}

export interface OrderFormData {
  nickname: string;
  userId: string;
  server: string;
  selectedPackageId: string;
  notes: string;
  paymentMethod: PaymentMethod;
}

export interface FormState {
  data: OrderFormData;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

export interface Testimonial {
  id: string;
  name: string;
  avatarUrl: string;
  fromRank: string;
  toRank: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// Rank color mapping
export const RANK_COLORS: Record<string, string> = {
  'Warrior': '#9CA3AF',
  'Elite': '#22C55E',
  'Master': '#3B82F6',
  'Grandmaster': '#A855F7',
  'Epic': '#7C3AED',
  'Legend': '#F97316',
  'Mythic': '#EF4444',
  'Mythic Honor': '#E11D48',
  'Mythic Glory': '#DC2626',
  'Mythic Immortal': '#B91C1C',
  'Mythical Glory': '#DC2626',
};

export const RANK_GRADIENTS: Record<string, string> = {
  'Warrior': 'linear-gradient(135deg, #6B7280, #9CA3AF)',
  'Elite': 'linear-gradient(135deg, #16A34A, #4ADE80)',
  'Master': 'linear-gradient(135deg, #2563EB, #60A5FA)',
  'Grandmaster': 'linear-gradient(135deg, #7C3AED, #C084FC)',
  'Epic': 'linear-gradient(135deg, #5B21B6, #8B5CF6)',
  'Legend': 'linear-gradient(135deg, #EA580C, #FB923C)',
  'Mythic': 'linear-gradient(135deg, #DC2626, #F5C518)',
  'Mythic Honor': 'linear-gradient(135deg, #E11D48, #F43F5E)',
  'Mythic Glory': 'linear-gradient(135deg, #B91C1C, #F97316, #F5C518)',
  'Mythic Immortal': 'linear-gradient(135deg, #7F1D1D, #DC2626, #F5C518)',
  'Mythical Glory': 'linear-gradient(135deg, #B91C1C, #F97316, #F5C518)',
};

export const RANK_ICONS: Record<string, string> = {
  'Warrior': '⚔️',
  'Elite': '🛡️',
  'Master': '🗡️',
  'Grandmaster': '💎',
  'Epic': '👑',
  'Legend': '🏅',
  'Mythic': '🔥',
  'Mythic Honor': '💫',
  'Mythic Glory': '🌟',
  'Mythic Immortal': '⚡',
  'Mythical Glory': '🌟',
};

/** Format price to Rupiah */
export function formatRupiah(n: number): string {
  return 'Rp ' + n.toLocaleString('id-ID');
}
