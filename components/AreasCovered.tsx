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
              As your local gas engineer in Pontefract, we cover a wide area
              across West Yorkshire. Whether you need boiler servicing across
              West Yorkshire or a full heating installation, get in touch and
              we&apos;ll let you know if we can help — most of the time, we can.
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
              <a href="tel:07860141571" className="text-[#003da5] font-medium hover:underline">
                Give us a call
              </a>{" "}
              and we&apos;ll be happy to help.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#003da5]/30">
            <iframe
              src="https://www.google.com/maps?q=Pontefract+West+Yorkshire&output=embed"
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              title="Steve Barraclough Gas Engineers – Pontefract, West Yorkshire"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
