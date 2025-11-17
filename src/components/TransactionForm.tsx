"use client";

import React, { useState } from 'react';
import { CalendarIcon, TagIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { PlusCircle, RotateCcw } from 'lucide-react';

interface TransactionFormProps {
  type: 'sales' | 'expenses';
}

const TransactionForm: React.FC<TransactionFormProps> = ({ type }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  // const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 거래 등록/수정/삭제 로직 연동 예정
    alert(`${type === 'sales' ? '매출' : '비용'} 등록 완료!`);
  };

  return (
    <div className="min-h-screen bg-premium-bg pt-20 md:pt-6 md:pl-64 px-4">
      <form className="bg-premium-card shadow-premium rounded-card p-4 sm:p-6 lg:p-8 max-w-md mx-auto mt-6 sm:mt-8 lg:mt-10 animate-fade-in" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-display font-bold mb-6 text-premium-primary animate-slide-up">{type === 'sales' ? '매출 등록' : '비용 등록'}</h2>
      <div className="space-y-5 animate-slide-up" style={{animationDelay: '0.1s'}}>
        <div className="relative">
          <input type="date" className="w-full pl-12 pr-4 py-3 border border-premium-border rounded-premium focus:outline-none focus:ring-2 focus:ring-premium-primary focus:border-transparent text-premium-text bg-premium-bg transition-all duration-300 hover:shadow-card" value={date} onChange={e => setDate(e.target.value)} placeholder="거래일자" required aria-label="거래일자" aria-describedby="date-help" />
          <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-premium-muted" aria-hidden="true" />
          <div id="date-help" className="sr-only">거래가 발생한 날짜를 선택해주세요</div>
        </div>
        <div className="relative">
          <input type="number" className="w-full pl-12 pr-4 py-3 border border-premium-border rounded-premium focus:outline-none focus:ring-2 focus:ring-premium-primary focus:border-transparent text-premium-text bg-premium-bg transition-all duration-300 hover:shadow-card" value={amount} onChange={e => setAmount(e.target.value)} placeholder="금액" required aria-label="거래 금액" aria-describedby="amount-help" />
          <CurrencyDollarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-premium-muted" aria-hidden="true" />
          <div id="amount-help" className="sr-only">거래 금액을 원 단위로 입력해주세요</div>
        </div>
        <div className="relative">
          <input type="text" className="w-full pl-12 pr-4 py-3 border border-premium-border rounded-premium focus:outline-none focus:ring-2 focus:ring-premium-primary focus:border-transparent text-premium-text bg-premium-bg transition-all duration-300 hover:shadow-card" value={category} onChange={e => setCategory(e.target.value)} placeholder="카테고리" required aria-label="거래 카테고리" aria-describedby="category-help" />
          <TagIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-premium-muted" aria-hidden="true" />
          <div id="category-help" className="sr-only">거래 유형이나 분류를 입력해주세요</div>
        </div>
      </div>
      {/* <input type="file" className="mb-4 p-2 border rounded w-full" onChange={e => setFile(e.target.files?.[0] || null)} /> */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
          <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-premium font-semibold shadow-card transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center justify-center gap-2 touch-manipulation min-h-[44px] flex-1">
            <PlusCircle className="w-5 h-5" /> 등록
          </button>
          <button type="button" className="bg-premium-bg text-premium-muted border border-premium-border py-3 px-6 rounded-premium font-semibold shadow-card transition hover:bg-premium-card focus:outline-none focus:ring-2 focus:ring-premium-primary flex items-center justify-center gap-2 touch-manipulation min-h-[44px] flex-1" onClick={() => { setDate(''); setAmount(''); setCategory(''); /* setFile(null); */ }}>
            <RotateCcw className="w-5 h-5" /> 초기화
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
