'use client';

import React from 'react';
import { RankTier, RANK_ICONS, RANK_GRADIENTS } from '@/types';

interface RankBadgeProps {
  rank: RankTier;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const SIZES = {
  sm: { padding: '4px 10px', fontSize: '0.72rem', iconSize: '14px', gap: '4px' },
  md: { padding: '6px 14px', fontSize: '0.82rem', iconSize: '16px', gap: '6px' },
  lg: { padding: '8px 18px', fontSize: '0.95rem', iconSize: '20px', gap: '8px' },
};

export default function RankBadge({
  rank,
  size = 'md',
  showLabel = true,
}: RankBadgeProps) {
  const s = SIZES[size];
  const gradient = RANK_GRADIENTS[rank];
  const icon = RANK_ICONS[rank];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: s.gap,
        padding: s.padding,
        borderRadius: '999px',
        background: gradient,
        fontSize: s.fontSize,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: '#fff',
        whiteSpace: 'nowrap',
        boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
        textShadow: '0 1px 3px rgba(0,0,0,0.5)',
      }}
    >
      <span style={{ fontSize: s.iconSize, lineHeight: 1 }}>{icon}</span>
      {showLabel && <span>{rank}</span>}
    </span>
  );
}
