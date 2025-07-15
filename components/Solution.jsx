import React from 'react';

export default function Solution() {
  return (
    <section className="bg-white py-20 mt-24  px-4 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#232B3A] mb-4">Solution</h2>
      {/* Subtitle */}
      <p className="text-center text-[#3A4657] text-lg md:text-xl mb-12 max-w-2xl">
        We’re not just another ticketing platform. We’re your <br />
        <span className="font-bold text-[#3A4657]">managed customer support partner.</span>
      </p>
      {/* Main content grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Feature list */}
        <div className="flex flex-col gap-4">
          {[
            {
              bold: 'Unlike typical support tools,',
              rest: 'we deliver:',
            },
            {
              bold: 'A dedicated workspace',
              rest: 'created just for your company',
              italic: true,
            },
            {
              bold: 'Fully managed setup and onboarding',
            },
            {
              bold: 'Continuous optimization',
              rest: 'based on your needs',
            },
            {
              bold: 'Customized workflows,',
              rest: 'priorities, and permissions',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <div className="w-4 h-4 mt-1 rounded-sm bg-[#7ED957] flex-shrink-0"></div>
              <div className="text-[#232B3A] text-base md:text-lg">
                <span className="font-bold">
                  {item.bold}
                </span>
                {item.italic ? (
                  <span className="italic"> {item.rest}</span>
                ) : item.rest ? (
                  <span> {item.rest}</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        {/* Right: Two stacked images and text */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row items-center w-full">
            <img
              src="/img/d2.png"
              alt="Child Tickets Example 2"
              className="rounded-tl-3xl shadow-xl mb-4 md:mb-0 md:-mr-56 h-48 w-auto max-w-[90vw] md:h-70"
            />
            <img
              src="/img/ticket.png"
              alt="Child Tickets Example"
              className="rounded-2xl shadow-xl w-full max-w-md h-56 md:h-100 md:w-full mb-6"
            />
          </div>
          <div className="text-center text-[#232B3A] text-sm md:text-base max-w-md mt-2">
            <span className="italic">
              Whether you’re running a SaaS product, an eCommerce brand, or a service business, we mold the support system around your customers and your operations — not the other way around.
            </span>
            <br />
            <span className="font-bold">Your business is unique. Your support should be too.</span>
          </div>
        </div>
      </div>
    </section>
  );
} 