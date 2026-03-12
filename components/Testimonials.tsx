const testimonials = [
  {
    name: "Sarah M.",
    location: "Pontefract",
    rating: 5,
    text: "Turned up on time, had our boiler sorted the same day, and were brilliant from start to finish. Fair pricing, no fuss — would absolutely recommend.",
    service: "Boiler Repair",
  },
  {
    name: "James T.",
    location: "Wakefield",
    rating: 5,
    text: "Couldn't be happier with our new Worcester Bosch boiler. Neat, professional work, left the place spotless, and the extended warranty is a real bonus.",
    service: "Boiler Installation",
  },
  {
    name: "Linda H.",
    location: "Castleford",
    rating: 5,
    text: "Steve was incredibly helpful with my landlord gas safety cert — booked me in quickly, turned up on time and sorted the paperwork straight away.",
    service: "Landlord Gas Safety Certificate",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#ffce00]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-[#ffce00]" />
            <span className="text-[#003da5] font-semibold text-sm uppercase tracking-wide">
              Customer Reviews
            </span>
            <div className="h-0.5 w-8 bg-[#ffce00]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2a] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We let our work speak for itself. Here&apos;s what some of our
            customers across West Yorkshire have to say.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-7 flex flex-col hover:shadow-lg hover:border-[#003da5]/20 transition-all duration-200"
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-[#003da5]/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <StarRating count={t.rating} />

              <p className="text-gray-600 leading-relaxed mt-4 mb-6 flex-1 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#0d1b2a] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
                <span className="text-xs bg-[#003da5]/10 text-[#003da5] font-medium px-2.5 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
