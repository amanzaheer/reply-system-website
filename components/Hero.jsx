import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-[#05444B] to-[#073C43] pt-32 pb-8 px-4 overflow-hidden">
        {/* Main content */}
        <div className="flex flex-col items-center z-10">
          {/* Headline */}
          <h1 className="text-center font-bold text-4xl md:text-5xl flex flex-wrap justify-center leading-tight mb-4">
            <span className="text-[#7ED957] mr-2 mb-2 md:mb-0">The Support Platform</span>
            <span className="text-white">That Builds Itself Around You</span>
          </h1>
          {/* Subheadline */}
          <p className="text-gray-200 text-base md:text-lg text-center mb-8 max-w-2xl font-normal">
            Custom-built help desks, tailored for your business — fully managed, fully yours.
          </p>
          {/* Input and button */}
          <div className="flex flex-col items-center w-full">
            <div className="flex w-full max-w-xl rounded-lg overflow-hidden shadow-xl mb-2 bg-white">
              <input
                type="text"
                placeholder="Enter Workspace SIGN IN"
                className="flex-1 px-4 py-3 text-gray-700 text-base outline-none bg-white rounded-l-lg"
                style={{ minWidth: 0 }}
              />
              <button className="bg-[#7ED957] text-[#05444B] font-bold px-6 py-3 text-base flex items-center gap-2 hover:bg-[#6bc24b] transition-colors rounded-r-lg">
                Try It Free <span className="text-lg">→</span>
              </button>
            </div>
            <div className="text-sm text-gray-200 mt-1">
              New to Reply system? <a href="#" className="underline text-white">Create workspace</a>
            </div>
          </div>
          {/* Trustpilot row */}
          <div className="flex items-center gap-2 mt-8 text-gray-200 text-sm font-medium">
            Excellent
            <span className="flex items-center ml-1">
              {/* 5 green stars */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#7ED957]" fill="currentColor" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" /></svg>
              ))}
            </span>
            3,000+ reviews
            <span className="ml-1 font-bold">Trustpilot</span>
          </div>
        </div>
        {/* Chat bubbles */}
        <div className="absolute right-10 top-36 flex flex-col gap-5 z-0">
          {/* Blue bubble 1 */}
          <div className="bg-[#05444B] bg-opacity-95 rounded-2xl shadow-xl px-6 py-4 w-80 border border-[#0A5A63]">
            <div className="flex items-center gap-2 mb-1">
              <Image src="/file.svg" alt="Logo" width={28} height={28} />
              <span className="text-white font-bold text-base">Reply System</span>
            </div>
            <div className="text-white/80 text-sm">Hi! Rihana How can help support in Reply system.</div>
          </div>
          {/* White bubble */}
          <div className="bg-white rounded-2xl shadow-xl px-6 py-4 w-80 border-4 border-white flex items-start gap-3">
            <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="Rihana" width={36} height={36} className="rounded-full" />
            <div>
              <div className="text-[#05444B] font-bold text-base">Rihana</div>
              <div className="text-gray-700 text-sm">We want changes in dashboard Menu bar text...</div>
            </div>
          </div>
          {/* Blue bubble 2 */}
          <div className="bg-[#05444B] bg-opacity-95 rounded-2xl shadow-xl px-6 py-4 w-80 border border-[#0A5A63]">
            <div className="flex items-center gap-2 mb-1">
              <Image src="/file.svg" alt="Logo" width={28} height={28} />
              <span className="text-white font-bold text-base">Reply System</span>
            </div>
            <div className="text-white/80 text-sm">Yes, We are fully support here.</div>
          </div>
        </div>
      </section>
      {/* Dashboard image below hero */}
      <div className="w-full flex justify-center -mt-32 z-20 relative">
        <div className="bg-white rounded-2xl shadow-2xl p-2 max-w-6xl w-full flex justify-center">
          <Image
            src="/img/d1.png"
            alt="Dashboard Preview"
            width={1200}
            height={600}
            className="rounded-xl w-full h-auto object-contain"
            style={{ maxHeight: '600px' }}
          />
        </div>
      </div>
    </>
  );
}