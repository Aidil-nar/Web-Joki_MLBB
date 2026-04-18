import React from 'react';
import StepCard from '@/components/ui/StepCard';
import styles from './HowItWorks.module.css';

const STEPS = [
  {
    step: '01',
    icon: '🎯',
    title: 'Pilih Paket Rank',
    description: 'Tentukan rank asal & tujuan yang kamu inginkan. Solo Rank, Duo, atau Win Boost? Semua tersedia.',
  },
  {
    step: '02',
    icon: '📝',
    title: 'Isi Form & Bayar',
    description: 'Lengkapi data akun MLBB dan lakukan pembayaran. Kami terima DANA, GoPay, QRIS, Transfer Bank.',
  },
  {
    step: '03',
    icon: '🚀',
    title: 'Booster Mulai Proses',
    description: 'Booster profesional kami login dengan VPN + Offline Mode. Pantau progres via WhatsApp 24/7.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className={styles.bgAccent} />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Cara Order</span>
          <h2 className="section-title">3 Langkah Mudah</h2>
          <p className="section-subtitle">
            Proses order simpel, cepat, dan aman. Cukup 3 langkah dan rankmu langsung diproses.
          </p>
          <div className="glow-separator" />
        </div>

        <div className={styles.grid}>
          {STEPS.map((s, i) => (
            <StepCard
              key={s.step}
              step={s.step}
              icon={s.icon}
              title={s.title}
              description={s.description}
              isLast={i === STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
