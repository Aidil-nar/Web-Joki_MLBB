'use client';

import React from 'react';
import { AccountFormData } from '@/types';
import styles from './FormCards.module.css'; // I will share CSS between AccountForm and PackageSelector

interface Props {
  data: AccountFormData;
  onChange: (updates: Partial<AccountFormData>) => void;
  serviceCategory?: string;
}

export default function AccountForm({ data, onChange, serviceCategory }: Props) {
  const isGendong = serviceCategory === 'gendong';

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.numberIcon}>1</span>
        <h2 className={styles.title}>Masukkan Data Akun</h2>
      </div>
      
      <div className={styles.body}>
        <div className={styles.grid2}>
          
          {!isGendong && (
            <>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder="Email" 
                  value={data.email}
                  onChange={(e) => onChange({ email: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <input 
                  type="password" 
                  className={styles.input} 
                  placeholder="Password" 
                  value={data.password}
                  onChange={(e) => onChange({ password: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <select 
                  className={styles.input}
                  value={data.loginVia}
                  onChange={(e) => onChange({ loginVia: e.target.value as any })}
                >
                  <option value="" disabled>Login Via</option>
                  <option value="moonton">Moonton</option>
                  <option value="google">Google Play</option>
                  <option value="vk">VK</option>
                  <option value="facebook">Facebook</option>
                </select>
              </div>
            </>
          )}

          <div className={styles.inputGroupFull} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="User ID" 
              value={data.userId}
              onChange={(e) => onChange({ userId: e.target.value })}
            />
            <input 
              type="text" 
              className={styles.input} 
              placeholder="Server ID" 
              value={data.serverId}
              onChange={(e) => onChange({ serverId: e.target.value })}
            />
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="Nickname" 
              value={data.nickname}
              onChange={(e) => onChange({ nickname: e.target.value })}
            />
          </div>

          {!isGendong && (
            <div className={styles.inputGroupFull}>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="Request Hero Minimal 3" 
                value={data.requestHero}
                onChange={(e) => onChange({ requestHero: e.target.value })}
              />
            </div>
          )}

          <div className={styles.inputGroupFull}>
            <textarea 
              className={`${styles.input} ${styles.textarea}`} 
              placeholder="Catatan untuk Penjoki" 
              value={data.notes}
              onChange={(e) => onChange({ notes: e.target.value })}
            />
          </div>
        </div>

        <p className={styles.helperText}>
          <i>Please make sure you fill the correct account data</i>
        </p>
      </div>
    </div>
  );
}
