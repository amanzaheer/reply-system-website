import React, { useState } from 'react';

const testimonials = [
  {
    text: 'The customer support I received was outstanding. Every question was answered quickly, and I always felt supported. A great company that truly cares about its clients."',
    name: 'Sarah rhan',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: 'The customer support I received was outstanding. Every question was answered quickly, and I always felt supported. A great company that truly cares about its clients."',
    name: 'Vikash maiya',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    text: 'The customer support I received was outstanding. Every question was answered quickly, and I always felt supported. A great company that truly cares about its clients."',
    name: 'Vipin dev',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: 'The customer support I received was outstanding. Every question was answered quickly, and I always felt supported. A great company that truly cares about its clients."',
    name: 'Amit ds',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    text: 'The customer support I received was outstanding. Every question was answered quickly, and I always felt supported. A great company that truly cares about its clients."',
    name: 'Amit ds',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    text: 'The customer support I received was outstanding. Every question was answered quickly, and I always felt supported. A great company that truly cares about its clients."',
    name: 'Amit ds',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    text: 'The customer support I received was outstanding. Every question was answered quickly, and I always felt supported. A great company that truly cares about its clients."',
    name: 'Amit ds',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
];

const Star = () => (
  <svg className="w-5 h-5 text-[#FFD600] inline-block" fill="currentColor" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" /></svg>
);

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMoreThanFour = testimonials.length > 4;
  
  const prev = () => {
    setCurrentIndex((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  
  const next = () => {
    setCurrentIndex((c) => (c + 1) % testimonials.length);
  };

  return (
    <div className="bg-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#232B3A] mb-2">Testimonal</h2>
      <p className="text-center text-[#1D8DF1] text-lg mb-12">See what our happy Clients are sharing about us!</p>
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center relative">
        {hasMoreThanFour && (
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100 transition-all duration-300 z-10"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#232B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}
        
        {/* Desktop */}
        <div className="w-full hidden md:flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full transition-all duration-500 ease-in-out">
            {testimonials.slice(currentIndex, currentIndex + 4).map((t, idx) => (
              <div 
                key={`${currentIndex}-${idx}`} 
                className="bg-[#F7F6F6] rounded-2xl p-8 flex flex-col justify-between h-full min-h-[260px] shadow-sm transition-all duration-500 ease-in-out transform"
                style={{
                  animation: 'slideIn 0.5s ease-out'
                }}
              >
                <div className="text-[#232B3A] text-base mb-8 break-words">"{t.text}"</div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} />)}
                  </div>
                </div>
                <div className="text-[#232B3A] font-semibold text-sm mt-2 ml-12">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile */}
        <div className="w-full flex md:hidden justify-center">
          <div className="flex flex-col items-center w-full">
            <div 
              className="bg-[#F7F6F6] rounded-2xl p-8 flex flex-col justify-between h-full shadow-sm flex-shrink-0 min-w-[260px] max-w-xs mx-auto transition-all duration-500 ease-in-out transform"
              style={{
                animation: 'slideIn 0.5s ease-out'
              }}
            >
              <div className="text-[#232B3A] text-base mb-8 break-words">"{testimonials[currentIndex].text}"</div>
              <div className="flex items-center gap-3 mt-auto">
                <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} />)}
                </div>
              </div>
              <div className="text-[#232B3A] font-semibold text-sm mt-2 ml-12">{testimonials[currentIndex].name}</div>
            </div>
          </div>
        </div>
        
        {hasMoreThanFour && (
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100 transition-all duration-300 z-10"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#232B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
} 