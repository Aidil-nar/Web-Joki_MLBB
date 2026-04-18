'use client';

import React, { useState } from 'react';
import styles from './McggCalculator.module.css';
import { formatRupiah } from '@/types';

const RANK_ORDER = ['grandmaster', 'epic', 'legend', 'mythic', 'honor'] as const;

const RANK_LABELS: Record<string, string> = {
  grandmaster: 'Grandmaster',
  epic: 'Epic',
  legend: 'Legend',
  mythic: 'Mythic',
  honor: 'Mythic Honor',
};

const STARS_PER_RANK: Record<string, { stars: number; pricePerStar: number }> = {
  grandmaster: { stars: 5, pricePerStar: 1500 },
  epic: { stars: 5, pricePerStar: 2500 },
  legend: { stars: 5, pricePerStar: 4000 },
  mythic: { stars: 25, pricePerStar: 7500 },
  honor: { stars: 10, pricePerStar: 12000 },
};

interface CalcResult {
  totalStars: number;
  totalPrice: number;
  breakdown: { rank: string; stars: number; price: number }[];
}

function calculateEstimate(fromRank: string, toRank: string): CalcResult | null {
  const fromIdx = RANK_ORDER.indexOf(fromRank as any);
  const toIdx = RANK_ORDER.indexOf(toRank as any);

  if (fromIdx === -1 || toIdx === -1 || fromIdx >= toIdx) return null;

  let totalStars = 0;
  let totalPrice = 0;
  const breakdown: CalcResult['breakdown'] = [];

  for (let i = fromIdx; i < toIdx; i++) {
    const rankKey = RANK_ORDER[i];
    const data = STARS_PER_RANK[rankKey];
    totalStars += data.stars;
    const price = data.stars * data.pricePerStar;
    totalPrice += price;
    breakdown.push({
      rank: RANK_LABELS[rankKey],
      stars: data.stars,
      price,
    });
  }

  return { totalStars, totalPrice, breakdown };
}

export default function McggCalculator() {
  const [fromRank, setFromRank] = useState('');
  const [toRank, setToRank] = useState('');
  const [result, setResult] = useState<CalcResult | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    if (!fromRank || !toRank) {
      setError('Pilih rank awal dan target terlebih dahulu.');
      return;
    }

    const calc = calculateEstimate(fromRank, toRank);
    if (!calc) {
      setError('Rank target harus lebih tinggi dari rank saat ini.');
      return;
    }

    setResult(calc);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.headerIcon}>🧮</span>
        <div className={styles.headerText}>
          <h4>KALKULATOR ESTIMASI</h4>
          <p>Hitung perkiraan biaya joki Magic Chess kamu</p>
        </div>
      </div>

      <div className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Rank Saat Ini</label>
          <select
            className={styles.select}
            value={fromRank}
            onChange={(e) => { setFromRank(e.target.value); setResult(null); }}
          >
            <option value="" disabled>Pilih Rank...</option>
            {RANK_ORDER.map((key) => (
              <option key={key} value={key}>{RANK_LABELS[key]}</option>
            ))}
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Target Rank</label>
          <select
            className={styles.select}
            value={toRank}
            onChange={(e) => { setToRank(e.target.value); setResult(null); }}
          >
            <option value="" disabled>Pilih Target...</option>
            {RANK_ORDER.map((key) => (
              <option key={key} value={key}>{RANK_LABELS[key]}</option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className={`btn btn-primary ${styles.calcBtn}`}
          onClick={handleCalculate}
        >
          HITUNG ESTIMASI
        </button>
      </div>

      {error && <p className={styles.errorMsg}>{error}</p>}

      {result && (
        <div className={styles.result}>
          {result.breakdown.map((item, idx) => (
            <div key={idx} className={styles.resultRow}>
              <span className={styles.resultLabel}>{item.rank} ({item.stars} ⭐)</span>
              <span className={styles.resultValue}>{formatRupiah(item.price)}</span>
            </div>
          ))}

          <div className={styles.resultDivider} />

          <div className={styles.resultTotal}>
            <span className={styles.resultTotalLabel}>TOTAL ESTIMASI</span>
            <span className={styles.resultTotalPrice}>{formatRupiah(result.totalPrice)}</span>
          </div>

          <p className={styles.resultNote}>
            * Harga estimasi, bisa berbeda tergantung situasi rank. Hubungi CS untuk harga final.
          </p>
        </div>
      )}
    </div>
  );
}
