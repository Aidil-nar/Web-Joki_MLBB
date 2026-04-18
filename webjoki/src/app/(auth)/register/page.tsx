'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ 
    username: '', 
    email: '', 
    whatsapp: '', 
    password: '', 
    confirmPassword: '', 
    agreed: false 
  });
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Password strength calculation
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { width: '0%', color: 'transparent' };
    if (pwd.length < 6) return { width: '33%', color: 'var(--color-danger)' };
    if (pwd.length >= 8 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) return { width: '100%', color: 'var(--color-success)' };
    return { width: '66%', color: 'var(--color-accent)' };
  };
  const strength = getPasswordStrength(formData.password);

  const validate = () => {
    let valid = true;
    const newErrors: Record<string, string> = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username tidak boleh kosong';
      valid = false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email tidak valid';
      valid = false;
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'No WhatsApp tidak boleh kosong';
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password tidak boleh kosong';
      valid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok';
      valid = false;
    }
    if (!formData.agreed) {
      newErrors.agreed = 'Anda harus menyetujui S&K';
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
      router.push('/login');
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
            <h1 className={styles.title}>BUAT AKUN</h1>
            <p className={styles.subtitle}>Gabung sekarang dan nikmati layanannya! 🚀</p>
            <div className="glow-separator" style={{ marginTop: '16px', marginBottom: '8px' }} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className="form-group">
                <label className="form-label">Username</label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>👤</span>
                  <input 
                    type="text" 
                    className={`form-input ${styles.inputField}`} 
                    placeholder="Masukkan username" 
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                  />
                </div>
                {errors.username && <span className={styles.errorText}>{errors.username}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>✉️</span>
                  <input 
                    type="email" 
                    className={`form-input ${styles.inputField}`} 
                    placeholder="contoh@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '16px', marginBottom: '16px' }}>
              <label className="form-label">No. WhatsApp <span style={{ color: 'var(--color-muted)', fontWeight: 400, textTransform: 'none' }}>(Untuk Notifikasi Order)</span></label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>📱</span>
                <input 
                  type="tel" 
                  className={`form-input ${styles.inputField}`} 
                  placeholder="081234567890" 
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>
              {errors.whatsapp && <span className={styles.errorText}>{errors.whatsapp}</span>}
            </div>

            <div className="form-group" style={{ marginBottom: '16px' }}>
              <label className="form-label">Password</label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>🔒</span>
                <input 
                  type={showPwd ? "text" : "password"} 
                  className={`form-input ${styles.inputField}`} 
                  placeholder="Minimal 6 karakter" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type="button" 
                  className={styles.toggleBtn} 
                  onClick={() => setShowPwd(!showPwd)}
                >
                  {showPwd ? '🙈' : '👁️'}
                </button>
              </div>
              {/* Strength bar */}
              <div className={styles.strengthBar}>
                <div className={styles.strengthFill} style={{ width: strength.width, backgroundColor: strength.color }} />
              </div>
              {errors.password && <span className={styles.errorText}>{errors.password}</span>}
            </div>

            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label className="form-label">Konfirmasi Password</label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>🔒</span>
                <input 
                  type={showConfirmPwd ? "text" : "password"} 
                  className={`form-input ${styles.inputField}`} 
                  placeholder="Ketik ulang password" 
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                />
                <button 
                  type="button" 
                  className={styles.toggleBtn} 
                  onClick={() => setShowConfirmPwd(!showConfirmPwd)}
                >
                  {showConfirmPwd ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
            </div>

            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  className={styles.checkbox}
                  checked={formData.agreed}
                  onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                />
                <span className={styles.checkmark}></span>
                <span>Saya setuju dengan Syarat & Ketentuan</span>
              </label>
              {errors.agreed && <span className={styles.errorText} style={{ display: 'block', marginTop: '4px' }}>{errors.agreed}</span>}
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={loading}
              style={{ width: '100%' }}
            >
              {loading ? (
                <>⏳ Sedang Mendaftar...</>
              ) : (
                <>🚀 DAFTAR SEKARANG</>
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
            Daftar dengan Google
          </button>

          <p className={styles.bottomText}>
            Sudah punya akun? <Link href="/login">Masuk →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
