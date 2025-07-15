import React from 'react';

const CheckIcon = () => (
  <span className="ml-auto flex items-center justify-center w-6 h-6 rounded-full bg-[#7ED957]">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8.5L7 11.5L12 5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

const PieChartSVG = () => (
  <svg viewBox="0 0 120 120" className="w-full h-48 object-contain mt-6">
    <circle cx="60" cy="60" r="50" fill="#F7F8FA" />
    <path d="M60 60 L60 10 A50 50 0 0 1 110 60 Z" fill="#7ED957" />
    <path d="M60 60 L110 60 A50 50 0 0 1 60 110 Z" fill="#0B3C3B" />
    <path d="M60 60 L60 110 A50 50 0 0 1 10 60 Z" fill="#FFEFE6" />
    <path d="M60 60 L10 60 A50 50 0 0 1 60 10 Z" fill="#232B3A" />
  </svg>
);

const BarChartSVG = () => (
  <svg viewBox="0 0 120 80" className="w-full h-48 object-contain mt-6">
    <rect x="15" y="40" width="10" height="30" fill="#7ED957" />
    <rect x="35" y="20" width="10" height="50" fill="#0B3C3B" />
    <rect x="55" y="30" width="10" height="40" fill="#7ED957" />
    <rect x="75" y="10" width="10" height="60" fill="#0B3C3B" />
    <rect x="95" y="25" width="10" height="45" fill="#7ED957" />
  </svg>
);

const cards = [
  {
    title: '100+ Project Support',
    subtitle: 'All support Apps',
    content: (
      <ul className="space-y-3 mt-6">
        <li className="flex items-center gap-3 text-base font-medium text-[#232B3A]">
          <img src="/img/app1.png" alt="App1" className="w-6 h-6" />
          <span>Testing near you</span>
          <CheckIcon />
        </li>
        <li className="flex items-center gap-3 text-base font-medium text-[#232B3A]">
          <img src="/img/app2.png" alt="App2" className="w-6 h-6" />
          <span>LogicCRM</span>
          <CheckIcon />
        </li>
        <li className="flex items-center gap-3 text-base font-medium text-[#232B3A]">
          <img src="/img/app3.png" alt="App3" className="w-6 h-6" />
          <span>VattiTech</span>
          <CheckIcon />
        </li>
        <li className="flex items-center gap-3 text-base font-medium text-[#232B3A]">
          <img src="/img/app4.png" alt="App4" className="w-6 h-6" />
          <span>One4CRM</span>
          <CheckIcon />
        </li>
      </ul>
    ),
    description: 'We are done these are Project with support system',
  },
  {
    title: 'Meet Growing Businesses',
    subtitle: 'Scalable plans',
    content: <PieChartSVG />,
    description: 'Intuitive dashboard for at-a-glance insights',
  },
  {
    title: 'Project reports',
    subtitle: "Today's reports",
    content: <BarChartSVG />,
    description: 'Automated data analysis and Reply system',
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center ">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#F7F8FA] rounded-2xl shadow-lg flex flex-col h-full overflow-hidden border border-[#F0F0F0] p-3 "
          >
            {/* Browser-like top bar */}
            <div className="bg-[#0B3C3B] h-7 rounded-t-2xl flex items-center px-4">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
              </div>
            </div>
            {/* Main content */}
            <div className="flex-1 bg-white flex flex-col px-6 pt-6 pb-2">
              <div className="text-xs text-gray-500 font-semibold mb-1">{card.title}</div>
              <div className="text-xl font-bold mb-2 text-[#232B3A]">{card.subtitle}</div>
              {card.content}
            </div>
            {/* Description */}
            <div className="px-6 py-4 text-[#232B3A] text-base font-medium text-left">
              {card.description}
            </div>
            {/* Button */}
            <div className="px-6 pb-6 mt-auto">
              <button className="bg-[#7ED957] text-[#05444B] font-bold px-6 py-2 rounded-lg  hover:bg-[#6bc24b] transition-colors">
                Try It Free <span className=" ml-1 text-lg">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 