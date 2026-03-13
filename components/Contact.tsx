"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate Resend email API here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-[#ffce00]" />
            <span className="text-[#003da5] font-semibold text-sm uppercase tracking-wide">
              Get In Touch
            </span>
            <div className="h-0.5 w-8 bg-[#ffce00]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Free quotes available. Call us today to discuss your boiler, heating
            or plumbing needs — or fill in the form and we&apos;ll get back to you
            promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone cards */}
            <div className="bg-[#0d1b2a] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#ffce00]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Us
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                The quickest way to get a quote or book a visit.
              </p>
              <a
                href="tel:07860141571"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors group mb-2"
              >
                <div className="w-8 h-8 bg-[#ffce00] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#0d1b2a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">07860 141571</p>
                  <p className="text-gray-400 text-xs">Steve Senior</p>
                </div>
              </a>
              <a
                href="tel:07503373239"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors"
              >
                <div className="w-8 h-8 bg-[#003da5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">07503 373239</p>
                  <p className="text-gray-400 text-xs">Steve Junior</p>
                </div>
              </a>
            </div>

            {/* Details */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#003da5]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#003da5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#0d1b2a] text-sm">Location</p>
                  <p className="text-gray-500 text-sm">Pontefract, West Yorkshire</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#003da5]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#003da5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#0d1b2a] text-sm">Gas Safe Registered</p>
                  <p className="text-gray-500 text-sm">No. 99236</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#003da5]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#003da5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#0d1b2a] text-sm">Response Time</p>
                  <p className="text-gray-500 text-sm">We aim to respond within a few hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#1877f2]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#0d1b2a] text-sm">Facebook</p>
                  <a
                    href="https://www.facebook.com/profile.php?id=61586439165592"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877f2] hover:underline text-sm"
                  >
                    Visit our Facebook page
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-10">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0d1b2a] mb-2">Message Sent!</h3>
                  <p className="text-gray-500">
                    Thanks for getting in touch. We&apos;ll get back to you as soon
                    as possible — usually within a few hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b2a] mb-1.5" htmlFor="name">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border-2 border-[#ffce00] rounded-xl px-4 py-3 text-sm text-[#0d1b2a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffce00]/40 focus:border-[#e6b800] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b2a] mb-1.5" htmlFor="phone">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="07860 141571"
                      className="w-full border-2 border-[#ffce00] rounded-xl px-4 py-3 text-sm text-[#0d1b2a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffce00]/40 focus:border-[#e6b800] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b2a] mb-1.5" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full border-2 border-[#ffce00] rounded-xl px-4 py-3 text-sm text-[#0d1b2a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffce00]/40 focus:border-[#e6b800] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d1b2a] mb-1.5" htmlFor="postcode">
                      Postcode <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      required
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="WF8 1AA"
                      className="w-full border-2 border-[#ffce00] rounded-xl px-4 py-3 text-sm text-[#0d1b2a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffce00]/40 focus:border-[#e6b800] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0d1b2a] mb-1.5" htmlFor="service">
                    Service Needed <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border-2 border-[#ffce00] rounded-xl px-4 py-3 text-sm text-[#0d1b2a] focus:outline-none focus:ring-2 focus:ring-[#ffce00]/40 focus:border-[#e6b800] transition-colors bg-white"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="boiler-installation">Boiler Installation</option>
                    <option value="boiler-service">Boiler Service</option>
                    <option value="boiler-repair">Boiler Repair</option>
                    <option value="plumbing-repair">Plumbing Repair</option>
                    <option value="gas-safety-check">Gas Safety Check</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0d1b2a] mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about what you need..."
                    className="w-full border-2 border-[#ffce00] rounded-xl px-4 py-3 text-sm text-[#0d1b2a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffce00]/40 focus:border-[#e6b800] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#003da5] hover:bg-[#002d7a] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#003da5]/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Send Enquiry
                </button>
                <p className="text-gray-400 text-xs text-center">
                  Free quotes available. No obligation. We&apos;ll respond as quickly as we can.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
