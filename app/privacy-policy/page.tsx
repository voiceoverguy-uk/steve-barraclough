import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Steve Barraclough Gas Engineers",
  description: "Privacy policy for Steve Barraclough Gas Engineers, Pontefract.",
};

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-extrabold text-[#0d1b2a] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">1. Who We Are</h2>
            <p>
              Steve Barraclough Gas Engineers is a Gas Safe registered heating and plumbing
              business based in Pontefract, West Yorkshire. We are a family-run business
              (Gas Safe Reg. No. 99236). This policy explains how we collect and use
              any information you provide when contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">2. Information We Collect</h2>
            <p>We may collect the following information when you use our contact form or call us:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your name</li>
              <li>Your phone number</li>
              <li>Your email address</li>
              <li>Your postcode</li>
              <li>Details of the service you require</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">3. How We Use Your Information</h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond to your enquiry or quote request</li>
              <li>Arrange and carry out work at your property</li>
              <li>Contact you about your booking or job</li>
            </ul>
            <p className="mt-3">
              We do not use your information for marketing purposes, and we do not
              share it with third parties except where required to carry out your work
              (e.g. suppliers) or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">4. Data Retention</h2>
            <p>
              We retain your contact information only for as long as is necessary to
              fulfil your request or comply with any legal obligations. We do not store
              personal data indefinitely.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">5. Your Rights</h2>
            <p>
              Under UK data protection law, you have the right to request access to,
              correction of, or deletion of any personal data we hold about you. To
              exercise these rights, please contact us by phone.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">6. Contact</h2>
            <p>
              If you have any questions about this privacy policy, please call us on{" "}
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
