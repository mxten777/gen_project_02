
"use client";

import React, { useState } from 'react';
import FinanceChart from './FinanceChart';
import ThemeToggle from './ThemeToggle';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { FileText, PlusCircle } from 'lucide-react';
import Toast from './Toast';

const Dashboard: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <div className="min-h-screen bg-premium-bg text-premium-text md:pl-64">
      {/* Header */}
      <header className="bg-premium-card shadow-premium border-b border-premium-border animate-fade-in sticky top-0 z-30 backdrop-blur-lg bg-premium-card/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 pl-20 md:pl-6">
          <div className="animate-slide-up">
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-display font-bold text-premium-primary tracking-tight">Vibe Finance Hub</h1>
            <p className="text-xs sm:text-base lg:text-lg text-premium-muted mt-1 sm:mt-2">데이터로 회계를 단순하게, 재무를 자동으로.</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 animate-slide-up w-full sm:w-auto justify-end" style={{animationDelay: '0.2s'}}>
            <ThemeToggle />
            <button className="bg-premium-primary text-white px-3 sm:px-4 lg:px-5 py-2 sm:py-3 rounded-premium shadow-card font-semibold transition-all duration-300 hover:bg-premium-accent hover:scale-105 hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-premium-accent active:scale-95 touch-manipulation min-h-[44px] text-sm sm:text-base" onClick={() => setShowToast(true)} aria-label="새 거래 등록" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setShowToast(true); } }}>
              <span className="hidden sm:inline">거래 등록</span>
              <PlusCircle className="w-4 h-4 sm:hidden" />
            </button>
            <button className="bg-premium-card text-premium-primary border border-premium-border px-3 sm:px-4 lg:px-5 py-2 sm:py-3 rounded-premium shadow-card font-semibold transition-all duration-300 hover:bg-premium-bg hover:scale-105 hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-premium-primary active:scale-95 touch-manipulation min-h-[44px] text-sm sm:text-base" aria-label="보고서 보기" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); } }}>
              <span className="hidden sm:inline">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> 보고서
              </span>
              <FileText className="w-4 h-4 sm:hidden" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-10" role="main" aria-label="대시보드 메인 콘텐츠">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10 lg:grid-auto-rows-[minmax(180px,auto)] lg:items-start">
          {/* 총 매출 카드 */}
          <div className="bg-premium-card rounded-card shadow-premium p-4 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-premium-lg animate-slide-up cursor-pointer touch-manipulation" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-premium-muted transition-colors duration-300">총 매출</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600 mt-1 sm:mt-2 transition-all duration-300">₩12,450,000</p>
              </div>
              <div className="p-3 sm:p-4 bg-green-100 rounded-full transition-all duration-300 hover:bg-green-200 hover:scale-110">
                <ArrowTrendingUpIcon className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
              </div>
            </div>
          </div>
          {/* 총 비용 카드 */}
          <div className="bg-premium-card rounded-card shadow-premium p-4 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-premium-lg animate-slide-up cursor-pointer touch-manipulation" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-premium-muted transition-colors duration-300">총 비용</p>
                <p className="text-2xl sm:text-3xl font-bold text-red-500 mt-1 sm:mt-2 transition-all duration-300">₩8,320,000</p>
              </div>
              <div className="p-3 sm:p-4 bg-red-100 rounded-full transition-all duration-300 hover:bg-red-200 hover:scale-110">
                <ArrowTrendingDownIcon className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" />
              </div>
            </div>
          </div>
          {/* 순이익 카드 */}
          <div className="bg-premium-card rounded-card shadow-premium p-4 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-premium-lg animate-slide-up cursor-pointer touch-manipulation" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-premium-muted transition-colors duration-300">순이익</p>
                <p className="text-2xl sm:text-3xl font-bold text-premium-primary mt-1 sm:mt-2 transition-all duration-300">₩4,130,000</p>
              </div>
              <div className="p-3 sm:p-4 bg-premium-bg rounded-full transition-all duration-300 hover:bg-premium-border hover:scale-110">
                <CurrencyDollarIcon className="w-6 h-6 sm:w-7 sm:h-7 text-premium-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Chart & Table Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <FinanceChart />

          <div className="bg-premium-card rounded-card shadow-card p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-premium-primary mb-6">최근 거래 내역</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-premium-border">
                <div>
                  <p className="font-medium text-premium-text">사무용품 구매</p>
                  <p className="text-sm text-premium-muted">2024-11-15</p>
                </div>
                <p className="text-red-500 font-semibold">-₩450,000</p>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-premium-border">
                <div>
                  <p className="font-medium text-premium-text">컨설팅 서비스</p>
                  <p className="text-sm text-premium-muted">2024-11-14</p>
                </div>
                <p className="text-green-600 font-semibold">+₩2,500,000</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <p className="font-medium text-premium-text">사무실 임대료</p>
                  <p className="text-sm text-premium-muted">2024-11-13</p>
                </div>
                <p className="text-red-500 font-semibold">-₩1,200,000</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showToast && (
        <Toast message="거래 등록이 완료되었습니다!" type="success" onClose={() => setShowToast(false)} />
      )}
    </div>
  );
};

export default Dashboard;
