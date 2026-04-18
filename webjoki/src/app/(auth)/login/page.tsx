'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ identifier: '', password: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { identifier: '', password: '' };
    if (!formData.identifier.trim()) {
      newErrors.identifier = 'Email/Username tidak boleh kosong';
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password tidak boleh kosong';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.push('/');
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.glowTopLeft} />
      <div className={styles.glowBottomRight} />

      <div className={styles.content}>
        <div className={`glass animate-fade-in-up ${styles.card}`}>
          <Link href="/" className={styles.backArrow} aria-label="Kembali ke Beranda">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>

          <div className={styles.header}>
            <Link href="/" className={styles.logo}>
              ⚔️ <span className="gradient-text">JOKI MLBB</span>.ID
            </Link>
            <h1 className={styles.title}>MASUK AKUN</h1>
            <p className={styles.subtitle}>Selamat datang kembali! 👋</p>
            <div className="glow-separator" style={{ marginTop: '16px', marginBottom: '8px' }} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '16px' }}>
              <label className="form-label">Email atau Username</label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>✉️</span>
                <input 
                  type="text" 
                  className={`form-input ${styles.inputField}`} 
                  placeholder="Masukkan email/username" 
                  value={formData.identifier}
                  onChange={(e) => setFormData({...formData, identifier: e.target.value})}
                />
              </div>
              {errors.identifier && <span className={styles.errorText}>{errors.identifier}</span>}
            </div>

            <div className="form-group" style={{ marginBottom: '8px' }}>
              <label className="form-label">Password</label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>🔒</span>
                <input 
                  type={showPwd ? "text" : "password"} 
                  className={`form-input ${styles.inputField}`} 
                  placeholder="Masukkan password" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type="button" 
                  className={styles.toggleBtn} 
                  onClick={() => setShowPwd(!showPwd)}
                  aria-label="Toggle password visibility"
                >
                  {showPwd ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && <span className={styles.errorText}>{errors.password}</span>}
            </div>

            <Link href="/lupa-password" className={styles.forgotLink}>
              Lupa password?
            </Link>

            <button 
              type="submit" 
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={loading}
              style={{ width: '100%' }}
            >
              {loading ? (
                <>⏳ Memproses...</>
              ) : (
                <>⚡ MASUK SEKARANG</>
              )}
            </button>
          </form>

          <div className={styles.divider}>atau</div>

          <button type="button" className={`btn btn-outline ${styles.googleBtn}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Masuk dengan Google
          </button>

          <p className={styles.bottomText}>
            Belum punya akun? <Link href="/register">Daftar Sekarang →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
