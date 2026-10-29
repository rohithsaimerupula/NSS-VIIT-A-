import React from 'react';
import { Info } from 'lucide-react';

interface PlaceholderNoticeProps {
  label?: string;
  className?: string;
}

export const PlaceholderNotice: React.FC<PlaceholderNoticeProps> = ({
  label = "Placeholder Archive Media — Official VIIT NSS Activity Photography Pending Compilation",
  className = "",
}) => {
  return (
    <div
      className={`max-w-full inline-flex items-center gap-1.5 px-2.5 py-1 bg-charcoal-900/80 backdrop-blur-sm text-ivory-200 text-[10px] tracking-wider uppercase border border-gold-500/30 rounded-none ${className}`}
      title={label}
    >
      <Info className="w-3 h-3 text-gold-400 shrink-0" />
      <span className="truncate min-w-0">{label}</span>
    </div>
  );
};
