"use client";

import React, { useState } from 'react';

const InvoiceUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
    setStatus('');
  };

  const handleUpload = async () => {
    if (!file) return;
    setStatus('분류 중...');
    // TODO: PDF 자동분류 및 Firestore 연동 예정
    setTimeout(() => {
      setStatus('세금계산서가 자동 분류되었습니다.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-premium-bg pt-20 md:pt-6 md:pl-64 px-4">
      <div className="bg-premium-card shadow-premium rounded-card p-6 max-w-md mx-auto mt-8">
      <h2 className="text-xl font-display font-bold mb-4 text-premium-primary">세금계산서 PDF 자동정리</h2>
      <input type="file" accept="application/pdf" className="mb-4 p-3 border border-premium-border rounded-premium w-full bg-premium-bg text-premium-text focus:outline-none focus:ring-2 focus:ring-premium-primary" onChange={handleFileChange} />
      <button
        className="bg-premium-primary text-white py-3 px-6 rounded-premium font-semibold shadow-card transition hover:bg-premium-accent focus:outline-none focus:ring-2 focus:ring-premium-accent mb-4 w-full disabled:opacity-50 touch-manipulation min-h-[44px]"
        onClick={handleUpload}
        disabled={!file}
      >
        PDF 업로드 및 분류
      </button>
      {status && <div className="bg-premium-bg p-4 rounded-premium mt-4 text-green-600 border border-green-200">{status}</div>}
      </div>
    </div>
  );
};

export default InvoiceUpload;
