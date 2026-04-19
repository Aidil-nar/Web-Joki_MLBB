'use client';

import React from 'react';
import { JokiServicePackage, formatRupiah } from '@/types';
import styles from './PaymentSelector.module.css';

// ─── Inline SVG Logos sesuai brand asli ───────────────────────────────────────

const LogoQRIS = () => (
  <svg viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="22">
    <rect x="2" y="2" width="56" height="56" rx="4" stroke="#000" strokeWidth="4" fill="none"/>
    <rect x="10" y="10" width="16" height="16" rx="1" fill="#000"/>
    <rect x="30" y="10" width="10" height="10" rx="1" fill="#000"/>
    <rect x="10" y="30" width="10" height="10" rx="1" fill="#000"/>
    <rect x="30" y="26" width="6" height="6" rx="1" fill="#000"/>
    <rect x="40" y="26" width="16" height="6" rx="1" fill="#000"/>
    <rect x="40" y="38" width="6" height="18" rx="1" fill="#000"/>
    <rect x="52" y="38" width="6" height="6" rx="1" fill="#000"/>
    <rect x="10" y="42" width="22" height="14" rx="1" fill="#000"/>
    <text x="68" y="28" fontSize="22" fontWeight="900" fontFamily="Arial Black,sans-serif" fill="#000" letterSpacing="-0.5">QRIS</text>
    <text x="68" y="46" fontSize="9" fontFamily="Arial,sans-serif" fill="#555" letterSpacing="0.5">QR Code Standar</text>
    <text x="68" y="57" fontSize="9" fontFamily="Arial,sans-serif" fill="#555" letterSpacing="0.5">Pembayaran Nasional</text>
  </svg>
);

const LogoDANA = () => (
  <svg viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg" width="88" height="28">
    {/* White background */}
    <rect width="160" height="50" rx="6" fill="#fff"/>
    {/* Blue circle */}
    <circle cx="26" cy="25" r="22" fill="#1B9EE6"/>
    {/* White wave/flag inside circle */}
    <path
      d="M14,21 Q17,16 22,19 Q27,22 30,17 Q33,22 36,19"
      stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
    />
    <path
      d="M14,27 Q17,22 22,25 Q27,28 30,23 Q33,28 36,25"
      stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* DANA text */}
    <text x="56" y="33" fontSize="22" fontWeight="900" fontFamily="Arial Rounded MT Bold,Arial Black,sans-serif" fill="#1B9EE6" letterSpacing="1">DANA</text>
  </svg>
);

const LogoOVO = () => (
  <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" width="72" height="24">
    <rect width="120" height="40" rx="6" fill="#4B2E8A"/>
    <text x="50%" y="28" textAnchor="middle" fontSize="24" fontWeight="900" fontFamily="Arial Black,sans-serif" fill="#FFF" letterSpacing="2">OVO</text>
  </svg>
);

const LogoGoPay = () => (
  <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" width="72" height="24">
    <rect width="120" height="40" rx="6" fill="#00AED6"/>
    <rect x="8" y="10" width="20" height="18" rx="3" fill="none" stroke="#FFF" strokeWidth="2"/>
    <circle cx="18" cy="20" r="2.5" fill="#FFF"/>
    <text x="35" y="28" fontSize="20" fontWeight="900" fontFamily="Arial Black,sans-serif" fill="#111" letterSpacing="-0.5">gopay</text>
  </svg>
);

const LogoBCA = () => (
  <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" width="72" height="24">
    <rect width="120" height="40" rx="6" fill="#fff"/>
    <circle cx="14" cy="15" r="5" fill="#0070C0"/>
    <rect x="11" y="20" width="6" height="8" rx="1" fill="#0070C0"/>
    <text x="28" y="28" fontSize="22" fontWeight="900" fontFamily="Arial Black,sans-serif" fill="#0070C0" letterSpacing="-0.5">BCA</text>
  </svg>
);

const LogoMandiri = () => (
  <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" width="90" height="24">
    <rect width="140" height="40" rx="6" fill="#fff"/>
    <path d="M8,12 Q18,4 28,12 Q38,20 48,12" stroke="#F5A800" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <text x="8" y="35" fontSize="18" fontWeight="900" fontFamily="Arial Black,sans-serif" fill="#003366" letterSpacing="-0.5">mandiri</text>
  </svg>
);

const LOGO_MAP: Record<string, React.ReactNode> = {
  qris:    <LogoQRIS />,
  dana:    <LogoDANA />,
  ovo:     <LogoOVO />,
  gopay:   <LogoGoPay />,
  bca:     <LogoBCA />,
  mandiri: <LogoMandiri />,
};

const PAYMENT_METHODS = [
  { value: 'qris',    label: 'QRIS',    group: 'E-Wallet' },
  { value: 'dana',    label: 'DANA',    group: 'E-Wallet' },
  { value: 'ovo',     label: 'OVO',     group: 'E-Wallet' },
  { value: 'gopay',   label: 'GoPay',   group: 'E-Wallet' },
  { value: 'bca',     label: 'BCA',     group: 'Virtual Account' },
  { value: 'mandiri', label: 'Mandiri', group: 'Virtual Account' },
];

interface PaymentSelectorProps {
  selectedPackage: JokiServicePackage | null;
  quantity: number;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

export default function PaymentSelector({ 
  selectedPackage, 
  quantity, 
  paymentMethod, 
  setPaymentMethod 
}: PaymentSelectorProps) {
  
  const displayPrice = selectedPackage 
    ? formatRupiah(selectedPackage.price * quantity)
    : 'Rp -';

  return (
    <div className={styles.paymentSectionWrapper}>
      <div className={styles.paymentStepHeader}>
        <div className={styles.paymentStepNumber}>4</div>
        <div className={styles.paymentStepTitle}>Pilih Pembayaran</div>
      </div>

      <div className={styles.paymentAccordion}>
        <div className={styles.paymentGroupHeader}>
          <div className={styles.paymentGroupRow}>
            <div className={styles.paymentGroupInfo}>
              <div className={styles.paymentGroupTitle}>Metode Pembayaran</div>
              <div className={styles.paymentGroupLogos}>
                {PAYMENT_METHODS.map((m) => (
                  <span key={m.value} className={styles.paymentGroupLogoBadge} style={{ padding: '2px 6px', background: '#fff', borderRadius: 4, display: 'inline-flex', alignItems: 'center' }}>
                    {LOGO_MAP[m.value]}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.paymentGroupPrice}>
              {displayPrice}
            </div>
          </div>
          <div className={styles.paymentRibbon}>BEST PRICE</div>
        </div>

        <div className={styles.paymentExpandedArea}>
          <div className={styles.paymentExpandedAreaTitle}>
            <span>E-Wallet & Virtual Account</span>
            <span>^</span>
          </div>
          <div className={styles.paymentGrid}>
            {PAYMENT_METHODS.map((pm) => (
              <label
                key={pm.value}
                className={`${styles.paymentCard} ${
                  paymentMethod === pm.value ? styles.paymentCardActive : ''
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={pm.value}
                  checked={paymentMethod === pm.value}
                  onChange={() => setPaymentMethod(pm.value)}
                  className={styles.radioHidden}
                />
                <div className={styles.paymentCardLogoWrapper}>
                  {LOGO_MAP[pm.value]}
                </div>
                <div className={styles.paymentCardPriceInside}>
                  {displayPrice}
                </div>
                <div className={styles.paymentCardBottom}>
                  Proses Otomatis
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
