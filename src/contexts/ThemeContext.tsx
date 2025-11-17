"use client";

import React, { createContext, useContext, useLayoutEffect, useState, useMemo } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('system');
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

  // 클라이언트 마운트 후에만 localStorage 값 설정
  useLayoutEffect(() => {
    setIsMounted(true);
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setTheme(savedTheme);
    setSystemTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }, []);

  // resolvedTheme을 계산된 값으로 처리
  const resolvedTheme = useMemo(() => {
    return theme === 'system' ? systemTheme : theme;
  }, [theme, systemTheme]);

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    
    // HTML 클래스 업데이트
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
    
    // 로컬 스토리지에 저장
    localStorage.setItem('theme', theme);
    
    // 시스템 테마 변경 감지
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newSystemTheme = mediaQuery.matches ? 'dark' : 'light';
      setSystemTheme(newSystemTheme);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, resolvedTheme]);

  // 클라이언트에서만 실제 테마 적용
  const contextValue = {
    theme: isMounted ? theme : 'light' as Theme,
    setTheme,
    resolvedTheme: isMounted ? resolvedTheme : 'light' as 'light' | 'dark'
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}