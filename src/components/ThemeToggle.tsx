"use client";

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="relative p-2 rounded-premium bg-premium-surface border border-premium-border w-10 h-10">
        <div className="w-5 h-5 bg-premium-muted rounded animate-pulse"></div>
      </div>
    );
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'light') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    } else if (theme === 'dark') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }
  };

  const getLabel = () => {
    if (theme === 'light') return '라이트 모드';
    if (theme === 'dark') return '다크 모드';
    return '시스템 테마';
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-premium bg-premium-surface border border-premium-border text-premium-text transition-all duration-300 hover:bg-premium-bg hover:scale-105 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-premium-accent group"
      title={getLabel()}
      aria-label={`현재 ${getLabel()}, 클릭하여 테마 변경`}
    >
      <div className="transition-transform duration-300 group-hover:rotate-12">
        {getIcon()}
      </div>
      
      {/* 툴팁 */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-premium-primary text-white text-sm rounded-premium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {getLabel()}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-premium-primary"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;