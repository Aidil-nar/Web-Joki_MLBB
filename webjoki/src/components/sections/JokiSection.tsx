'use client';

import React, { useState, useMemo } from 'react';
import JokiCategoryTabs from './JokiCategoryTabs';
import JokiServiceCard from '@/components/ui/JokiServiceCard';
import { getServicesByCategory } from '@/data/jokiServices';
import { JokiCategory } from '@/types';
import styles from './JokiSection.module.css';

export default function JokiSection() {
  const [activeCategory, setActiveCategory] = useState<JokiCategory | 'all'>('all');

  const services = useMemo(() => getServicesByCategory(activeCategory), [activeCategory]);

  return (
    <section id="pricing" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Layanan Kami</span>
          <h2 className="section-title">Pilih Kategori Joki</h2>
          <p className="section-subtitle">
            Pilih layanan joki Mobile Legends yang sesuai dengan kebutuhan rank kamu.
          </p>
          <div className="glow-separator" />
        </div>

        {/* Category Tabs */}
        <JokiCategoryTabs activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

        {/* Grid of Services */}
        <div className={styles.grid}>
          {services.map((service) => (
            <JokiServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
