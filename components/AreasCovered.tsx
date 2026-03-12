const areas = [
  "Pontefract",
  "Castleford",
  "Wakefield",
  "Featherstone",
  "Normanton",
  "Knottingley",
  "Leeds",
  "Barnsley",
  "Huddersfield",
  "Dewsbury",
  "Hemsworth",
  "South Elmsall",
  "Ossett",
  "Batley",
  "Morley",
  "Surrounding areas",
];

export default function AreasCovered() {
  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-[#ffce00]" />
              <span className="text-[#003da5] font-semibold text-sm uppercase tracking-wide">
                Areas Covered
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a] mb-6 leading-tight">
              Serving Pontefract &{" "}
              <span className="text-[#003da5]">Across West Yorkshire</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Based in Pontefract, we cover a wide area across West Yorkshire.
              Whether you&apos;re in a nearby town or a little further afield, get in
              touch and we&apos;ll let you know if we can help — most of the time,
              we can.
            </p>

            {/* Area tags */}
            <div className="flex flex-wrap gap-2.5">
              {areas.map((area) => (
                <span
                  key={area}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    area === "Pontefract"
                      ? "bg-[#003da5] text-white"
                      : area === "Surrounding areas"
                      ? "bg-[#ffce00]/20 text-[#0d1b2a] border border-[#ffce00]/50"
                      : "bg-white text-[#0d1b2a] border border-gray-200 hover:border-[#003da5]/30 hover:bg-blue-50"
                  }`}
                >
                  <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {area}
                </span>
              ))}
            </div>

            <p className="text-gray-500 text-sm mt-6">
              Not sure if we cover your area?{" "}
              <a href="tel:01977123456" className="text-[#003da5] font-medium hover:underline">
                Give us a call
              </a>{" "}
              and we&apos;ll be happy to help.
            </p>
          </div>

          {/* Map placeholder */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3] bg-gradient-to-br from-[#e8f0fe] to-[#d1e1ff] flex items-center justify-center relative">
              {/* Stylised map placeholder */}
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[#003da5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#003da5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <p className="text-[#003da5] font-bold text-lg mb-1">West Yorkshire Coverage</p>
                <p className="text-gray-500 text-sm mb-4">
                  Google Map coming soon
                </p>
                <div className="inline-flex items-center gap-2 bg-[#003da5] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-[#ffce00] rounded-full" />
                  Pontefract & surrounding areas
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#003da5] rounded-full opacity-40" />
              <div className="absolute top-8 left-8 w-2 h-2 bg-[#ffce00] rounded-full opacity-60" />
              <div className="absolute bottom-6 right-8 w-4 h-4 bg-[#003da5] rounded-full opacity-20" />
              <div className="absolute bottom-10 left-12 w-2 h-2 bg-[#003da5] rounded-full opacity-30" />
            </div>
            <p className="text-gray-400 text-xs text-center mt-3">
              A Google Maps embed can be added here — reach out if you'd like it set up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
