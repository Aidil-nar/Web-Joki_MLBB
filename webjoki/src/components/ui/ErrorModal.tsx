'use client';

import React, { useEffect } from 'react';
import styles from './ErrorModal.module.css';

interface Props {
  message: string;
  onClose: () => void;
}

export default function ErrorModal({ message, onClose }: Props) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.modalOverlay} onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 99999 }}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Floating Cross/Warning Icon */}
        <div className={styles.iconWrapper}>
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </div>

        <h2 className={styles.modalTitle}>Validasi Gagal</h2>
        <p className={styles.modalMessage}>{message}</p>

        <div className={styles.actions}>
          <button className={styles.btnConfirm} onClick={onClose}>
            Mengerti
          </button>
        </div>
      </div>
    </div>
  );
}
