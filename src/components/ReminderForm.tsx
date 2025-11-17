"use client";

import React, { useState } from 'react';

interface Reminder {
  id: number;
  type: string;
  date: string;
}

const initialReminders: Reminder[] = [
  { id: 1, type: '급여일', date: '2024-11-25' },
  { id: 2, type: '세금신고일', date: '2024-12-10' },
];

const ReminderForm: React.FC = () => {
  const [reminders, setReminders] = useState(initialReminders);
  const [type, setType] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !date) return;
    setReminders([...reminders, { id: reminders.length + 1, type, date }]);
    setType('');
    setDate('');
  };

  return (
    <div className="min-h-screen bg-premium-bg pt-20 md:pt-6 md:pl-64 px-4">
      <div className="bg-premium-card shadow-premium rounded-card p-8 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-display font-bold mb-6 text-premium-primary">마감 일정 등록/관리</h2>
      <form className="mb-6 flex gap-3" onSubmit={handleAdd}>
        <input
          type="text"
          className="border border-premium-border rounded-premium px-4 py-3 w-1/2 focus:outline-none focus:ring-2 focus:ring-premium-primary text-premium-text bg-premium-bg transition"
          placeholder="일정 종류 (예: 급여일)"
          value={type}
          onChange={e => setType(e.target.value)}
          required
        />
        <input
          type="date"
          className="border border-premium-border rounded-premium px-4 py-3 w-1/2 focus:outline-none focus:ring-2 focus:ring-premium-primary text-premium-text bg-premium-bg transition"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
        <button type="submit" className="bg-premium-primary text-white px-6 py-3 rounded-premium font-semibold shadow-card transition hover:bg-premium-accent focus:outline-none focus:ring-2 focus:ring-premium-accent">추가</button>
      </form>
      <ul className="divide-y divide-premium-border">
        {reminders.map(r => (
          <li key={r.id} className="py-3 flex justify-between items-center">
            <span className="font-medium text-premium-text">{r.type}</span>
            <span className="text-premium-muted">{r.date}</span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ReminderForm;
