import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  label?: string;
}

export default function LoadingSpinner({
  size = 24,
  color = 'var(--color-accent)',
  label = 'Loading...',
}: LoadingSpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        style={{
          animation: 'spinnerRotate 0.75s linear infinite',
          display: 'block',
        }}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="50"
          strokeDashoffset="15"
          opacity="0.25"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
