import React, { useState } from "react";
import Image from "next/image";

export default function Careers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const officeLocations = [
    {
      name: "Madison",
      image: "/img/about.webp",
      description: "Modern office space with city views"
    },
    {
      name: "Dublin",
      image: "/img/about.webp",
      description: "Cozy workspace with contemporary design"
    },
    {
      name: "San Francisco",
      image: "/img/about.webp",
      description: "Dynamic workspace with creative energy"
    },
    {
      name: "London",
      image: "/img/about.webp",
      description: "Warm communal kitchen and break area"
    },
    {
      name: "Copenhagen",
      image: "/img/about.webp",
      description: "Bright minimalist design workspace"
    },
    {
      name: "Melbourne",
      image: "/img/about.webp",
      description: "Modern collaborative meeting rooms"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === officeLocations.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? officeLocations.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#05444B] mb-4">
            We have job openings <span className="text-[#7ED957]">worldwide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore upcoming events to connect, learn, and share with other Reply System customers.
          </p>
          <button className="bg-[#7ED957] text-[#05444B] font-semibold px-8 py-3 rounded-lg hover:bg-[#6bc24b] transition-colors text-lg shadow-lg hover:shadow-xl">
            Explore all roles
          </button>
        </div>

        {/* Office Locations Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${(officeLocations.length / 3) * 100}%`
              }}
            >
              {officeLocations.map((office, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/3">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        src={office.image}
                        alt={`${office.name} Office`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-[#05444B]">{office.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{office.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#7ED957] hover:bg-[#7ED957] hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#7ED957] hover:bg-[#7ED957] hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 