import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    'Home',
    'Solution',
    'About us',
    'How it work',
    'Pricing',
  ];
  return (
    <>
      <nav className="fixed left-1/2 top-4 md:top-8 -translate-x-1/2 z-50 bg-[#05444B] rounded-2xl shadow-xl max-w-7xl w-[98vw] md:w-[90vw] px-3 md:px-10 py-3 md:py-4 flex flex-col gap-2">
        {/* Top right links */}
        <div className="flex flex-col md:flex-row md:justify-end text-xs text-white gap-2 md:gap-6 pr-0 md:pr-2 mb-1">
          <div className="flex flex-row gap-2 md:gap-6">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Contact us</a>
          </div>
          <button className="bg-[#7ED957] text-[#05444B] font-semibold px-3 py-1 rounded-md hover:bg-[#6bc24b] ml-0 md:ml-2 text-xs mt-1 md:mt-0">Sign in</button>
        </div>
        {/* Main navbar */}
        <div className="flex items-center justify-between w-full">
          {/* Logo and brand */}
          <div className="flex items-center gap-2 md:gap-3">
            <Image src="/file.svg" alt="Logo" width={32} height={32} className="w-8 h-8 md:w-9 md:h-9" />
            <span className="text-white text-lg md:text-xl font-bold">Reply <span className="text-[#7ED957]">system</span></span>
          </div>
          {/* Hamburger for mobile */}
          <button
            className={`md:hidden flex flex-col justify-center items-center ml-2 ${menuOpen ? 'invisible' : 'visible'}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          {/* Center nav links */}
          <div className="hidden md:flex gap-8 ml-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white font-medium flex items-center gap-1 hover:underline text-base"
              >
                {item} <span className="text-[#7ED957] text-lg font-bold">+</span>
              </a>
            ))}
          </div>
          {/* Right buttons */}
          <div className="hidden md:flex gap-3">
            <button className="bg-white text-[#05444B] font-semibold px-5 py-2 rounded-md hover:bg-gray-100 shadow flex items-center gap-2 text-base">
              Try It Free <span className="text-lg">→</span>
            </button>
            <button className="border border-white text-white font-semibold px-5 py-2 rounded-md hover:bg-white hover:text-[#05444B] transition-colors text-base">
              Schedule Demo
            </button>
          </div>
        </div>
        {/* Mobile nav menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-50 flex items-start justify-end">
            <div className="bg-white rounded-2xl shadow-2xl mt-4 mr-4 p-6 w-[90vw] max-w-xs flex flex-col gap-4 animate-fade-in">
              {/* Close icon */}
              <button
                className="self-end mb-2 text-[#05444B] text-2xl font-bold focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
              <div className="flex flex-col gap-3 mt-2">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[#05444B] font-medium flex items-center gap-1 hover:underline text-base px-2 py-2 rounded-md"
                  >
                    {item} <span className="text-[#7ED957] text-lg font-bold">+</span>
                  </a>
                ))}
              </div>
              <button className="bg-[#7ED957] text-[#05444B] font-semibold px-4 py-2 rounded-md hover:bg-[#6bc24b] w-full text-base mt-2">Sign in</button>
              <button className="bg-white text-[#05444B] font-semibold px-4 py-2 rounded-md hover:bg-gray-100 shadow flex items-center gap-2 text-base w-full border border-[#05444B] mt-2">
                Try It Free <span className="text-lg">→</span>
              </button>
              <button className="border border-[#05444B] text-[#05444B] font-semibold px-4 py-2 rounded-md hover:bg-[#05444B] hover:text-white transition-colors text-base w-full mt-2">
                Schedule Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}