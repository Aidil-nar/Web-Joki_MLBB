'use client';

import React from 'react';
import styles from './ClassicPackageSelector.module.css';
import ClassicTierCard from '../ui/ClassicTierCard';
import OfferPackageCard from '../ui/OfferPackageCard';
import { JokiServicePackage } from '@/types';
import { CLASSIC_TIERS, OFFER_PACKAGES } from '@/data/jokiServices';

interface Props {
  packages: JokiServicePackage[];
  selectedPackage: JokiServicePackage | null;
  onSelect: (pkg: JokiServicePackage) => void;
}

export default function ClassicPackageSelector({ packages, selectedPackage, onSelect }: Props) {
  // Helpers to safely match backend package objects to frontend UI objects
  const handleSelectBasicTier = (tierId: string) => {
    const pkg = packages.find(p => p.id === tierId);
    if (pkg) onSelect(pkg);
  };

  const handleSelectOffer = (offerId: string) => {
    const pkg = packages.find(p => p.id === offerId);
    if (pkg) onSelect(pkg);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tierSection}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.numberIcon}>2</span>
            JOKI CLASSIC PER GAME
          </h2>
          <p className={styles.subtitle}>Pilih tier rank akun MLBB kamu saat ini.</p>
        </div>

        <div className={styles.tierGrid}>
          {CLASSIC_TIERS.map((tier) => (
            <ClassicTierCard 
              key={tier.id}
              tierData={tier}
              isSelected={selectedPackage?.id === tier.id}
              onSelect={() => handleSelectBasicTier(tier.id)}
            />
          ))}
        </div>
      </div>

      <div className={styles.offerSection}>
        <div className={styles.offerHeader}>
          <span className={styles.offerLabel}>PENAWARAN SPESIAL</span>
          <h3 className={styles.offerTitle}>PAKET HEMAT CLASSIC</h3>
          <p className={styles.offerSubtitle}>Beli lebih banyak, hemat lebih banyak!</p>
        </div>

        <div className={styles.offerGrid}>
          {OFFER_PACKAGES.map((offer) => (
            <OfferPackageCard 
              key={offer.id}
              offer={offer}
              isSelected={selectedPackage?.id === offer.id}
              onSelect={() => handleSelectOffer(offer.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
