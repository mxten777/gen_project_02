"use client";

import React from 'react';

const PDFReport: React.FC = () => {
  const handleDownload = () => {
    // TODO: jsPDF 연동 및 실제 데이터 적용 예정
    alert('PDF 보고서 다운로드 기능은 추후 구현됩니다.');
  };

  return (
    <div className="min-h-screen bg-premium-bg pt-20 md:pt-6 md:pl-64 px-4">
      <div className="bg-premium-card shadow-premium rounded-card p-8 max-w-md mx-auto mt-10 animate-fade-in">
      <h2 className="text-2xl font-display font-bold mb-6 text-premium-primary animate-slide-up">월간 재무요약 보고서</h2>
      <div className="mb-6 space-y-3 animate-slide-up" style={{animationDelay: '0.1s'}}>
        <p className="transition-all duration-300 hover:scale-105">매출: <span className="font-bold text-green-600">₩12,450,000</span></p>
        <p className="transition-all duration-300 hover:scale-105">비용: <span className="font-bold text-red-500">₩8,320,000</span></p>
        <p className="transition-all duration-300 hover:scale-105">순이익: <span className="font-bold text-premium-primary">₩4,130,000</span></p>
      </div>
      <button
        className="bg-premium-primary text-white py-3 px-6 rounded-premium font-semibold shadow-card transition-all duration-300 hover:bg-premium-accent hover:scale-105 hover:shadow-premium active:scale-95 focus:outline-none focus:ring-2 focus:ring-premium-accent w-full animate-slide-up"
        style={{animationDelay: '0.2s'}}
        onClick={handleDownload}
      >
        PDF 다운로드
      </button>
      </div>
    </div>
  );
};

export default PDFReport;
