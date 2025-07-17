import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="pt-36 lg:pt-52 pb-16 bg-white relative overflow-hidden mx-3">
      {/* Curved gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-green-100 via-transparent to-transparent" 
           style={{
             background: 'radial-gradient(ellipse at bottom right, rgba(134, 239, 172, 0.3) 0%, rgba(134, 239, 172, 0.1) 40%, transparent 70%)'
           }}>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#05444B] leading-tight">
              This is <span className="text-[#7ED957]">Reply System</span>
            </h1>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                At Reply System we're on a mission to simplify customer support and make it easy for companies and customers to create meaningful connections. We show companies how to unlock the power of everyday customer interactions so they can make those experiences extraordinary.
              </p>
              <p>
                And you know what? This work is important, because we're all customers. We believe life is a little bit better when the customer experiences we all share are painless, frictionless, and more helpful.
              </p>
            </div>
          </div>
          
          {/* Right side - About image */}
          <div className="relative">
            <div className=" rounded-2xl p-1">
              <div className="bg-white rounded-2xl overflow-hidden">
                <Image
                  src="/img/about.webp"
                  alt="Reply System Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 