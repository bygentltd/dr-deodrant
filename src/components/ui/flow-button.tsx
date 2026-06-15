'use client';

import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface FlowButtonProps {
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;

  circleColor?: string;
  hoverTextColor?: string;
  defaultBgColor?: string;
  defaultTextColor?: string; 
  arrowClassName?: string;
}

export function FlowButton({
  text = "Modern Button",
  children,
  onClick,
  className = "",

  circleColor = "bg-[#203652]",
  hoverTextColor = "group-hover:text-white",
  defaultBgColor = "bg-transparent",
  defaultTextColor = "text-current", 
  arrowClassName = "",
}: FlowButtonProps) {
  return (
    <button
      onClick={onClick}
      // Added subtle shadow effects: hover:shadow-lg hover:shadow-current/20
      className={`group relative isolate flex items-center justify-center gap-1 overflow-hidden rounded-full px-8 py-3 text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-xl hover:shadow-lg hover:shadow-current/20 active:scale-95 ${defaultBgColor} ${defaultTextColor} ${className}`}
    >
      {/* Expanding Circle */}
      <span className="absolute inset-0 z-0 flex items-center justify-center">
        <span
          className={`h-4 w-4 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100 ${circleColor}`}
        />
      </span>

      {/* Left Arrow */}
      <ArrowRight
        className={`absolute left-[-25%] z-10 h-4 w-4 stroke-current transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 ${hoverTextColor} ${arrowClassName}`}
      />

      {/* Content */}
      <span
        className={`relative z-10 flex -translate-x-3 items-center gap-1 transition-all duration-[800ms] ease-out group-hover:translate-x-3 ${hoverTextColor}`}
      >
        {children ? children : text}
      </span>

      {/* Right Arrow */}
      <ArrowRight
        className={`absolute right-4 z-10 h-4 w-4 stroke-current transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] ${hoverTextColor} ${arrowClassName}`}
      />
    </button>
  );
}