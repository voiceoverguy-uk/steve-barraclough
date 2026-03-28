const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Gas Safe Registered",
    sub: "Fully qualified and certified engineers for safe gas work.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "60+ Years Combined Experience",
    sub: "Established in 1979 — decades of hands-on expertise across West Yorkshire.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Local Family Business",
    sub: "A trusted father-and-son team based in Pontefract.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fast Response Times",
    sub: "We aim to respond to enquiries within a few hours.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Free Quotes",
    sub: "Clear pricing with no hidden surprises.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 bg-[#0d1b2a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#003da5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffce00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-[#ffce00]" />
            <span className="text-[#ffce00] font-semibold text-sm uppercase tracking-wide">
              Why Choose Us
            </span>
            <div className="h-0.5 w-8 bg-[#ffce00]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Customers Trust{" "}
            <span className="text-[#003da5]">Steve Barraclough</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#ffce00]/30 transition-all duration-200 group flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-[#ffce00]/10 rounded-xl flex items-center justify-center text-[#ffce00] flex-shrink-0 group-hover:bg-[#ffce00] group-hover:text-[#0d1b2a] transition-all duration-200">
                {reason.icon}
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-snug">{reason.title}</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">{reason.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
