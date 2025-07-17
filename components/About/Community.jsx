import React from "react";
import Image from "next/image";

export default function Community() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Community image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/about1.webp"
                alt="Reply System Community Service"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#05444B] leading-tight">
              Be a force for <span className="text-[#7ED957]">good</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Where we work is a big part of how we work. Through our corporate social responsibility program and community initiatives, we invest globally in our communities and make customer support accessible to everyone.
            </p>
            <button className="bg-[#7ED957] text-[#05444B] font-semibold px-8 py-3 rounded-lg hover:bg-[#6bc24b] transition-colors text-lg shadow-lg hover:shadow-xl">
              Learn About Our Impact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 