'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/data/dummyData';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>⚔️</span>
          <span className={styles.logoText}>JokiMLBB<span className={styles.accent}>.id</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className={styles.actions}>
          <div className={styles.authGroup}>
            <Link href="/login" className={styles.loginBtn}>
              Masuk
            </Link>
            <Link href="/register" className={styles.registerBtn}>
              Daftar
            </Link>
          </div>
          
          <Link href="/#pricing" className={`btn btn-primary ${styles.ctaDesktop}`}>
            Pesan Sekarang
          </Link>

          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen1 : ''}`} />
            <div className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen2 : ''}`} />
            <div className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavInner}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <div className={styles.mobileAuthDivider} />
          
          <div className={styles.mobileAuthGroup}>
            <Link 
              href="/login" 
              className={styles.mobileLoginBtn}
              onClick={() => setMobileMenuOpen(false)}
            >
              Masuk
            </Link>
            <Link 
              href="/register" 
              className={styles.mobileRegisterBtn}
              onClick={() => setMobileMenuOpen(false)}
            >
              Daftar
            </Link>
          </div>

          <Link
            href="/#pricing"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '8px' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
}
