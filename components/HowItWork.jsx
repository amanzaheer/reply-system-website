import React from 'react';

const steps = [
  {
    title: 'Step 1: Tell Us What You Need',
    desc: 'Sign up and let us know your business type, support process, and must-have features.',
  },
  {
    title: 'Step 2: We Build Your Workspace',
    desc: 'We craft a dedicated helpdesk — complete with ticketing, task management, priorities, and more — optimized to your needs.',
  },
  {
    title: 'Step 3: You Go Live',
    desc: 'Your support system is ready. Invite your team, onboard your customers, and start resolving with confidence.',
  },
  {
    title: 'Step 4: We Manage & Improve',
    desc: 'Need changes? New workflows? We’ll keep your workspace evolving as your business grows.',
  },
];

const avatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/men/44.jpg',
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
];

const DottedMesh = () => (
  <svg width="320" height="80" viewBox="0 0 320 80" fill="none" className="w-full max-w-xs md:max-w-sm">
    <defs>
      <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#7ED957" fillOpacity="0.3" />
      </pattern>
    </defs>
    <ellipse cx="160" cy="70" rx="150" ry="20" fill="url(#dots)" />
  </svg>
);

export default function HowItWork() {
  return (
    <section className="bg-white py-24 px-4 flex flex-col items-center">
      {/* Title & Subtitle */}
      <h2 className="text-5xl font-bold text-center text-[#232B3A] mb-2">How It work</h2>
      <p className="text-center text-[#3A4657] text-lg mb-14">We are fully support on Reply System</p>
      {/* Main content grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: Steps */}
        <div className="flex flex-col gap-8 bg-[#A7E770] p-6 rounded-[32px]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-[32px] px-8 min-h-[120px] flex flex-col justify-center shadow-sm"
              style={{
                background: 'radial-gradient(circle at 90% 50%, #b6f1a2 60%, #D9F9C7 100%)',
                boxShadow: '0 2px 12px 0 rgba(126,217,87,0.08)'
              }}
            >
              <div className="font-bold text-[#232B3A] text-lg mb-1 leading-tight">{step.title}</div>
              <div className="text-[#232B3A] text-base leading-snug opacity-90">{step.desc}</div>
            </div>
          ))}
        </div>
        {/* Right: Dedicated support card */}
        <div className="bg-[#0B6A6A] rounded-[32px] px-10 py-24 flex flex-col items-center relative overflow-hidden min-h-[480px] w-full">
          <div className="text-3xl font-bold text-white mb-6 text-center">Dedicated customer support</div>
          <div className="text-white text-lg text-center mb-10 max-w-md">
            A member of our support team will review your ticket and respond within [X] hours. If you need to add more details or files, simply reply to this message and it will be attached to your ticket.
          </div>
          <div className="flex justify-center w-full mb-12">
            <button className="bg-[#7ED957] text-[#05444B] font-bold px-7 py-2 rounded-md shadow-md hover:bg-[#6bc24b] transition-colors">Try It Free →</button>
          </div>
          {/* Mesh SVG and avatars */}
          <div className=" bottom-0 left-0 w-full flex flex-col items-center my-6  ">
            <DottedMesh />
            {/* Avatars in semi-circle, absolutely positioned for a true arc */}
            <div className="relative w-full ">
              <img src={avatars[0]} alt="User avatar" className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover absolute left-[8%] bottom-0" />
              <img src={avatars[1]} alt="User avatar" className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover absolute left-[32%] bottom-8" />
              <img src={avatars[2]} alt="User avatar" className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover absolute left-[58%] bottom-8" />
              <img src={avatars[3]} alt="User avatar" className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover absolute left-[82%] bottom-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 