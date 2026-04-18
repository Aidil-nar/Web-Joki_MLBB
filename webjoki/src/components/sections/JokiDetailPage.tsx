'use client';

import React, { useState } from 'react';
import { JokiService, JokiServicePackage, AccountFormData } from '@/types';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/ui/HeroBanner';
import AccountForm from '@/components/ui/AccountForm';
import PackageSelector from '@/components/ui/PackageSelector';
import QuantitySelector from '@/components/ui/QuantitySelector';
import ContactDetail from '@/components/ui/ContactDetail';
import ServiceDescription from '@/components/ui/ServiceDescription';
import OrderSidebar from '@/components/ui/OrderSidebar';
import RatingPanel from '@/components/ui/RatingPanel';
import McggCalculator from '@/components/ui/McggCalculator';
import styles from './JokiDetailPage.module.css';

interface Props {
  service: JokiService;
}

export default function JokiDetailPage({ service }: Props) {
  const [selectedPackage, setSelectedPackage] = useState<JokiServicePackage | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  const [formData, setFormData] = useState<AccountFormData>({
    email: '',
    password: '',
    loginVia: '',
    nickname: '',
    userId: '',
    serverId: '',
    requestHero: '',
    notes: '',
  });

  const [contactData, setContactData] = useState({
    email: '',
    whatsapp: '',
  });

  const handleFormChange = (data: Partial<AccountFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleContactChange = (data: Partial<{ email: string; whatsapp: string }>) => {
    setContactData((prev) => ({ ...prev, ...data }));
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Banner */}
        <HeroBanner service={service} />

        {/* Info Bar */}
        <div className={styles.infoBar}>
          <div className={`container ${styles.infoInner}`}>
            <div className={styles.infoLeft}>
              <h1 className={styles.productName}>{service.title}</h1>
              <span className={styles.brandName}>JOKIMLBB.ID</span>
            </div>
            <div className={styles.infoRight}>
              <div className={styles.badge}>⚡ Proses Cepat</div>
              <div className={styles.badgeDivider}>•</div>
              <div className={styles.badge}>💬 Layanan Chat 24/7</div>
              <div className={styles.badgeDivider}>•</div>
              <div className={styles.badge}>✅ Pembayaran Aman!</div>
            </div>
          </div>
        </div>

        {/* Main Grid: Left content, Right sidebar */}
        <div className={`container ${styles.layoutGrid}`}>
          
          <div className={styles.contentCol}>
            {/* Step 1: Account Data */}
            <AccountForm data={formData} onChange={handleFormChange} serviceCategory={service.category} />

            {/* Step 2: Choose Nominal / Package */}
            <PackageSelector 
              packages={service.packages} 
              selectedPackage={selectedPackage} 
              onSelect={setSelectedPackage} 
            />

            {/* MCGG Calculator (only for Magic Chess) */}
            {service.category === 'magic-chess' && <McggCalculator />}

            {/* Step 3: Quantity */}
            <QuantitySelector quantity={quantity} onChange={setQuantity} />

            {/* Step 5: Contact Detail */}
            <ContactDetail data={contactData} onChange={handleContactChange} />

            {/* Description / Info */}
            <ServiceDescription serviceTitle={service.title} />
          </div>

          <aside className={styles.sidebarCol}>
            <RatingPanel />
            <OrderSidebar selectedPackage={selectedPackage} quantity={quantity} />
          </aside>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
