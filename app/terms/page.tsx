import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Disclaimer | Steve Barraclough Gas Engineers",
  description: "Terms and disclaimer for Steve Barraclough Gas Engineers, Pontefract.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header bar */}
      <div className="bg-[#0d1b2a] py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-[#ffce00] text-sm font-medium hover:underline">
            ← Back to Steve Barraclough Gas Engineers
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14 sm:px-6">
        <h1 className="text-3xl font-extrabold text-[#0d1b2a] mb-2">Terms &amp; Disclaimer</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">1. About Us</h2>
            <p>
              Steve Barraclough Gas Engineers is a Gas Safe registered business
              (Reg. No. 99236) based in Pontefract, West Yorkshire. By using this
              website or contacting us, you agree to the terms set out below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">2. Services</h2>
            <p>
              All work carried out by Steve Barraclough Gas Engineers is performed
              by qualified, Gas Safe registered engineers. Any quotations provided
              are estimates based on the information supplied and may be subject to
              change following an on-site assessment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">3. Website Disclaimer</h2>
            <p>
              The information on this website is provided in good faith and for general
              information purposes only. We make no warranty — express or implied — about
              the completeness, accuracy or suitability of the information. Any reliance
              on this information is strictly at your own risk.
            </p>
            <p className="mt-3">
              We reserve the right to update or amend the content of this website at
              any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">4. Limitation of Liability</h2>
            <p>
              Steve Barraclough Gas Engineers shall not be liable for any indirect or
              consequential loss arising from the use of this website or from any work
              carried out, beyond what is covered by our statutory obligations as a Gas
              Safe registered business.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes
              shall be subject to the exclusive jurisdiction of the courts of England
              and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">6. Contact</h2>
            <p>
              For any queries regarding these terms, please call us on{" "}
              <a href="tel:07860141571" className="text-[#003da5] font-medium hover:underline">
                07860 141571
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
