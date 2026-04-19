'use client';

import React from 'react';
import { JokiServicePackage, formatRupiah } from '@/types';
import styles from './OrderSidebar.module.css';

interface Props {
  selectedPackage: JokiServicePackage | null;
  quantity: number;
  onOrderClick: () => void;
}

export default function OrderSidebar({ selectedPackage, quantity, onOrderClick }: Props) {
  const totalPrice = selectedPackage ? selectedPackage.price * quantity : 0;
  const totalOriginal = selectedPackage ? selectedPackage.originalPrice * quantity : 0;

  return (
    <div className={styles.sidebar}>
      {/* Help Panel */}
      <div className={styles.helpPanel}>
        <div className={styles.helpIcon}>🎧</div>
        <div className={styles.helpText}>
          <div className={styles.helpTitle}>Butuh Bantuan?</div>
          <div className={styles.helpDesc}>Kamu bisa hubungi admin disini.</div>
        </div>
      </div>

      {/* Summary Box */}
      <div className={styles.summaryBox}>
        {selectedPackage ? (
          <div className={styles.selectedItem}>
            {selectedPackage.discountPercent > 0 && (
              <span className={styles.discountBadge}>Disc {selectedPackage.discountPercent}%</span>
            )}
            <h4 className={styles.pkgName}>{selectedPackage.name}</h4>
            
            {/* Quantity info */}
            {quantity > 1 && (
              <div className={styles.qtyInfo}>
                {formatRupiah(selectedPackage.price)} x {quantity}
              </div>
            )}

            {/* Total price */}
            <div className={styles.pkgPrice}>{formatRupiah(totalPrice)}</div>
            {totalOriginal > totalPrice && (
              <div className={styles.pkgOriginalPrice}>{formatRupiah(totalOriginal)}</div>
            )}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <i>Belum ada item produk yang dipilih.</i>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <button 
        className={styles.submitBtn} 
        onClick={onOrderClick}
      >
        <span>🛒</span> Pesan Sekarang!
      </button>
    </div>
  );
}
