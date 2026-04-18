'use client';

import React from 'react';
import styles from './FormCards.module.css';
import descStyles from './ServiceDescription.module.css';

interface Props {
  serviceTitle: string;
}

const DESCRIPTIONS: Record<string, { content: string[]; perhatikan: string[]; estimasi: string[] }> = {
  default: {
    content: [
      'Orderan Joki di cek admin jam 08:00-23:59 WIB',
      '<strong>Kontak CS/Admin Joki ada di kanan bawah website ini</strong>',
      '',
      'Jasa Joki Rank Mobile Legend Eceran Auto Win Streak',
      '1) Lengkapi Data Joki dengan Teliti',
      '2) Pilih <strong>Paket</strong> Joki',
      '3) Pilih Metode Pembayaran',
      '4) Tulis nomor WhatsApp yg benar!',
      '5) Klik <strong>ORDER NOW</strong> &amp; lakukan Pembayaran',
      '6) Status orderan dapat dicek secara mandiri pada menu "Cek Transaksi" dengan No Invoice',
    ],
    perhatikan: [
      'Baca Pop Up/Informasi yang muncul saat tadi pertama kali klik produk ini',
      'Jangan lupa save nomor invoice nya ketika sudah order, status pengerjaan akun bisa dilihat dari sana juga',
      'Pastikan Akun Bisa Login / Cobain sendiri dulu Email dan Password nya biar ga ribet nantinya',
      'Matikan centang verify/verikasi akun di pengaturan ML',
      'Jika akun dilogin 3x selama proses joki berlangsung maka dianggap selesai dan uang hangus',
    ],
    estimasi: [
      '<strong>Estimasi Proses Jasa Joki Kita Usahakan Secepatnya (akan diinfokan oleh admin)</strong>',
      '',
      '<strong>Minimal 12 Jam - Maksimal 2x24 Jam</strong>',
      '<strong>Maksimal 3x24 Jam (Joki Long Mythic Honor/Glory)</strong>',
    ],
  },
};

export default function ServiceDescription({ serviceTitle }: Props) {
  const data = DESCRIPTIONS.default;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.numberIcon}>i</span>
        <h2 className={styles.title}>Deskripsi {serviceTitle}</h2>
      </div>
      <div className={styles.body}>
        {/* Main content */}
        <div className={descStyles.section}>
          {data.content.map((line, i) => (
            <p key={i} className={descStyles.line} dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }} />
          ))}
        </div>

        {/* Perhatikan */}
        <div className={descStyles.section}>
          <p className={descStyles.sectionTitle}>Perhatikan</p>
          {data.perhatikan.map((line, i) => (
            <p key={i} className={descStyles.warningLine}>-{line}</p>
          ))}
        </div>

        {/* Estimasi */}
        <div className={descStyles.section}>
          {data.estimasi.map((line, i) => (
            <p key={i} className={descStyles.line} dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }} />
          ))}
        </div>
      </div>
    </div>
  );
}
