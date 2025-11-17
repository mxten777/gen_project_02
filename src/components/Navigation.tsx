"use client";

import React from 'react';
import { useState } from 'react';
import { HomeIcon, DocumentTextIcon, ReceiptPercentIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';
import { BarChart2, FileText, Wallet, CalendarCheck, ShieldCheck } from 'lucide-react';

const navItems = [
  { label: '대시보드', href: '/', icon: <HomeIcon className="w-5 h-5 text-premium-primary" /> },
  { label: '거래 등록', href: '/sales', icon: <Wallet className="w-5 h-5 text-premium-primary" /> },
  { label: '비용 등록', href: '/expenses', icon: <BarChart2 className="w-5 h-5 text-premium-primary" /> },
  { label: '영수증 OCR', href: '/receipts', icon: <ReceiptPercentIcon className="w-5 h-5 text-premium-primary" /> },
  { label: '세금계산서', href: '/invoices', icon: <FileText className="w-5 h-5 text-premium-primary" /> },
  { label: '리마인더', href: '/reminders', icon: <BellIcon className="w-5 h-5 text-premium-primary" /> },
  { label: '보고서', href: '/report', icon: <DocumentTextIcon className="w-5 h-5 text-premium-primary" /> },
  { label: '관리자', href: '/admin', icon: <ShieldCheck className="w-5 h-5 text-premium-primary" /> },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* 모바일 오버레이 */}
      {open && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      
      {/* 모바일 토글 버튼 */}
      <button
        className="md:hidden fixed top-6 left-4 z-[60] bg-premium-primary text-white p-3 rounded-premium shadow-card transition-all duration-300 hover:bg-premium-accent active:scale-95 touch-manipulation"
        onClick={() => setOpen(!open)}
        aria-label="메뉴 열기"
      >
        <svg className={`w-6 h-6 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      <nav
        className={`h-screen w-72 sm:w-64 bg-premium-card border-r border-premium-border shadow-premium fixed top-0 left-0 flex flex-col z-50 transition-all duration-500 ease-in-out
          ${open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} md:translate-x-0 md:opacity-100 md:static md:flex md:w-64`}
        role="navigation"
        aria-label="주 내비게이션"
      >
        <div className="px-8 py-6 border-b border-premium-border">
          <span className="text-2xl font-display font-bold text-premium-primary tracking-tight">Vibe Finance Hub</span>
        </div>
        <ul className="flex-1 px-6 py-8 space-y-2" role="menu" aria-label="메뉴 목록">
          {navItems.map((item, index) => (
            <li key={item.href} className="animate-slide-up" style={{animationDelay: `${0.1 + index * 0.05}s`}}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-5 py-4 rounded-premium text-premium-text font-medium transition-all duration-300 hover:bg-premium-bg hover:text-premium-primary hover:translate-x-2 hover:shadow-card focus:bg-premium-bg focus:text-premium-primary focus:outline-none focus:ring-2 focus:ring-premium-accent group touch-manipulation min-h-[44px]"
                onClick={() => setOpen(false)}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.location.href = item.href; } }}
                aria-label={`${item.label} 페이지로 이동`}
              >
                {/* 프리미엄 아이콘 적용 */}
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="transition-all duration-300">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="px-8 py-6 border-t border-premium-border text-xs text-premium-muted">© 2025 Vibe Finance Hub</div>
      </nav>
    </>
  );
};

export default Navigation;
