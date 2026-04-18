'use client';

import React, { useMemo } from 'react';
import { JokiServicePackage } from '@/types';
import PackageCard from './PackageCard';
import styles from './FormCards.module.css';

interface Props {
  packages: JokiServicePackage[];
  selectedPackage: JokiServicePackage | null;
  onSelect: (pkg: JokiServicePackage) => void;
}

export default function PackageSelector({ packages, selectedPackage, onSelect }: Props) {
  // Group packages by subCategory naturally
  const groupedPackages = useMemo(() => {
    const map = new Map<string, JokiServicePackage[]>();
    packages.forEach(pkg => {
      if (!map.has(pkg.subCategory)) {
        map.set(pkg.subCategory, []);
      }
      map.get(pkg.subCategory)!.push(pkg);
    });
    return Array.from(map.entries());
  }, [packages]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.numberIcon}>2</span>
        <h2 className={styles.title}>Pilih Nominal</h2>
      </div>

      <div className={styles.body}>
        {groupedPackages.map(([subCat, pkgs]) => (
          <div key={subCat} className={styles.subCatSection}>
            <h3 className={styles.subCatTitle}>{subCat}</h3>
            <div className={styles.grid3}>
              {pkgs.map(pkg => (
                <PackageCard 
                  key={pkg.id} 
                  pkg={pkg} 
                  isSelected={selectedPackage?.id === pkg.id}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
