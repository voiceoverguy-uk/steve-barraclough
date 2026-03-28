"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Are you Gas Safe registered?",
    answer:
      "Yes, we are fully Gas Safe registered. Our registration number is 99236. You can verify this on the official Gas Safe Register website. We are legally qualified to carry out gas work on your home or property, and we take safety extremely seriously.",
  },
  {
    question: "Do you cover all of West Yorkshire?",
    answer:
      "Yes — while we're based in Pontefract, we cover a wide area across West Yorkshire including Wakefield, Castleford, Barnsley, Featherstone, Normanton, Knottingley, Huddersfield and many more. If you're unsure whether we cover your location, just give us a call and we'll let you know.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, we offer free, no-obligation quotes on all work. We'll assess the job, give you a clear and honest price, and there's no pressure to go ahead. We believe in transparent pricing — no hidden charges or surprise fees.",
  },
  {
    question: "Can you help with boiler repairs and servicing?",
    answer:
      "Yes, boiler repairs and servicing are a core part of what we do. Whether your boiler has broken down, is making unusual noises, losing pressure, or just needs its annual service to keep it running safely and efficiently — we can help. We work on most makes and models.",
  },
  {
    question: "Do you carry out general plumbing work as well?",
    answer:
      "Yes, alongside gas and heating work, we carry out general plumbing repairs including leak investigation and repair, tap replacement, pipework, radiator work, and unvented cylinder servicing. We're your one-stop-shop for all gas, heating and plumbing needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-[#ffce00]" />
            <span className="text-[#003da5] font-semibold text-sm uppercase tracking-wide">
              FAQ
            </span>
            <div className="h-0.5 w-8 bg-[#ffce00]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Got a question? We&apos;ve answered the most common ones below. If
            you don&apos;t see what you&apos;re looking for, just give us a call.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                openIndex === i
                  ? "border-[#003da5]/30 shadow-md shadow-[#003da5]/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left flex items-center justify-between gap-4 p-5 lg:p-6"
              >
                <span
                  className={`font-semibold text-sm lg:text-base ${
                    openIndex === i ? "text-[#003da5]" : "text-[#0d1b2a]"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openIndex === i
                      ? "bg-[#003da5] text-white rotate-180"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`faq-answer ${openIndex === i ? "open" : ""}`}
              >
                <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-gray-600 text-sm lg:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
