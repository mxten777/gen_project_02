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
    <div className="bg-white shadow rounded p-6 max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">세금계산서 PDF 자동정리</h2>
      <input type="file" accept="application/pdf" className="mb-4 p-2 border rounded w-full" onChange={handleFileChange} />
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded mb-4 w-full"
        onClick={handleUpload}
        disabled={!file}
      >
        PDF 업로드 및 분류
      </button>
      {status && <div className="bg-gray-50 p-4 rounded mt-4 text-green-700">{status}</div>}
    </div>
  );
};

export default InvoiceUpload;
