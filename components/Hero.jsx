import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions] = useState([
    "Customer Support",
    "Help Desk",
    "Ticket Management",
    "Live Chat",
    "Knowledge Base",
    "Email Support",
    "Phone Support",
    "FAQ Management",
    "Team Collaboration",
    "Analytics Dashboard"
  ]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowSuggestions(false);
    // Here you can add actual search functionality
    console.log("Searching for:", query);
  };

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().split(' ').some(word => word.startsWith(searchQuery.toLowerCase()))
  );

  // Debug log for suggestions
  console.log("Filtered Suggestions:", filteredSuggestions, "Show:", showSuggestions, "Query:", searchQuery);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-[#05444B] to-[#073C43] pt-32 pb-8 px-4">
        {/* Main content */}
        <div className="flex flex-col items-center z-10">
          {/* Headline */}
          <h1 className="text-center font-bold text-4xl md:text-5xl flex flex-wrap justify-center leading-tight mb-4">
            <span className="text-[#7ED957] mr-2 mb-2 md:mb-0">
              The Support Platform
            </span>
            <span className="text-white">That Builds Itself Around You</span>
          </h1>
          {/* Subheadline */}
          <p className="text-gray-200 text-base md:text-lg text-center mb-8 max-w-2xl font-normal">
            Custom-built help desks, tailored for your business — fully managed,
            fully yours.
          </p>
          {/* Input and button */}
          <div className="flex flex-col items-center w-full relative" ref={searchRef}>
            <div className="flex w-full max-w-xl rounded-lg overflow-hidden shadow-xl mb-2 bg-white relative">
              <input
                type="text"
                placeholder="Search for features, solutions..."
                className="flex-1 px-4 py-3 text-gray-700 text-base outline-none bg-white rounded-l-lg"
                style={{ minWidth: 0 }}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                autoComplete="off"
              />
              <button 
                className="bg-[#7ED957] text-[#05444B] font-bold px-6 py-3 text-base flex items-center gap-2 hover:bg-[#6bc24b] transition-colors rounded-r-lg"
                onClick={() => handleSearch(searchQuery)}
                type="button"
              >
                Search <span className="text-lg">→</span>
              </button>
            </div>
            {/* Search Suggestions */}
            {showSuggestions && searchQuery.length > 0 && (
              <div className="absolute top-15 left-1/2 transform -translate-x-1/2 w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto ">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                      onClick={() => handleSearch(suggestion)}
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-gray-700 font-medium text-sm">{suggestion}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500 text-sm italic">No suggestions found</div>
                )}
              </div>
            )}
            <div className="text-sm text-gray-200 mt-1">
              New to Reply system?{" "}
              <a href="#" className="underline text-white">
                Create workspace
              </a>
            </div>
          </div>
          {/* Trustpilot row */}
          <div className="flex items-center gap-2 mt-8 text-gray-200 text-sm font-medium">
            Excellent
            <span className="flex items-center ml-1">
              {/* 5 green stars */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[#7ED957]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" />
                </svg>
              ))}
            </span>
            3,000+ reviews
            <span className="ml-1 font-bold">Trustpilot</span>
          </div>
        </div>
      </section>
      {/* Dashboard image below hero */}
      <div className="w-full flex justify-center -mt-32 z-20 relative">
        <div className=" rounded-2xl  p-2 max-w-6xl w-full flex justify-center">
          <Image
            src="/img/d1.png"
            alt="Dashboard Preview"
            width={1200}
            height={600}
            className="rounded-xl w-full h-auto object-contain"
            style={{ maxHeight: "600px" }}
          />
        </div>
      </div>
    </>
  );
}
