'use client';

import React from 'react';
import { JokiPackage, RankTier } from '@/types';
import RankBadge from './RankBadge';
import styles from './PricingCard.module.css';

interface PricingCardProps {
  pkg: JokiPackage;
  onSelect: (pkg: JokiPackage) => void;
}

const CHECK_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function PricingCard({ pkg, onSelect }: PricingCardProps) {
  return (
    <div className={`${styles.card} ${pkg.isPopular ? styles.popular : ''}`}>
      {/* Popular badge */}
      {pkg.isPopular && (
        <div className={styles.popularBadge}>⭐ TERPOPULER</div>
      )}

      {/* Rank route */}
      <div className={styles.rankRow}>
        <RankBadge rank={pkg.fromRank as RankTier} size="sm" />
        <div className={styles.rankArrow}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M14 6l6 6-6 6" stroke="url(#rGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="rGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F5C518"/>
                <stop offset="100%" stopColor="#3B82F6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <RankBadge rank={pkg.toRank as RankTier} size="sm" />
      </div>

      {/* Package name */}
      <h3 className={styles.name}>{pkg.name}</h3>

      {/* Price */}
      <div className={styles.priceWrap}>
        <span className={styles.price}>{pkg.priceFormatted}</span>
        <span className={styles.estimasi}>⏱ {pkg.estimasi}</span>
      </div>

      {/* Features */}
      <ul className={styles.features}>
        {pkg.features.map((f) => (
          <li key={f} className={styles.feature}>
            {CHECK_ICON}
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`btn ${pkg.isPopular ? 'btn-primary' : 'btn-outline'} ${styles.cta}`}
        onClick={() => onSelect(pkg)}
        id={`select-pkg-${pkg.id}`}
        aria-label={`Pilih paket ${pkg.name}`}
      >
        Pilih Paket
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
