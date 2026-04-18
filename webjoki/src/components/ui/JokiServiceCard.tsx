'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { JokiService } from '@/types';
import styles from './JokiServiceCard.module.css';

interface Props {
  service: JokiService;
}

const HERO_IMAGES: Record<string, string> = {
  'eceran': '/hero-card-1.jpg',
  'paketan-rising': '/hero-card-2.jpg',
  'gendong': '/hero-card-3.jpg',
  'classic': '/hero-card-4.jpg',
  'magic-chess': '/characters/angela-mcgg.jpg',
};

export default function JokiServiceCard({ service }: Props) {
  const heroImg = HERO_IMAGES[service.category] || '/hero-card-1.jpg';

  return (
    <Link href={`/joki/${service.slug}`} className={styles.card}>
      {/* Hero character image */}
      <div className={styles.artwork}>
        <Image
          src={heroImg}
          alt={service.title}
          fill
          className={styles.heroImage}
          sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 20vw"
          quality={90}
        />
      </div>

      {/* Bottom gradient overlay */}
      <div className={styles.overlay} />

      {/* Bottom label */}
      <div className={styles.label}>
        <span className={styles.mlbbBadge}>{service.category === 'magic-chess' ? 'MCGG' : 'MLBB'}</span>
        <h3 className={styles.title}>{service.title}</h3>
      </div>

      {/* Hover glow ring */}
      <div className={styles.glowRing} style={{ boxShadow: `0 0 30px ${service.badgeColor}40` }} />
    </Link>
  );
}
