'use client';

import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className, hover = true, glow = false, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-xl border border-[var(--color-border)]',
        'bg-[var(--color-surface)] backdrop-blur-sm',
        'transition-all duration-300',
        hover && 'hover:border-[var(--color-border-hover)] hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5',
        glow && 'brand-glow',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
