'use client';

import React from 'react';
import Image from 'next/image';
import { JokiServicePackage, RANK_ICONS, formatRupiah } from '@/types';
import styles from './PackageCard.module.css';

const RANK_IMAGE_MAP: Record<string, string> = {
  // Joki Rank/Star (Eceran)
  'master':           '/ranks/master.png',
  'grandmaster':      '/ranks/grandmaster.png',
  'epic':             '/ranks/epic.png',
  'legend':           '/ranks/legend.png',
  'mythic':           '/ranks/mythic.png',
  'mythic_honor':     '/ranks/mythic-honor.png',
  'mythic_glory':     '/ranks/mythic-glory.png',
  'mythical_glory':     '/ranks/mythic-glory.png',
  'mythic_immortal':  '/ranks/mythic-immortal.png',

  // Rising Trophies
  'rising_coklat': '/ranks/rising-coklat.png',
  'rising_biru':   '/ranks/rising-biru.png',
  'rising_hijau':  '/ranks/rising-hijau.png',
  'rising_ungu':   '/ranks/rising-ungu.png',
  'rising_merah':  '/ranks/rising-merah.png',
  'rising_emas':   '/ranks/rising-emas.png',
};

interface Props {
  pkg: JokiServicePackage;
  isSelected: boolean;
  onSelect: (pkg: JokiServicePackage) => void;
}

export default function PackageCard({ pkg, isSelected, onSelect }: Props) {
  const tier = pkg.rankTier?.toLowerCase().replace(/\s+/g, '_') ?? '';
  const imageSrc = RANK_IMAGE_MAP[tier] ?? null;

  const icon = imageSrc ? (
    <Image 
      src={imageSrc} 
      alt={pkg.rankTier ?? 'rank icon'} 
      width={64} 
      height={64} 
      className={styles.rankImage}
      priority={false}
    />
  ) : (
    <span style={{ fontSize: '2.2rem' }}>
      {pkg.rankTier ? (RANK_ICONS[pkg.rankTier] || '📦') : '📦'}
    </span>
  );

  return (
    <button
      type="button"
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(pkg)}
      id={`pkg-${pkg.id}`}
    >
      {/* Popular badge */}
      {pkg.isPopular && <span className={styles.popular}>🔥 POPULER</span>}

      {/* Discount badge */}
      {pkg.discountPercent > 0 && (
        <span className={styles.discount}>Disc {pkg.discountPercent}%</span>
      )}

      {/* Icon */}
      <div className={styles.icon}>{icon}</div>

      {/* Name */}
      <h4 className={styles.name}>{pkg.name}</h4>

      {/* Prices */}
      <div className={styles.priceRow}>
        <span className={styles.price}>{formatRupiah(pkg.price)}</span>
        {pkg.originalPrice > pkg.price && (
          <span className={styles.originalPrice}>{formatRupiah(pkg.originalPrice)}</span>
        )}
      </div>

      {/* Manual badge */}
      {pkg.isManual && <span className={styles.manualBadge}>BELI MANUAL</span>}
    </button>
  );
}
