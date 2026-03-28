import Image from "next/image";

const badges = [
  {
    icon: (
      <Image
        src="/images/gas-safe-logo.png"
        alt="Gas Safe Registered"
        width={40}
        height={40}
        className="w-10 h-10 object-contain"
      />
    ),
    title: "Gas Safe Registered",
    subtitle: "Register No. 99236",
    color: "text-[#003da5]",
    bg: "bg-blue-50",
    border: "border-blue-100",
    href: "https://www.gassaferegister.co.uk/checkbusiness?bid=eCaMSCA%252b3ZQbbh743Ww4Tg%253d%253d&cp=h0xJjWx9wPEbz9nwq0CLK3Z%252feHO0sVvxPBUwpX%252fMp8Y%253d",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Est. 1979",
    subtitle: "60+ years combined experience",
    color: "text-[#003da5]",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Free Quotes",
    subtitle: "No obligation estimates",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Pontefract & West Yorkshire",
    subtitle: "Local, reliable coverage",
    color: "text-[#ffce00]",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {badges.map((badge) => {
            const inner = (
              <>
                <div className={`flex-shrink-0 ${badge.color}`}>{badge.icon}</div>
                <div>
                  <p className="font-semibold text-[#0d1b2a] text-sm lg:text-base leading-snug">
                    {badge.title}
                  </p>
                  <p className="text-gray-500 text-xs lg:text-sm mt-0.5">
                    {badge.subtitle}
                  </p>
                </div>
              </>
            );
            const cls = `flex items-center gap-4 p-4 lg:p-5 rounded-2xl border ${badge.bg} ${badge.border} transition-transform duration-200 hover:-translate-y-0.5`;
            if ("href" in badge && badge.href) {
              return (
                <a
                  key={badge.title}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls + " cursor-pointer"}
                >
                  {inner}
                </a>
              );
            }
            return (
              <div key={badge.title} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
