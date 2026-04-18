'use client';

import React from 'react';
import Image from 'next/image';
import { JokiService } from '@/types';
import styles from './HeroBanner.module.css';

interface Props {
  service: JokiService;
}

export default function HeroBanner({ service }: Props) {
  return (
    <div className={styles.banner}>
      {/* Full background image */}
      <div className={styles.bgWrapper}>
        <Image
          src="/banner-detail.png"
          alt={`JOKIMLBB.ID — ${service.title} Banner`}
          fill
          className={styles.bgImage}
          priority
          sizes="100vw"
          quality={100}
        />
        <div className={styles.bgOverlay} />
        <div className={styles.bgVignette} />
      </div>

      {/* Center Parchment only */}
      <div className={styles.parchment}>
        <p className={styles.parchTop}>CAPEK LOSE STREAK?</p>
        <h2 className={styles.parchMain}>JOKI RANK AJA</h2>
        <div className={styles.parchLink}>
          <span>🌐</span> jokimlbb.id
        </div>
      </div>
    </div>
  );
}
