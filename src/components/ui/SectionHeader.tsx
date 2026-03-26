'use client';

import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {number && (
        <span className="font-mono text-sm text-brand font-medium tracking-widest uppercase mb-2 block">
          {number}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--color-text)] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-3 text-base text-[var(--color-text-muted)] max-w-xl leading-relaxed",
          centered && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
