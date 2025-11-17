"use client";

import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const data = [
  { month: '7월', sales: 1200000, expenses: 800000 },
  { month: '8월', sales: 1450000, expenses: 950000 },
  { month: '9월', sales: 1600000, expenses: 1100000 },
  { month: '10월', sales: 1800000, expenses: 1200000 },
  { month: '11월', sales: 2500000, expenses: 1400000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-premium-card border border-premium-border rounded-lg shadow-lg p-4 animate-fade-in">
        <div className="font-semibold text-premium-primary mb-2 flex items-center gap-2">
          <span className="text-premium-muted">{label}</span>
        </div>
        <div className="space-y-1">
          {payload.map((entry: any) => (
            <div key={entry.dataKey} className="flex items-center gap-2">
              {entry.dataKey === 'sales' ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span className="font-medium text-premium-text">{entry.name}:</span>
              <span className={`font-bold ${entry.dataKey === 'sales' ? 'text-green-600' : 'text-red-500'}`}>{entry.value.toLocaleString()}원</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const FinanceChart: React.FC = () => (
  <div className="bg-white rounded-lg shadow p-6 animate-fade-in">
    <h3 className="text-xl font-display font-semibold text-premium-primary mb-6">월별 매출/비용 추이</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#22c55e" name="매출" strokeWidth={3} dot={{ r: 5 }} isAnimationActive={true} animationDuration={1200} />
        <Line type="monotone" dataKey="expenses" stroke="#ef4444" name="비용" strokeWidth={3} dot={{ r: 5 }} isAnimationActive={true} animationDuration={1200} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default FinanceChart;
