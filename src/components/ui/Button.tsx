import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline-gold' | 'outline-forest' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  external = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none tracking-wide text-sm';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-forest-800 text-ivory-50 hover:bg-forest-900 border border-forest-800 shadow-sm active:translate-y-px',
    secondary:
      'bg-gold-500 text-forest-950 hover:bg-gold-600 border border-gold-500 font-semibold shadow-sm active:translate-y-px',
    'outline-gold':
      'bg-transparent text-gold-500 border border-gold-500 hover:bg-gold-500/10 active:translate-y-px',
    'outline-forest':
      'bg-transparent text-forest-800 border border-forest-800 hover:bg-forest-800 hover:text-ivory-50 active:translate-y-px',
    ghost:
      'bg-transparent text-forest-800 hover:bg-forest-800/5 underline-offset-4 hover:underline',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asLink && href) {
    if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
