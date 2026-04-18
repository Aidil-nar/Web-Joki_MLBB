'use client';

import React from 'react';
import { Testimonial } from '@/types';
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`Rating ${rating} dari 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? styles.starFull : styles.starEmpty}>
          ★
        </span>
      ))}
    </div>
  );
}

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // Generate a deterministic color from name
  const hue = name.charCodeAt(0) * 17 % 360;

  return (
    <div
      className={styles.avatar}
      style={{
        background: `linear-gradient(135deg, hsl(${hue},60%,35%), hsl(${(hue + 40) % 360},70%,50%))`,
      }}
      aria-label={`Avatar ${name}`}
    >
      {initials}
    </div>
  );
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const formattedDate = new Date(testimonial.date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className={styles.card}>
      {/* Quote icon */}
      <div className={styles.quoteIcon}>&ldquo;</div>

      {/* Comment */}
      <p className={styles.comment}>{testimonial.comment}</p>

      {/* Stars */}
      <StarRating rating={testimonial.rating} />

      {/* Rank route */}
      <div className={styles.rankRoute}>
        <span className={styles.rankChip}>{testimonial.fromRank}</span>
        <span className={styles.rankArrow}>→</span>
        <span className={`${styles.rankChip} ${styles.rankChipTo}`}>{testimonial.toRank}</span>
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Author */}
      <div className={styles.author}>
        <AvatarPlaceholder name={testimonial.name} />
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{testimonial.name}</span>
          <span className={styles.authorDate}>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}
