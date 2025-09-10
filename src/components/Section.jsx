import React from 'react';
import { cn } from '../lib/utils';

export function Section({ className, children, ...props }) {
  return (
    <section className={cn("py-12 md:py-16", className)} {...props}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, className }) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-8 md:mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold gradient-text">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-600 dark:text-gray-300">{subtitle}</p>
      )}
    </div>
  );
}

