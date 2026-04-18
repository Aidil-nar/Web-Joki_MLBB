'use client';

import React from 'react';
import styles from './McggPricingSection.module.css';
import { McggPricingCard, BoronganCard } from '@/components/ui/McggPricingCard';
import McggCalculator from '@/components/ui/McggCalculator';
import type { McggTier, BoronganData } from '@/components/ui/McggPricingCard';

const MCGG_TIERS: McggTier[] = [
  {
    id: 'grandmaster',
    rank: 'Grandmaster',
    icon: '/ranks/grandmaster.png',
    pricePerStar: 1500,
    priceLabel: 'Rp 1.500',
    color: '#A0AEC0',
    glowColor: 'rgba(160,174,192,0.25)',
    badge: null,
    desc: 'Cocok untuk pemula MCGG',
  },
  {
    id: 'epic',
    rank: 'Epic',
    icon: '/ranks/epic.png',
    pricePerStar: 2500,
    priceLabel: 'Rp 2.500',
    color: '#48BB78',
    glowColor: 'rgba(72,187,120,0.25)',
    badge: null,
    desc: 'Mulai kompetitif di MCGG',
  },
  {
    id: 'legend',
    rank: 'Legend',
    icon: '/ranks/legend.png',
    pricePerStar: 4000,
    priceLabel: 'Rp 3.500 – Rp 4.500',
    color: '#F5C518',
    glowColor: 'rgba(245,197,24,0.25)',
    badge: '🔥 POPULER',
    desc: 'Tier menengah kompetitif',
  },
  {
    id: 'mythic',
    rank: 'Mythic',
    icon: '/ranks/mythic.png',
    pricePerStar: 7500,
    priceLabel: 'Rp 7.500+',
    color: '#F56565',
    glowColor: 'rgba(245,101,101,0.25)',
    badge: null,
    desc: 'Tier tinggi, skill premium',
  },
  {
    id: 'honor',
    rank: 'Mythic Honor',
    icon: '/ranks/mythic-honor.png',
    pricePerStar: 12000,
    priceLabel: 'Rp 12.000',
    color: '#9F7AEA',
    glowColor: 'rgba(159,122,234,0.25)',
    badge: '👑 ELITE',
    desc: 'Tertinggi, booster spesialis',
  },
];

const BORONGAN: BoronganData = {
  title: 'Paket Borongan MCGG',
  example: 'Epic → Legend',
  price: 'Rp 150.000+',
  desc: 'Harga menyesuaikan jarak rank. Konsultasi via WhatsApp untuk penawaran terbaik.',
  badge: '⚡ BEST VALUE',
};

export default function McggPricingSection() {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>HARGA LAYANAN</span>
        <h3 className={styles.title}>ESTIMASI HARGA PER BINTANG</h3>
        <p className={styles.subtitle}>Harga dihitung per bintang kenaikan rank Magic Chess</p>
        <div className={styles.separator} />
      </div>

      <div className={styles.pricingGrid}>
        {MCGG_TIERS.map((tier) => (
          <McggPricingCard key={tier.id} tier={tier} />
        ))}
      </div>

      <div className={styles.boronganSection}>
        <BoronganCard data={BORONGAN} />
      </div>

      <div className={styles.calcSection}>
        <McggCalculator />
      </div>
    </div>
  );
}
