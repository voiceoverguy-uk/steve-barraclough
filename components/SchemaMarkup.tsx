import { SITE_URL, FACEBOOK_URL } from "@/lib/siteConfig";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": [
    "https://schema.org/Plumber",
    "https://schema.org/HVACBusiness"
  ],
  "name": "Steve Barraclough Heating",
  "description": "Gas Safe registered father-and-son gas engineers providing boiler installations, servicing, repairs, plumbing and heating services across Pontefract and West Yorkshire.",
  "url": SITE_URL,
  "telephone": ["07860 141571", "07503 373239"],
  "image": `${SITE_URL}/steve-barraclough-team.jpg`,
  "identifier": "Gas Safe Registered No. 99236",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pontefract",
    "addressRegion": "West Yorkshire",
    "addressCountry": "GB"
  },
  "areaServed": [
    "Pontefract",
    "Castleford",
    "Wakefield",
    "Featherstone",
    "Normanton",
    "Knottingley",
    "York",
    "Barnsley",
    "Hemsworth",
    "South Elmsall",
    "Ossett",
    "Morley",
    "West Yorkshire"
  ],
  "sameAs": [FACEBOOK_URL],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Gas Safe Registered",
    "credentialCategory": "Professional Certification",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Gas Safe Register"
    }
  }
};

const services = [
  { name: "Boiler Installation", description: "Full boiler installation service including new boiler supply and fitting across West Yorkshire." },
  { name: "Boiler Servicing", description: "Annual boiler servicing to keep your boiler running safely and efficiently in Pontefract and West Yorkshire." },
  { name: "Boiler Repairs", description: "Fast and reliable boiler repair service covering Pontefract, Wakefield, Castleford and surrounding areas." },
  { name: "Central Heating Upgrades", description: "Full central heating system upgrades and replacements across West Yorkshire." },
  { name: "Radiator Installation and Repair", description: "Radiator fitting, replacement and repair for homes in Pontefract and West Yorkshire." },
  { name: "Gas Safety Inspections", description: "Gas safety inspections carried out by Gas Safe registered engineers in West Yorkshire." },
  { name: "Landlord Gas Safety Certificates", description: "Landlord gas safety certificates (CP12) for rental properties across West Yorkshire." },
  { name: "Leak Investigation and Repair", description: "Gas and water leak investigation and repair service in Pontefract and West Yorkshire." },
  { name: "General Plumbing Repairs", description: "General plumbing repairs including taps, pipework, and bathroom fixtures across West Yorkshire." },
  { name: "Unvented Cylinder Services", description: "Installation, service and repair of unvented hot water cylinders in West Yorkshire." },
  { name: "Heating System Maintenance", description: "Comprehensive heating system maintenance and powerflush services across Pontefract and West Yorkshire." },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": services.map((s) => ({
    "@type": "Service",
    "name": s.name,
    "description": s.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Steve Barraclough Heating",
      "url": SITE_URL
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "West Yorkshire"
    },
    "serviceType": "Gas and Heating Engineering"
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are you Gas Safe registered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we are fully Gas Safe registered. Our registration number is 99236. You can verify this on the official Gas Safe Register website. We are legally qualified to carry out gas work on your home or property, and we take safety extremely seriously."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover all of West Yorkshire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. While we're based in Pontefract, we cover a wide area across West Yorkshire including Wakefield, Castleford, Barnsley, Featherstone, Normanton, Knottingley, York and many more. If you're unsure whether we cover your location, just give us a call and we'll let you know. We probably do."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free quotes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer free, no-obligation quotes on all work. We'll assess the job, give you a clear and honest price, and there's no pressure to go ahead. We believe in transparent pricing, no hidden charges or surprise fees. What you will get is a quality job with no surprises at the end."
      }
    },
    {
      "@type": "Question",
      "name": "Do you do boiler repairs and servicing in West Yorkshire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, boiler repairs and servicing are a core part of what we do. Boiler broken down? Making unusual noises, losing pressure? Or if it just needs its annual service to keep it running safely and efficiently, we can help. We work on most makes and models."
      }
    },
    {
      "@type": "Question",
      "name": "Do you carry out general plumbing work as well?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, alongside gas and heating work, we carry out general plumbing repairs including leak investigation and repair, tap replacement, pipework, radiator work, and unvented cylinder servicing. We're your one-stop-shop for all gas, heating and plumbing needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with Landlords?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, across West Yorkshire we work with single buy to let landlords and portfolio landlords. Maintaining, servicing and providing the all important yearly gas safety certificates. If you let a property and want a reliable service, get in touch."
      }
    },
    {
      "@type": "Question",
      "name": "Are you tidy and will it look good?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is one thing we really excel at. We look after your home like it was ours. We also take great pride in our work. Have a look at the photos to see the quality of our pipework. It's something Steve is particularly proud of."
      }
    }
  ]
};

export default function SchemaMarkup() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
