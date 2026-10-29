import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onBack?: () => void;
  label?: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onBack,
  label = 'Back',
  className = '',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onBack) {
      onBack();
    } else {
      void navigate(-1);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-3.5 py-2 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-forest-900 hover:text-forest-950 bg-white/80 hover:bg-white border border-ivory-300 hover:border-forest-700/40 rounded-xs transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 group cursor-pointer ${className}`}
      aria-label={label}
    >
      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-gold-700 group-hover:text-forest-900 shrink-0" />
      <span>{label}</span>
    </button>
  );
};
