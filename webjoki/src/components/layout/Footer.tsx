import React from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/data/dummyData';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top Decoration */}
      <div className={styles.decoration} />

      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>⚔️</span>
              <span className={styles.logoText}>JokiMLBB<span className={styles.accent}>.id</span></span>
            </Link>
            <p className={styles.desc}>
              Layanan joki Mobile Legends profesional, cepat, dan terpercaya. 
              Naik rank tanpa stres, akun 100% aman bergaransi.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="WhatsApp">📱</a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">📸</a>
              <a href="#" className={styles.socialIcon} aria-label="Telegram">✈️</a>
            </div>
          </div>

          {/* Links Col */}
          <div className={styles.linksCol}>
            <h4 className={styles.heading}>Menu Cepat</h4>
            <ul className={styles.linkList}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className={styles.linksCol}>
            <h4 className={styles.heading}>Layanan</h4>
            <ul className={styles.linkList}>
              <li><Link href="/joki/joki-eceran" className={styles.link}>Joki Eceran</Link></li>
              <li><Link href="/joki/joki-paketan-rising" className={styles.link}>Joki Paketan</Link></li>
              <li><Link href="/joki/joki-gendong" className={styles.link}>Joki Gendong</Link></li>
              <li><Link href="/joki/joki-classic" className={styles.link}>Joki Classic</Link></li>
              <li><Link href="/joki/joki-magic-chess" className={styles.link}>Magic Chess</Link></li>
            </ul>
          </div>

          {/* Legal / Payment Col */}
          <div className={styles.paymentCol}>
            <h4 className={styles.heading}>Pembayaran Aman</h4>
            <div className={styles.paymentGrid}>
              <span className={styles.payBadge}>DANA</span>
              <span className={styles.payBadge}>OVO</span>
              <span className={styles.payBadge}>GoPay</span>
              <span className={styles.payBadge}>QRIS</span>
              <span className={styles.payBadge}>BCA</span>
              <span className={styles.payBadge}>Mandiri</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} JokiMLBB.id. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            JokiMLBB.id sama sekali tidak berafiliasi, didukung, atau disponsori oleh Moonton. 
            Mobile Legends: Bang Bang adalah merek dagang dari Moonton.
          </p>
        </div>
      </div>
    </footer>
  );
}
