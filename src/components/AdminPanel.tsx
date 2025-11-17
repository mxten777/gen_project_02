"use client";

import React from 'react';

const AdminPanel: React.FC = () => {
  return (
    <div className="bg-premium-card shadow-premium rounded-card p-8 max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-display font-bold mb-6 text-premium-primary">관리자 패널</h2>
      <div className="space-y-6">
        <div className="border-b border-premium-border pb-6">
          <h3 className="font-semibold mb-3 text-premium-text">거래 승인 대기</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-premium-bg rounded-premium">
              <span className="text-premium-text">매출 - 컨설팅 서비스 (₩2,500,000)</span>
              <div className="space-x-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded-premium text-sm font-semibold shadow-card transition hover:bg-green-700">승인</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-premium text-sm font-semibold shadow-card transition hover:bg-red-600">거부</button>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-premium-bg rounded-premium">
              <span className="text-premium-text">비용 - 사무용품 구매 (₩450,000)</span>
              <div className="space-x-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded-premium text-sm font-semibold shadow-card transition hover:bg-green-700">승인</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-premium text-sm font-semibold shadow-card transition hover:bg-red-600">거부</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-premium-border pb-6">
          <h3 className="font-semibold mb-3 text-premium-text">사용자 관리</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-premium-bg rounded-premium">
              <span className="text-premium-text">김사용자 (user@company.com)</span>
              <select className="border border-premium-border rounded-premium px-3 py-2 text-sm bg-premium-card text-premium-text">
                <option value="user">사용자</option>
                <option value="admin">관리자</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-premium-text">시스템 설정</h3>
          <div className="space-y-3">
            <button className="bg-premium-primary text-white px-6 py-3 rounded-premium font-semibold shadow-card transition hover:bg-premium-accent w-full">데이터 백업</button>
            <button className="bg-premium-muted text-white px-6 py-3 rounded-premium font-semibold shadow-card transition hover:bg-premium-card w-full">시스템 로그 확인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;