'use client';

import React from 'react';
import styles from './RatingPanel.module.css';

export default function RatingPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.ratingNum}>4.99</div>
      <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
      <p className={styles.sub}>Berdasarkan total 52.73rb rating</p>
    </div>
  );
}
