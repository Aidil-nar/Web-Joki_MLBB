'use client';

import React from 'react';
import styles from './FormCards.module.css';
import ctStyles from './ContactDetail.module.css';

interface ContactData {
  email: string;
  whatsapp: string;
}

interface Props {
  data: ContactData;
  onChange: (data: Partial<ContactData>) => void;
}

export default function ContactDetail({ data, onChange }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.numberIcon}>4</span>
        <h2 className={styles.title}>Detail Kontak</h2>
      </div>
      <div className={styles.body}>
        {/* Email */}
        <div className={ctStyles.field}>
          <label className={ctStyles.label}>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className={styles.input}
          />
        </div>

        {/* WhatsApp */}
        <div className={ctStyles.field}>
          <label className={ctStyles.label}>No. WhatsApp</label>
          <div className={ctStyles.waRow}>
            <div className={ctStyles.countryCode}>
              <span className={ctStyles.flag}>🇮🇩</span>
            </div>
            <input
              type="tel"
              placeholder="+62"
              value={data.whatsapp}
              onChange={(e) => onChange({ whatsapp: e.target.value })}
              className={styles.input}
            />
          </div>
          <p className={ctStyles.hint}>
            **Nomor ini akan dihubungi jika terjadi masalah
          </p>
        </div>

        {/* Info callout */}
        <div className={ctStyles.callout}>
          <span className={ctStyles.calloutIcon}>ℹ️</span>
          <span>Jika ada kendala, kami akan menghubungi nomor WA kamu diatas</span>
        </div>
      </div>
    </div>
  );
}
