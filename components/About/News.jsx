import React from "react";
import Image from "next/image";

export default function News() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* News Banner */}
        <div className="bg-[#05444B] rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-bold">We're in the news sometimes.</h3>
          </div>
          <button className="bg-[#7ED957] text-[#05444B] font-semibold px-6 py-3 rounded-lg hover:bg-[#6bc24b] transition-colors text-lg shadow-lg hover:shadow-xl whitespace-nowrap">
            Check out our newsroom
          </button>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#05444B] leading-tight">
              This is a <span className="text-[#7ED957]">Reply System</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                It's true that Reply System was created to bring a sense of calm to the often chaotic world of customer service. It's also true that Reply System was born on a literal desk. Well, actually it was a door. And really, it was more of a kitchen table. A lot of coffee was spilled on it.
              </p>
              <p>
                From those humble beginnings, we've grown into a platform that helps thousands of businesses provide exceptional customer support, one conversation at a time.
              </p>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <div className=" rounded-2xl p-4">
              <div className="relative h-130 rounded-2xl overflow-hidden">
                <Image
                  src="/img/about3.webp"
                  alt="Reply System Origins - Wooden Table"
                  fill
                  className="object-cover"
                />
                {/* Overlay to simulate coffee stain effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 