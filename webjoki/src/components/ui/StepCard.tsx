'use client';

import React from 'react';
import styles from './StepCard.module.css';

interface StepCardProps {
  step: string;      // "01", "02", "03"
  icon: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function StepCard({ step, icon, title, description, isLast }: StepCardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Step number watermark */}
        <div className={styles.stepNumber}>{step}</div>

        {/* Icon */}
        <div className={styles.iconWrap}>
          <span className={styles.icon}>{icon}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>

      {/* Connector arrow */}
      {!isLast && (
        <div className={styles.connector}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 16h16M20 10l6 6-6 6" stroke="url(#arrowGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F5C518"/>
                <stop offset="100%" stopColor="#3B82F6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
}
