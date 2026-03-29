export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Team photo */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/steve-barraclough-team.jpg"
                alt="Steve and his son – the father-and-son team behind Steve Barraclough Heating"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative stat cards */}
            <div className="absolute bottom-2 right-2 sm:-bottom-5 sm:-right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ffce00]/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-[#ffce00]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#0d1b2a] text-sm">60+ Years</p>
                <p className="text-gray-500 text-xs">Combined Experience</p>
              </div>
            </div>
            <div className="absolute top-2 left-2 sm:-top-5 sm:-left-5 bg-[#003da5] rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-sm">Gas Safe</p>
                <p className="text-white/70 text-xs">No. 99236</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-[#ffce00]" />
              <span className="text-[#003da5] font-semibold text-sm uppercase tracking-wide">
                About Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a] mb-6 leading-tight">
              A Family Business Built on{" "}
              <span className="text-[#003da5] whitespace-nowrap">Trust & Experience</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Steve Barraclough Heating is a trusted father-and-son team
              based in Pontefract, working across West Yorkshire. Established in
              1991, we bring{" "}
              <strong className="text-[#0d1b2a]">over 60 years of combined experience</strong>{" "}
              to every job — providing reliable gas, heating and plumbing services
              with honest advice, quality workmanship, and friendly local service.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              As a family business, we understand the importance of trust. Every
              job — whether a routine boiler service or a full central heating
              installation — receives the same dedication and care. We take pride
              in our work and our reputation in the local community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
