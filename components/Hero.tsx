"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1b2a]"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("/gas-ring-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Blue accent glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#003da5]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#ffce00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        {/* Gas Safe badge */}
        <div className="inline-flex items-center gap-2 bg-[#ffce00]/10 border border-[#ffce00]/30 rounded-full px-4 py-1.5 mb-6">
          <div className="w-2 h-2 bg-[#ffce00] rounded-full animate-pulse" />
          <span className="text-[#ffce00] text-sm font-medium">
            Gas Safe Registered · No. 99236
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Trusted Gas Safe Engineers
          <br />
          <span className="text-[#003da5]">in Pontefract</span>{" "}
          <span className="text-white/60">&</span>{" "}
          <span className="text-[#ffce00]">West Yorkshire</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Father-and-son team with over 20 years of experience in boiler
          installations, servicing, repairs, plumbing and heating services.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:07860141571"
            className="inline-flex items-center justify-center gap-3 bg-[#ffce00] hover:bg-[#e6b800] text-[#0d1b2a] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#ffce00]/25 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Request a Free Quote
          </a>
        </div>

        {/* Trust highlights */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            { label: "Gas Safe Registered" },
            { label: "Gas Safe No. 99236" },
            { label: "Worcester Bosch Accredited" },
            { label: "Father & Son Team" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <div className="w-1.5 h-1.5 bg-[#ffce00] rounded-full" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
