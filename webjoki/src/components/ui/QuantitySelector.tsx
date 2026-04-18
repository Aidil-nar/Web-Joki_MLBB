'use client';

import React from 'react';
import styles from './FormCards.module.css';
import qtyStyles from './QuantitySelector.module.css';

interface Props {
  quantity: number;
  onChange: (qty: number) => void;
}

export default function QuantitySelector({ quantity, onChange }: Props) {
  const increment = () => onChange(quantity + 1);
  const decrement = () => {
    if (quantity > 1) onChange(quantity - 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.numberIcon}>3</span>
        <h2 className={styles.title}>Masukkan Jumlah Pembelian</h2>
      </div>
      <div className={styles.body}>
        <div className={qtyStyles.row}>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (!isNaN(val) && val >= 1) onChange(val);
            }}
            className={styles.input}
          />
          <button className={qtyStyles.btn} onClick={increment} aria-label="Tambah">+</button>
          <button className={qtyStyles.btn} onClick={decrement} aria-label="Kurangi">−</button>
        </div>
      </div>
    </div>
  );
}
