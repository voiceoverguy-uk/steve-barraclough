"use client";

import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Areas Covered", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d1b2a] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-[#ffce00] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#0d1b2a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-base leading-tight">Steve Barraclough</p>
                <p className="text-[#ffce00] text-sm font-medium leading-tight">Gas Engineers</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              A trusted father-and-son team based in Pontefract, serving West
              Yorkshire with reliable gas, heating and plumbing services.
            </p>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
                <Image
                  src="/images/gas-safe-logo.png"
                  alt="Gas Safe Registered"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-gray-300 text-xs font-medium">
                  Gas Safe · No. 99236
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
                <Image
                  src="/images/worcester-accredited-logo.jpg"
                  alt="Worcester Bosch Accredited Installer"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-gray-300 text-xs font-medium">
                  Worcester Bosch Accredited
                </span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-5 text-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#ffce00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-5 text-gray-200">
              Contact
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-xs mb-0.5">Telephone</p>
                <a
                  href="tel:07860141571"
                  className="text-white font-semibold text-sm hover:text-[#ffce00] transition-colors"
                >
                  07860 141571
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">Mobile</p>
                <a
                  href="tel:07503373239"
                  className="text-white font-semibold text-sm hover:text-[#ffce00] transition-colors"
                >
                  07503 373239
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">Location</p>
                <p className="text-gray-300 text-sm">Pontefract, West Yorkshire</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">Follow Us</p>
                <a
                  href="https://www.facebook.com/profile.php?id=61586439165592"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1877f2] hover:text-white transition-colors text-sm font-semibold"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Steve Barraclough Gas Engineers. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700 text-xs">·</span>
            <a href="/terms" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
              Terms &amp; Disclaimer
            </a>
            <span className="text-gray-700 text-xs">·</span>
            <p className="text-gray-600 text-xs">
              Gas Safe Reg. No. 99236
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
