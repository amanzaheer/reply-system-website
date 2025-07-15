import React from 'react';

export default function AnyQueryButton() {
  return (
    <button
      className="fixed bottom-68 right-8 z-50 flex items-center gap-2 bg-[#7ED957] text-[#232B3A] font-semibold rounded-md shadow-lg px-6 py-3 text-base hover:brightness-95 transition-all"
      style={{ boxShadow: '0 4px 12px 0 rgba(44, 62, 80, 0.10)' }}
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-[#232B3A]"><rect width="24" height="24" rx="6" fill="none"/><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z" fill="#7ED957"/><path d="M6 8l6 4 6-4" stroke="#232B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="4" width="16" height="16" rx="2.5" stroke="#232B3A" strokeWidth="1.5"/></svg>
      <span>Any Query Message.</span>
    </button>
  );
} 