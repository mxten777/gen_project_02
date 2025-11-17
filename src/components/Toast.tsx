"use client";

import React, { useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose?: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'info', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [onClose, duration]);

  const getIcon = () => {
    if (type === 'success') return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (type === 'error') return <XCircle className="w-5 h-5 text-red-500" />;
    return <CheckCircle className="w-5 h-5 text-premium-primary" />;
  };

  return (
    <div className={`fixed top-4 sm:top-8 right-4 sm:right-8 z-50 min-w-[240px] max-w-[calc(100vw-2rem)] px-4 sm:px-5 py-4 rounded-premium shadow-premium flex items-center gap-3 animate-fade-in bg-premium-card border border-premium-border ${type === 'success' ? 'border-green-500' : type === 'error' ? 'border-red-500' : 'border-premium-primary'}`} role="alert" aria-live="assertive">
      {getIcon()}
      <span className="font-medium text-premium-text">{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-auto text-premium-muted hover:text-premium-primary transition-colors" aria-label="닫기">
          <XCircle className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Toast;
