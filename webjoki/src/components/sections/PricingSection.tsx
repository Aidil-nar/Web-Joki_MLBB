'use client';

import React from 'react';
import { usePricingData } from '@/hooks/usePricingData';
import { JokiPackage, PackageCategory } from '@/types';
import PricingCard from '@/components/ui/PricingCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import styles from './PricingSection.module.css';

const TABS: { value: PackageCategory; label: string }[] = [
  { value: 'solo', label: '⚔️ Solo Rank' },
  { value: 'duo', label: '👥 Duo Rank' },
  { value: 'winboost', label: '🏆 Win Boost' },
];

interface PricingSectionProps {
  onSelectPackage: (pkg: JokiPackage) => void;
}

export default function PricingSection({ onSelectPackage }: PricingSectionProps) {
  const { packages, isLoading, category, setCategory } = usePricingData('solo');

  return (
    <section id="pricing" className={`section ${styles.section}`}>
      {/* Diagonal top clip */}
      <div className={styles.diagonalBg} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <span className="section-label">Harga Paket</span>
          <h2 className="section-title">Pilih Paket Joki Terbaik</h2>
          <p className="section-subtitle">
            Harga terjangkau, booster profesional. Garansi naik rank atau uang kembali 100%.
          </p>
          <div className="glow-separator" />
        </div>

        {/* Category Tabs */}
        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.value}
              className={`${styles.tab} ${category === tab.value ? styles.tabActive : ''}`}
              onClick={() => setCategory(tab.value)}
              id={`tab-${tab.value}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        {isLoading ? (
          <div className={styles.loading}>
            <LoadingSpinner size={36} />
            <span style={{ marginLeft: 12, color: 'var(--color-muted)' }}>
              Memuat paket...
            </span>
          </div>
        ) : (
          <div className={styles.grid}>
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={styles.gridItem}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PricingCard pkg={pkg} onSelect={onSelectPackage} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
