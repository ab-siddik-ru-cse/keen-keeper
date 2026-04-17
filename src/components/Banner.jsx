"use client"
import React, { useContext } from 'react';
import { Plus } from 'lucide-react';
import { AppContext } from '@/app/context/AppContext';

const Banner = () => {
  const { friends, interactions } = useContext(AppContext);
  const valueCount = (status) => {
    const statusValue = friends.filter(f => f.status === status);
    return statusValue.length;
  }
  const stats = [
    { label: 'Total Friends', value: friends.length },
    { label: 'On Track', value: valueCount('on-track') },
    { label: 'Need Attention', value: valueCount('overdue') },
    { label: 'Interactions This Month', value: interactions.length },
  ];

  return (
    <section className="w-full py-12 px-4 bg-[#F8FAFC]">
      {/* 1. Title & Subtitle */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-4 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <button className="btn bg-[#244D3F] hover:bg-emerald-950 text-white border-none mt-8 px-8 gap-2 normal-case rounded-md">
          <Plus size={18} />
          Add a Friend
        </button>
      </div>

      {/* 3. Summary Cards Grid */}
      <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]"
          >
            <span className="text-4xl font-bold text-slate-800 mb-2">
              {item.value}
            </span>
            <span className="text-slate-500 font-medium text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl px-4 mx-auto border-b border-gray-200 mt-16"></div>
    </section>
  );
};

export default Banner;