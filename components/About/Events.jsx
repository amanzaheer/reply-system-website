import React from "react";
import Image from "next/image";

export default function Events() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#05444B] leading-tight">
              Let's <span className="text-[#7ED957]">meet up</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore upcoming events to connect, learn, and share with other Reply System customers. Join our community of support professionals and discover new ways to enhance your customer experience.
            </p>
            <button className="bg-[#7ED957] text-[#05444B] font-semibold px-8 py-3 rounded-lg hover:bg-[#6bc24b] transition-colors text-lg shadow-lg hover:shadow-xl">
              Join us
            </button>
          </div>
          
          {/* Right side - Events image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/about2.webp"
                alt="Reply System Events and Networking"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 