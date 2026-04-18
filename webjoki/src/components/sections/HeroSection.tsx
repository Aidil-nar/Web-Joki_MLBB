'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background Image */}
      <div className={styles.bgWrapper}>
        <Image
          src="/banner-dsbb.png"
          alt=""
          fill
          className={styles.bgImage}
          priority
          sizes="100vw"
          quality={90}
        />
        <div className={styles.bgOverlay} />
      </div>
      <div className={styles.bgGrid} />

      {/* Main content: 2-column layout (Text Left, Image Right) */}
      <div className={`container ${styles.content}`}>

        {/* LEFT: Text */}
        <div className={styles.textCol}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            🎮 #1 Joki MLBB Terpercaya di Indonesia
          </div>

          <h1 className={styles.headline}>
            NAIK RANK <span className="gradient-text">MLBB</span>
            <br />
            CEPAT &amp; AMAN
          </h1>

          <p className={styles.subheadline}>
            Joki profesional, akun aman, garansi naik rank atau uang kembali.
            Booster berpengalaman siap mendorong rankmu ke puncak.
          </p>

          <div className={styles.ctas}>
            <a href="/#pricing" className="btn btn-primary">
              <span>⚡</span> Pesan Sekarang
            </a>
            <a href="/#pricing" className="btn btn-outline">
              Lihat Harga
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17l10-10M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: Character Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/hero-all-chars.jpg"
              alt="JOKIMLBB.ID — All MLBB Anime Characters"
              width={750}
              height={550}
              className={styles.heroImage}
              priority
              quality={100}
            />
            <div className={styles.imageGlow} />
          </div>
        </div>

      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className={`container ${styles.statsContainer}`}>
          <div className={styles.stat}>
            <span className={styles.statIcon}>🏆</span>
            <span className={styles.statValue}>2.500+</span>
            <span className={styles.statLabel}>Order Selesai</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statIcon}>⭐</span>
            <span className={styles.statValue}>4.9/5</span>
            <span className={styles.statLabel}>Rating</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statIcon}>✅</span>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>Sukses Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
