'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/data/dummyData';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className={styles.bgAccent} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Pertanyaan Yang Sering Diajukan</h2>
          <p className="section-subtitle">
            Belum yakin? Temukan jawaban atas pertanyaan umum seputar layanan kami.
          </p>
          <div className="glow-separator" />
        </div>

        <div className={styles.accordion}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.chevron}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  className={styles.answer}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                >
                  <div className={styles.answerInner}>
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
