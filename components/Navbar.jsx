import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solution", href: "/solution" },
    { name: "About us", href: "/about" },
    { name: "How it work", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" }
  ];
  
  return (
    <>
      <nav className="fixed left-1/2 top-4 md:top-8 -translate-x-1/2 z-50 bg-[#05444B] rounded-2xl shadow-xl max-w-7xl w-[95vw] md:w-[90vw] px-4 md:px-10 py-3 md:py-5 flex flex-col gap-2">
        {/* Main navbar */}
        <div className="flex items-center justify-between w-full">
          {/* Logo and brand */}
          <div className="flex items-center gap-2 md:gap-3">
            <Image
              src="/file.svg"
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8 md:w-9 md:h-9"
            />
            <span className="text-white text-lg md:text-xl font-bold">
              Reply <span className="text-[#7ED957]">system</span>
            </span>
          </div>
          
          {/* Center nav links - hidden on mobile */}
          <div className="hidden md:flex gap-8 ml-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white font-medium flex items-center gap-1 hover:text-[#7ED957] transition-colors text-base"
              >
                {item.name}{" "}
                <span className="text-[#7ED957] text-lg font-bold">+</span>
              </a>
            ))}
          </div>
          
          {/* Right buttons - hidden on mobile */}
          <div className="hidden md:flex gap-3">
            <button className="bg-white text-[#05444B] font-semibold px-5 py-2 rounded-md hover:bg-gray-100 shadow flex items-center gap-2 text-base transition-colors">
              Try It Free <span className="text-lg">→</span>
            </button>
            <button className="bg-[#7ED957] text-[#05444B] font-semibold px-8 py-2 rounded-md hover:bg-[#6bc24b] transition-colors">
              Sign in
            </button>
          </div>
          
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 ml-2 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
        
        {/* Mobile nav menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-start justify-end md:hidden">
            <div className="bg-white rounded-2xl shadow-2xl mt-20 mr-4 p-6 w-[85vw] max-w-sm flex flex-col gap-4 animate-slide-in">
              {/* Close icon */}
              <button
                className="self-end mb-2 text-[#05444B] text-3xl font-bold focus:outline-none hover:text-gray-600 transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
              
              {/* Navigation links */}
              <div className="flex flex-col gap-2 mt-2">
                {navLinks.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-[#05444B] font-medium flex items-center justify-between hover:bg-gray-50 text-base px-4 py-3 rounded-lg transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span>{item.name}</span>
                    <span className="text-[#7ED957] text-lg font-bold">+</span>
                  </a>
                ))}
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
                <button className="bg-[#7ED957] text-[#05444B] font-semibold px-4 py-3 rounded-lg hover:bg-[#6bc24b] transition-colors text-base w-full">
                  Sign in
                </button>
                <button className="bg-white text-[#05444B] font-semibold px-4 py-3 rounded-lg hover:bg-gray-50 shadow flex items-center justify-center gap-2 text-base w-full border border-[#05444B] transition-colors">
                  Try It Free <span className="text-lg">→</span>
                </button>
               
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
