import React, { useState } from "react";

export default function PricingTable() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Support Team",
      description: "Get up and running fast with streamlined email support.",
      price: { monthly: 25, annual: 20 },
      cta: "Buy now",
      features: [
        "Ticketing system",
        "Email",
        "Contact form and Web Widget",
        "Facebook and X",
        "Unified Agent Workspace across channels*",
        "Customer details and conversation history.",
        "Predefined responses with macros",
        "Custom business rules with triggers and automations",
        "Prebuilt analytic dashboards",
        "Prebuilt apps and integrations",
        "On-demand trainings and best practices",
        "Online support from the Reply System team"
      ],
      isPopular: false,
      isEnterprise: false,
      ctaStyle: "bg-[#7ED957] text-[#05444B] hover:bg-[#6bc24b]",
      priceSuffix: "per agent/month billed monthly"
    },
    {
      name: "Suite Team",
      description: "Automate service with multichannel support and AI.",
      price: { monthly: 69, annual: 55 },
      cta: "Buy now",
      features: [
        { text: "AI agents", badge: "FEATURED" },
        "Customer and internal knowledge base",
        "Google Analytics for help center",
        "Messaging with live chat capabilities",
        "Proactive messaging to customers",
        "Social messaging including Instagram, WhatsApp, Slack, and more",
        "Phone support with call routing",
        "Automated phone ticket creation",
        "Voicemail and call recording",
        "Text messaging**"
      ],
      isPopular: false,
      isEnterprise: false,
      ctaStyle: "bg-[#7ED957] text-[#05444B] hover:bg-[#6bc24b]",
      priceSuffix: "per agent/month billed monthly"
    },
    {
      name: "Suite Professional",
      description: "Optimize operations with data and customizations.",
      price: { monthly: 149, annual: 119 },
      cta: "Buy now",
      features: [
        "Live and custom analytics",
        "Skills-based routing",
        "Side conversations",
        "Customer satisfaction ratings & surveys",
        "Service level agreements (SLA)",
        "View and comment-only access with Light agents",
        "Multiple ticket forms",
        "Customer self-service portal",
        "Business hours",
        "Interactive voice response (IVR, phone trees)",
        "HIPAA enabled",
        "Data location options",
        "Multilingual support and content"
      ],
      isPopular: true,
      isEnterprise: false,
      ctaStyle: "bg-[#7ED957] text-[#05444B] hover:bg-[#6bc24b]",
      priceSuffix: "per agent/month billed monthly"
    },
    {
      name: "Suite Enterprise",
      description: "Adapt service safely with change management tools.",
      price: { monthly: 249, annual: 199 },
      cta: "Talk to Sales",
      features: [
        "Sandbox",
        "Custom agent roles",
        "Content blocks",
        "Audit logs",
        "Approval workflows",
        "Dynamic, contextual workspaces",
        "Extended queue size and wait times",
        "Up to 300 help centers",
        "Ticket queues to avoid agents cherry-picking",
        "Business rules analysis",
        "Visual data alerts"
      ],
      isPopular: false,
      isEnterprise: true,
      ctaStyle: "bg-[#05444B] text-white hover:bg-[#073C43]",
      priceSuffix: "Speak with our experts to customize a solution that fits your needs."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Toggle */}
        <div className="flex items-center justify-end gap-4 mb-8">
          <span className={`font-semibold ${billing === "monthly" ? "text-black" : "text-gray-400"}`}>Monthly</span>
          <button
            className={`relative w-12 h-6 rounded-full bg-gray-300 focus:outline-none transition-colors duration-200 ${billing === "annual" ? "bg-[#7ED957]" : ""}`}
            onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${billing === "annual" ? "translate-x-6" : ""}`}
            ></span>
          </button>
          <span className={`font-semibold ${billing === "annual" ? "text-black" : "text-gray-400"}`}>Annual</span>
          {billing === "annual" && (
            <span className="ml-2 bg-[#d6f5a6] text-[#3a4d1c] px-2 py-1 rounded text-xs font-bold">SAVE 20% WITH ANNUAL</span>
          )}
        </div>

        {/* Pricing Table */}
        <div className="grid md:grid-cols-4 gap-0 bg-white rounded-xl overflow-hidden border border-gray-200">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`flex flex-col h-full px-6 py-10 border-r border-gray-200 last:border-r-0 ${plan.isPopular ? "bg-[#f6f3e7] relative z-10" : "bg-white"}`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 left-0 w-full flex justify-center">
                  <span className="bg-[#05444B] text-white px-4 py-1 rounded-b-lg text-xs font-bold tracking-widest">MOST POPULAR</span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#05444B] mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-700 mb-4 min-h-[48px]">{plan.description}</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-3xl font-bold text-[#05444B]">${plan.price[billing]}</span>
                  <span className="text-xs text-gray-700">{plan.isEnterprise ? "" : "per agent/month billed monthly"}</span>
                </div>
                <button className={`w-full py-2 rounded font-semibold transition-colors mb-4 ${plan.ctaStyle}`}>{plan.cta}</button>
              </div>
              <ul className="text-sm text-[#05444B] space-y-3 mb-4">
                {plan.features.map((feature, i) => (
                  typeof feature === "string" ? (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#7ED957] text-lg">✓</span> {feature}
                    </li>
                  ) : (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#7ED957] text-lg">✓</span> {feature.text} {feature.badge && <span className="ml-2 bg-[#7ED957] text-[#05444B] px-2 py-0.5 rounded text-xs font-bold">{feature.badge}</span>}
                    </li>
                  )
                ))}
              </ul>
              {plan.isEnterprise && (
                <div className="text-xs text-gray-700 mb-2">{plan.priceSuffix}</div>
              )}
            </div>
          ))}
        </div>
        {/* See all features button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#7ED957] text-[#05444B] px-6 py-2 rounded-full font-semibold hover:bg-[#6bc24b] transition-colors text-sm">See all features</button>
        </div>
        {/* Footnotes */}
        <div className="text-xs text-gray-700 mt-4 flex flex-col gap-1">
          <span>*Additional channels available are on Support Team as add-ons.</span>
          <span>**Additional fees apply.</span>
        </div>
      </div>
    </section>
  );
} 