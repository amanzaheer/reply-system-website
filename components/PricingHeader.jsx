import React from "react";

export default function PricingHeader() {
  return (
    <section className="pt-48 pb-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Customer Service Suite */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#05444B] uppercase tracking-wide">
                Plans and Pricing
              </h3>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#05444B] leading-tight">
                Customer Service Suite Plans
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                The complete, AI-powered customer service solution with
                ticketing, live chat and messaging, help center, and voice. All
                plans drive efficiency with automations and AI agents, available
                24/7 to solve customer issues.
              </p>
            </div>
          </div>

          {/* Right side - Employee Service Suite */}
          <div className="space-y-4">
            <div className="flex items-center   gap-3 mb-4">
              <h2 className="text-xl font-bold text-[#05444B] uppercase tracking-wide">
                Employee Service Suite
              </h2>
              <span className="bg-[#7ED957] text-white px-3 py-1 rounded text-sm font-bold">
                NEW
              </span>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#05444B] font-semibold hover:text-[#7ED957] transition-colors border-b border-[#05444B] pb-1 hover:border-[#7ED957]"
            >
              See plans and pricing
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
