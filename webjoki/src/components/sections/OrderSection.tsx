'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import { OrderFormData, FormState, JokiPackage, PaymentMethod } from '@/types';
import { JOKI_PACKAGES, SERVER_REGIONS, PAYMENT_METHODS } from '@/data/dummyData';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import styles from './OrderSection.module.css';

interface OrderSectionProps {
  preSelectedPackageId: string | null;
}

const INITIAL_DATA: OrderFormData = {
  nickname: '',
  userId: '',
  server: 'indonesia',
  selectedPackageId: '',
  notes: '',
  paymentMethod: 'dana',
};

export default function OrderSection({ preSelectedPackageId }: OrderSectionProps) {
  const [formState, setFormState] = useState<FormState>({
    data: INITIAL_DATA,
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  // Pre-fill when a package is selected from PricingSection
  useEffect(() => {
    if (preSelectedPackageId) {
      setFormState((prev) => ({
        ...prev,
        data: { ...prev.data, selectedPackageId: preSelectedPackageId },
        isSuccess: false,
      }));
    }
  }, [preSelectedPackageId]);

  const selectedPkg = JOKI_PACKAGES.find(
    (p) => p.id === formState.data.selectedPackageId
  );

  const updateField = <K extends keyof OrderFormData>(
    field: K,
    value: OrderFormData[K]
  ) => {
    setFormState((prev) => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      error: null,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate
    const d = formState.data;
    if (!d.nickname.trim()) return setFormState((s) => ({ ...s, error: 'Nickname MLBB wajib diisi' }));
    if (!d.userId.trim()) return setFormState((s) => ({ ...s, error: 'User ID wajib diisi' }));
    if (!d.selectedPackageId) return setFormState((s) => ({ ...s, error: 'Pilih paket joki terlebih dahulu' }));

    // Simulate submit
    setFormState((s) => ({ ...s, isLoading: true, error: null }));
    await new Promise((r) => setTimeout(r, 2000));
    setFormState((s) => ({ ...s, isLoading: false, isSuccess: true }));
  };

  const resetForm = () => {
    setFormState({ data: INITIAL_DATA, isLoading: false, isSuccess: false, error: null });
  };

  return (
    <section id="order" className={`section ${styles.section}`}>
      <div className={styles.diagonalBg} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <span className="section-label">Order Sekarang</span>
          <h2 className="section-title">Formulir Pemesanan</h2>
          <p className="section-subtitle">
            Lengkapi data di bawah. Proses dimulai segera setelah pembayaran dikonfirmasi.
          </p>
          <div className="glow-separator" />
        </div>

        {formState.isSuccess ? (
          /* ── Success State ── */
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✅</div>
            <h3 className={styles.successTitle}>Order Berhasil!</h3>
            <p className={styles.successDesc}>
              Terima kasih, <strong>{formState.data.nickname}</strong>! Order paket{' '}
              <strong>{selectedPkg?.name}</strong> telah kami terima.
              Tim booster akan mulai proses dalam 1×24 jam.
              Kami akan menghubungi via WhatsApp untuk update.
            </p>
            <button className="btn btn-primary" onClick={resetForm}>
              Buat Order Baru
            </button>
          </div>
        ) : (
          /* ── Form Layout ── */
          <form onSubmit={handleSubmit} className={styles.formGrid}>
            {/* Left — Form Fields */}
            <div className={styles.formCol}>
              {/* Error */}
              {formState.error && (
                <div className={styles.errorBox}>
                  <span>⚠️</span> {formState.error}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="nickname" className="form-label">Nickname MLBB *</label>
                <input
                  id="nickname"
                  type="text"
                  className="form-input"
                  placeholder="Contoh: ProPlayer123"
                  value={formState.data.nickname}
                  onChange={(e) => updateField('nickname', e.target.value)}
                  disabled={formState.isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="userId" className="form-label">ID Server / User ID *</label>
                <input
                  id="userId"
                  type="text"
                  className="form-input"
                  placeholder="Contoh: 123456789 (1234)"
                  value={formState.data.userId}
                  onChange={(e) => updateField('userId', e.target.value)}
                  disabled={formState.isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="server" className="form-label">Server Region</label>
                <select
                  id="server"
                  className="form-select"
                  value={formState.data.server}
                  onChange={(e) => updateField('server', e.target.value)}
                  disabled={formState.isLoading}
                >
                  {SERVER_REGIONS.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="package" className="form-label">Paket Joki *</label>
                <select
                  id="package"
                  className="form-select"
                  value={formState.data.selectedPackageId}
                  onChange={(e) => updateField('selectedPackageId', e.target.value)}
                  disabled={formState.isLoading}
                >
                  <option value="">— Pilih Paket —</option>
                  {JOKI_PACKAGES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {p.priceFormatted}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="notes" className="form-label">Catatan Tambahan</label>
                <textarea
                  id="notes"
                  className="form-textarea"
                  placeholder="Hero favorit, jam bermain, dll (opsional)"
                  value={formState.data.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                  disabled={formState.isLoading}
                />
              </div>

              {/* Payment Method */}
              <div className={styles.paymentSectionWrapper}>
                <div className={styles.paymentStepHeader}>
                  <div className={styles.paymentStepNumber}>4</div>
                  <div className={styles.paymentStepTitle}>Pilih Pembayaran</div>
                </div>

                <div className={styles.paymentAccordion}>
                  <div className={styles.paymentGroupHeader}>
                    <div className={styles.paymentGroupInfo}>
                      <div className={styles.paymentGroupTitle}>DANA OVO GOPAY QRIS BCA MANDIRI</div>
                      <div className={styles.paymentGroupLogos}>
                        {['DANA', 'OVO', 'GOPAY', 'QRIS', 'BCA', 'MANDIRI'].map((m) => (
                          <span key={m} className={styles.paymentGroupLogoBadge}>{m}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.paymentGroupPrice}>
                      {selectedPkg ? selectedPkg.priceFormatted : 'Rp -'}
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
                            formState.data.paymentMethod === pm.value ? styles.paymentCardActive : ''
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={pm.value}
                            checked={formState.data.paymentMethod === pm.value}
                            onChange={() => updateField('paymentMethod', pm.value as PaymentMethod)}
                            className={styles.radioHidden}
                            disabled={formState.isLoading}
                          />
                          <div className={styles.paymentCardTop}>
                            <span className={styles.paymentCardIcon}>{pm.icon}</span>
                            <span className={styles.paymentCardName}>{pm.label}</span>
                          </div>
                          <div className={styles.paymentCardPriceInside}>
                            {selectedPkg ? selectedPkg.priceFormatted : 'Rp -'}
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
            </div>

            {/* Right — Order Summary */}
            <div className={styles.summaryCol}>
              <div className={styles.summaryCard}>
                <h3 className={styles.summaryTitle}>📋 Ringkasan Order</h3>

                <div className={styles.summaryDivider} />

                {selectedPkg ? (
                  <>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Paket</span>
                      <span className={styles.summaryValue}>{selectedPkg.name}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Kategori</span>
                      <span className={styles.summaryValue} style={{ textTransform: 'capitalize' }}>
                        {selectedPkg.category === 'winboost' ? 'Win Boost' : selectedPkg.category + ' Rank'}
                      </span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Estimasi</span>
                      <span className={styles.summaryValue}>{selectedPkg.estimasi}</span>
                    </div>

                    <div className={styles.summaryDivider} />

                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Total</span>
                      <span className={styles.summaryPrice}>{selectedPkg.priceFormatted}</span>
                    </div>
                  </>
                ) : (
                  <p className={styles.summaryEmpty}>
                    Pilih paket joki untuk melihat ringkasan order.
                  </p>
                )}

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={formState.isLoading}
                >
                  {formState.isLoading ? (
                    <>
                      <LoadingSpinner size={18} color="#0A0C12" />
                      Memproses...
                    </>
                  ) : (
                    <>⚡ Konfirmasi &amp; Bayar</>
                  )}
                </button>

                <p className={styles.securityNote}>
                  🔒 Data akun kamu dienkripsi & aman
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
