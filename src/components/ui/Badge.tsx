import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'forest' | 'ivory' | 'placeholder';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'forest',
  className = '',
}) => {
  const variantStyles = {
    forest: 'bg-forest-800 text-ivory-50 border border-forest-700/60',
    gold: 'bg-gold-500/15 text-gold-700 border border-gold-500/40',
    ivory: 'bg-ivory-200/80 text-charcoal-800 border border-ivory-300',
    placeholder: 'bg-amber-100 text-amber-900 border border-amber-300 text-xs tracking-wider uppercase',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium tracking-wide transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
