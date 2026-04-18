import React from 'react';
import styles from './OfferPackageCard.module.css';
import { formatRupiah } from '@/types';

interface OfferData {
  id: string;
  name: string;
  games: number;
  tier: string;
  originalPrice: number;
  price: number;
  discount: number;
  bonus: string;
  icon: string;
  color: string;
  isPopular?: boolean;
}

interface Props {
  offer: OfferData;
  isSelected?: boolean;
  onSelect?: () => void;
}

export default function OfferPackageCard({ offer, isSelected, onSelect }: Props) {
  return (
    <div 
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
      style={{
        boxShadow: isSelected ? `0 0 20px ${offer.color}40` : 'none',
        borderColor: isSelected ? offer.color : undefined
      }}
    >
      <div className={styles.leftAccent} style={{ backgroundColor: offer.color }} />
      
      {offer.isPopular && <div className={styles.popularBadge}>🔥 TERLARIS</div>}

      <div className={styles.iconCol}>{offer.icon}</div>

      <div className={styles.contentCol}>
        <div className={styles.topRow}>
          <span className={styles.packageName}>{offer.name}</span>
          <span className={styles.tierLabel}>{offer.tier}</span>
        </div>

        <div className={styles.gamesRow}>
          <span className={styles.gamesText} style={{ color: offer.color }}>{offer.games} Games</span>
          <span className={styles.bonusPill}>🎁 {offer.bonus}</span>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.currentPrice}>{formatRupiah(offer.price)}</span>
          <span className={styles.originalPrice}>{formatRupiah(offer.originalPrice)}</span>
          {offer.discount > 0 && <span className={styles.discountBadge}>Disc {offer.discount}%</span>}
        </div>
      </div>

      <div className={styles.btnCol}>
        <button type="button" className={`btn btn-primary ${styles.pesanBtn}`}>
          PESAN
        </button>
      </div>
    </div>
  );
}
