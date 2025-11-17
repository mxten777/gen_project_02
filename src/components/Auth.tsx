import React from 'react';

const Auth: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">로그인</h1>
      {/* Firebase Auth 연동 예정 */}
      <form className="bg-white shadow rounded p-6 w-full max-w-sm">
        <input type="email" placeholder="이메일" className="mb-4 p-2 border rounded w-full" />
        <input type="password" placeholder="비밀번호" className="mb-4 p-2 border rounded w-full" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full">로그인</button>
      </form>
    </div>
  );
};

export default Auth;
