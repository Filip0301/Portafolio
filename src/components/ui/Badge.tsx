'use client';

import React from 'react';
import { cn } from '../../lib/utils';

type BadgeVariant = 'default' | 'brand' | 'muted' | 'data' | 'fullstack';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:   'bg-[var(--color-surface-3)] text-[var(--color-text-muted)] border-[var(--color-border)]',
  brand:     'bg-brand/10 text-brand border-brand/30',
  muted:     'bg-[var(--color-surface-2)] text-[var(--color-text-subtle)] border-[var(--color-border)]',
  data:      'bg-purple-500/10 text-purple-300 border-purple-500/30',
  fullstack: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
};

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border',
        'transition-colors duration-150',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
