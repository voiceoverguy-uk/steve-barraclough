import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Steve Barraclough Heating | Pontefract Boiler, Heating & Plumbing Experts",
  description:
    "Gas Safe registered father-and-son gas engineers in Pontefract, covering West Yorkshire. Boiler installs, servicing, repairs, plumbing, heating and free quotes.",
  keywords:
    "gas engineers Pontefract, boiler installation West Yorkshire, Gas Safe registered, boiler repair, heating engineer, plumber Pontefract",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Steve Barraclough Heating | Pontefract Boiler, Heating & Plumbing Experts",
    description:
      "Gas Safe registered father-and-son gas engineers in Pontefract, covering West Yorkshire for boiler installs, servicing, repairs, plumbing and heating work.",
    type: "website",
    url: "/",
    locale: "en_GB",
    siteName: "Steve Barraclough Heating",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Steve Barraclough Heating – Gas Safe Engineers in Pontefract and West Yorkshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve Barraclough Heating | Pontefract Gas & Heating Experts",
    description:
      "Trusted Gas Safe engineers in Pontefract and West Yorkshire for boilers, plumbing and heating services.",
    images: ["/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
