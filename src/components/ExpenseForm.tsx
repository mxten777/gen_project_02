import React from 'react';

const ExpenseForm: React.FC = () => {
  return (
    <form className="bg-white shadow rounded p-6">
      <h2 className="text-xl font-bold mb-4">비용 등록</h2>
      <input type="date" className="mb-4 p-2 border rounded w-full" placeholder="거래일자" />
      <input type="number" className="mb-4 p-2 border rounded w-full" placeholder="금액" />
      <input type="text" className="mb-4 p-2 border rounded w-full" placeholder="카테고리" />
      <input type="file" className="mb-4 p-2 border rounded w-full" />
      <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded">등록</button>
    </form>
  );
};

export default ExpenseForm;
