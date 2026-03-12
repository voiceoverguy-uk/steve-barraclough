import Image from "next/image";

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

          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#003da5]/30 relative aspect-[4/3]">
              <Image
                src="/west-yorkshire-map.png"
                alt="West Yorkshire coverage map — Wakefield to Pontefract and Castleford"
                fill
                className="object-cover object-[40%_55%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d1b2a]/60 to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 flex justify-between px-4">
                <span className="inline-flex items-center gap-1 bg-white/90 text-[#0d1b2a] text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  <svg className="w-3 h-3 text-[#003da5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Wakefield
                </span>
                <span className="inline-flex items-center gap-1 bg-white/90 text-[#0d1b2a] text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  <svg className="w-3 h-3 text-[#003da5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Pontefract
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
