import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  inverted?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  inverted = false,
  className = '',
}) => {
  return (
    <div
      className={`max-w-3xl mb-12 ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3 justify-start">
          {centered && <div className="h-px w-8 bg-gold-500/60" />}
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              inverted ? 'text-gold-400' : 'text-gold-600'
            }`}
          >
            {eyebrow}
          </span>
          <div className="h-px w-8 bg-gold-500/60" />
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight ${
          inverted ? 'text-ivory-50' : 'text-forest-950'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            inverted ? 'text-ivory-200/90' : 'text-charcoal-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
