"use client";

import React, { useState } from 'react';
import { CalendarIcon, TagIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Transaction {
  id: number;
  type: '매출' | '비용';
  date: string;
  amount: number;
  category: string;
}

const initialData: Transaction[] = [
  { id: 1, type: '매출', date: '2024-11-14', amount: 2500000, category: '컨설팅 서비스' },
  { id: 2, type: '비용', date: '2024-11-15', amount: -450000, category: '사무용품 구매' },
  { id: 3, type: '비용', date: '2024-11-13', amount: -1200000, category: '사무실 임대료' },
];

const TransactionTable: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'전체' | '매출' | '비용'>('전체');

  const filtered = initialData.filter(
    (t) =>
      (filter === '전체' || t.type === filter) &&
      (t.category.includes(search) || t.date.includes(search))
  );

  return (
    <div className="min-h-screen bg-premium-bg pt-20 md:pt-6 md:pl-64 px-4">
      <div className="bg-premium-card shadow-premium rounded-card p-6 max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-display font-bold mb-6 text-premium-primary">거래 내역</h2>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          className="border border-premium-border rounded-premium px-4 py-3 flex-1 bg-premium-bg text-premium-text focus:outline-none focus:ring-2 focus:ring-premium-primary"
          placeholder="카테고리 또는 날짜 검색"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="border border-premium-border rounded-premium px-4 py-3 bg-premium-bg text-premium-text focus:outline-none focus:ring-2 focus:ring-premium-primary"
          value={filter}
          onChange={e => setFilter(e.target.value as '전체' | '매출' | '비용')}
        >
          <option value="전체">전체</option>
          <option value="매출">매출</option>
          <option value="비용">비용</option>
        </select>
      </div>
        <table className="w-full text-left border border-premium-border rounded-premium overflow-hidden">
        <thead>
          <tr className="bg-premium-bg">
            <th className="p-2 flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-premium-muted" /> 날짜</th>
            <th className="p-2 flex items-center gap-1"><TagIcon className="w-4 h-4 text-premium-muted" /> 카테고리</th>
            <th className="p-2 flex items-center gap-1"><CurrencyDollarIcon className="w-4 h-4 text-premium-muted" /> 구분</th>
            <th className="p-2 flex items-center gap-1"><CurrencyDollarIcon className="w-4 h-4 text-premium-muted" /> 금액</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-4 text-premium-muted">검색 결과가 없습니다.</td>
            </tr>
          ) : (
            filtered.map(t => (
              <tr key={t.id}>
                <td className="p-2">{t.date}</td>
                <td className="p-2">{t.category}</td>
                <td className="p-2 flex items-center gap-1">
                  {t.type === '매출' ? <TrendingUp className="w-4 h-4 text-green-600" /> : <TrendingDown className="w-4 h-4 text-red-600" />}
                  {t.type}
                </td>
                <td className={`p-2 font-bold ${t.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>{t.amount.toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TransactionTable;
