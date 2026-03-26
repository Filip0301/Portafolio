'use client';

import React from 'react';
import { cn } from '../../lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = { sm: 'w-5 h-5', md: 'w-8 h-8', lg: 'w-12 h-12' };

export default function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  return (
    <div
      aria-label="Cargando..."
      role="status"
      className={cn(
        'rounded-full border-2 border-[var(--color-surface-3)] border-t-brand animate-spin',
        sizeMap[size],
        className
      )}
    />
  );
}
