'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '@/utils/smoothScroll';

interface BackToTopButtonProps {
  showAfter?: number; // Show button after scrolling this many pixels
  className?: string;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  showAfter = 300,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        bg-stone-800 hover:bg-stone-700 
        text-white 
        w-12 h-12 
        rounded-full 
        shadow-lg hover:shadow-xl
        transition-all duration-300 
        flex items-center justify-center
        group
        ${className}
      `}
      aria-label="Back to top"
    >
      <ArrowUp 
        size={20} 
        className="transition-transform duration-300 group-hover:-translate-y-0.5" 
      />
    </button>
  );
};