'use client';

import React from 'react';
import Image from 'next/image';
import styles from './McggPricingCard.module.css';

export interface McggTier {
  id: string;
  rank: string;
  icon: string;
  pricePerStar: number;
  priceLabel: string;
  color: string;
  glowColor: string;
  badge: string | null;
  desc: string;
}

export interface BoronganData {
  title: string;
  example: string;
  price: string;
  desc: string;
  badge: string;
}

interface PricingCardProps {
  tier: McggTier;
}

export function McggPricingCard({ tier }: PricingCardProps) {
  const isFeatured = tier.id === 'legend';

  return (
    <div
      className={`glass ${styles.card} ${isFeatured ? styles.featured : ''}`}
      style={{
        boxShadow: isFeatured ? `0 0 24px ${tier.glowColor}` : 'none',
      }}
    >
      {tier.badge && (
        <span className={styles.badge} style={{ color: tier.color }}>
          {tier.badge}
        </span>
      )}

      <div
        className={styles.iconWrapper}
        style={{ filter: `drop-shadow(0 4px 14px ${tier.glowColor})` }}
      >
        <Image src={tier.icon} fill alt={tier.rank} className={styles.rankIcon} />
      </div>

      <h4 className={styles.rankName} style={{ color: tier.color }}>
        {tier.rank}
      </h4>

      <div className={styles.priceArea}>
        <div className={styles.priceText} style={{ color: tier.color }}>
          {tier.priceLabel}
        </div>
        <span className={styles.priceLabel}>/ per bintang</span>
      </div>

      <div className={styles.divider} />

      <p className={styles.desc}>{tier.desc}</p>
    </div>
  );
}

interface BoronganCardProps {
  data: BoronganData;
}

export function BoronganCard({ data }: BoronganCardProps) {
  return (
    <div className={`glass ${styles.boronganCard}`}>
      <div className={styles.boronganAccent} />
      <span className={styles.boronganBadge}>{data.badge}</span>

      <div className={styles.boronganIcon}>♟️</div>

      <div className={styles.boronganInfo}>
        <h4 className={styles.boronganTitle}>{data.title}</h4>
        <span className={styles.boronganRoute}>Contoh: {data.example} →</span>
        <div className={styles.boronganPrice}>{data.price}</div>
        <p className={styles.boronganDesc}>{data.desc}</p>
      </div>

      <div className={styles.boronganBtn}>
        <a
          href="https://wa.me/628XXXXXXXXX?text=Halo%20min%2C%20saya%20mau%20tanya%20paket%20borongan%20MCGG"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.csBtn}`}
        >
          💬 KONSULTASI CS
        </a>
      </div>
    </div>
  );
}
