'use client';

import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { AccountFormData, JokiServicePackage } from '@/types';
import styles from './ConfirmationModal.module.css';

interface Props {
  formData: AccountFormData;
  selectedPackage: JokiServicePackage;
  serviceTitle: string;
  paymentMethod: string;
  contactWa: string;
  onClose: () => void;
  onSuccessReturn?: () => void;
}

export default function ConfirmationModal({
  formData,
  selectedPackage,
  serviceTitle,
  paymentMethod,
  contactWa,
  onClose,
  onSuccessReturn
}: Props) {
  const [agreed, setAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleConfirm = () => {
    if (!agreed) return;
    setIsSuccess(true);
  };

  const handleFinish = () => {
    if (onSuccessReturn) onSuccessReturn();
    else onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      {isSuccess && (
        <Confetti 
          width={typeof window !== 'undefined' ? window.innerWidth : 1200}
          height={typeof window !== 'undefined' ? window.innerHeight : 800}
          recycle={false}
          numberOfPieces={400}
        />
      )}

      <div className={styles.modalContent}>
        {/* Floating Check Icon */}
        <div className={styles.iconWrapper}>
          <svg viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </div>

        {isSuccess ? (
          <div className={styles.successState}>
            <h3>Pesanan Berhasil Dibuat!</h3>
            <p>Terima kasih. Kami akan segera menghubungi nomor WA Anda ({contactWa}) untuk konfirmasi lebih lanjut.</p>
            <div className={styles.actions} style={{ marginTop: '24px' }}>
              <button className={styles.btnConfirm} onClick={handleFinish}>
                Kembali
              </button>
            </div>
          </div>
        ) : (
          <>
            <h2 className={styles.modalTitle}>Buat Pesanan</h2>
            <p className={styles.modalSubtitle}>Pastikan data akun Kamu dan produk yang Kamu pilih valid dan sesuai.</p>

            <div className={styles.summaryList}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Nickname</span>
                <span className={styles.summaryValue}>{formData.nickname || '-'}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>ID</span>
                <span className={styles.summaryValue}>
                  {formData.userId} {formData.serverId ? `(${formData.serverId})` : ''}
                </span>
              </div>
              
              {formData.loginVia && (
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Login Via</span>
                  <span className={styles.summaryValue}>{formData.loginVia}</span>
                </div>
              )}

              {formData.notes && (
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Catatan</span>
                  <span className={styles.summaryValue}>{formData.notes}</span>
                </div>
              )}

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Item / Package</span>
                <span className={styles.summaryValue}>{selectedPackage.name}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Product</span>
                <span className={styles.summaryValue}>{serviceTitle}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Payment</span>
                <span className={styles.summaryValue} style={{ textTransform: 'uppercase' }}>{paymentMethod}</span>
              </div>
            </div>

            <label className={styles.termsWrapper}>
              <input 
                type="checkbox" 
                checked={agreed} 
                onChange={(e) => setAgreed(e.target.checked)} 
              />
              <span className={styles.termsText}>
                Dengan mengklik <strong>Pesan Sekarang</strong>, kamu sudah menyetujui <strong>Syarat & Ketentuan</strong> yang berlaku
              </span>
            </label>

            <div className={styles.actions}>
              <button 
                className={styles.btnConfirm} 
                onClick={handleConfirm}
                disabled={!agreed}
              >
                Pesan Sekarang!
              </button>
              <button className={styles.btnCancel} onClick={onClose}>
                Batalkan
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
