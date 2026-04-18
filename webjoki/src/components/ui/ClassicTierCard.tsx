import React from 'react';
import Image from 'next/image';
import styles from './ClassicTierCard.module.css';

interface TierData {
  id: string;
  tier: string;
  rankRange: string;
  priceRange: string;
  priceLabel: string;
  color: string;
  glowColor: string;
  icon: string;
  badge: string | null;
  characteristics: string[];
  rankTiers: string[];
}

interface Props {
  tierData: TierData;
  isSelected?: boolean;
  onSelect?: () => void;
}

export default function ClassicTierCard({ tierData, isSelected, onSelect }: Props) {
  const isMidTier = tierData.id === 'mid-tier';

  return (
    <div 
      className={`glass ${styles.card} ${isSelected ? styles.selected : ''} ${isMidTier ? styles.midTier : ''}`}
      onClick={onSelect}
      style={{
        boxShadow: isSelected || isMidTier ? `0 0 30px ${tierData.glowColor}` : 'none',
        borderColor: isSelected ? tierData.color : undefined
      }}
    >
      {tierData.badge && (
        <div className={styles.badge} style={{ color: tierData.color }}>
          {tierData.badge}
        </div>
      )}

      <div className={styles.header}>
        <div className={styles.iconWrapper} style={{ filter: `drop-shadow(0 4px 16px ${tierData.glowColor})` }}>
          <Image 
            src={tierData.icon} 
            fill 
            alt={tierData.tier} 
            className={styles.rankIcon}
          />
        </div>
        <h3 className={styles.tierLabel} style={{ color: tierData.color }}>{tierData.tier}</h3>
        <span className={styles.rankRange}>{tierData.rankRange}</span>
      </div>

      <div className={styles.priceArea}>
        <div className={styles.priceRange} style={{ color: tierData.color }}>{tierData.priceRange}</div>
        <span className={styles.priceLabel}>{tierData.priceLabel}</span>
      </div>

      <div className={styles.divider} />

      <ul className={styles.characteristics}>
        {tierData.characteristics.map((char, index) => (
          <li key={index} className={styles.charItem}>
            {char}
          </li>
        ))}
      </ul>

      <div className={styles.ranksRow}>
        {tierData.rankTiers.map((rankStr, idx) => (
          <span key={idx} className={styles.rankPill}>
            {rankStr}
          </span>
        ))}
      </div>

      <button 
        type="button" 
        className={`btn ${isMidTier ? 'btn-primary' : 'btn-outline'} ${styles.ctaBtn}`}
        style={!isMidTier ? { borderColor: tierData.color, color: tierData.color } : undefined}
      >
        PESAN SEKARANG
      </button>
    </div>
  );
}
