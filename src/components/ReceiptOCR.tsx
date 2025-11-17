"use client";

import React, { useState } from 'react';

const ReceiptOCR: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<{ amount?: string; date?: string; store?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files?.[0] || null);
    setResult({});
  };

  const handleOCR = async () => {
    if (!image) return;
    setLoading(true);
    // TODO: Tesseract.js 또는 Cloud Vision API 연동 예정
    setTimeout(() => {
      setResult({ amount: '₩45,000', date: '2024-11-15', store: '스타벅스' });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-premium-card shadow-premium rounded-card p-8 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-display font-bold mb-6 text-premium-primary">영수증 OCR 처리</h2>
      <input type="file" accept="image/*" className="mb-6 px-4 py-3 border border-premium-border rounded-premium w-full bg-premium-bg focus:outline-none focus:ring-2 focus:ring-premium-primary" onChange={handleFileChange} />
      <button
        className="bg-premium-primary text-white py-3 px-6 rounded-premium font-semibold shadow-card transition hover:bg-premium-accent focus:outline-none focus:ring-2 focus:ring-premium-accent w-full mb-4"
        onClick={handleOCR}
        disabled={!image || loading}
      >
        {loading ? '처리 중...' : '영수증 정보 추출'}
      </button>
      {result.amount && (
        <div className="bg-premium-bg p-5 rounded-premium mt-4">
          <p>금액: <span className="font-bold text-green-600">{result.amount}</span></p>
          <p>일자: <span className="font-bold">{result.date}</span></p>
          <p>가맹점: <span className="font-bold">{result.store}</span></p>
        </div>
      )}
    </div>
  );
};

export default ReceiptOCR;
