'use client';

import React from 'react';
import styles from './JokiCategoryTabs.module.css';
import { JokiCategory } from '@/types';

interface Props {
  activeCategory: JokiCategory | 'all';
  onSelectCategory: (cat: JokiCategory | 'all') => void;
}

const CATEGORIES: { id: JokiCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Semua Kategori' },
  { id: 'eceran', label: 'Joki Eceran' },
  { id: 'paketan-rising', label: 'Joki Paketan & Rising Open' },
  { id: 'gendong', label: 'Joki Gendong' },
  { id: 'classic', label: 'Joki Classic' },
  { id: 'magic-chess', label: 'Joki Magic Chess' },
];

export default function JokiCategoryTabs({ activeCategory, onSelectCategory }: Props) {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.tabs}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.tab} ${activeCategory === cat.id ? styles.active : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
