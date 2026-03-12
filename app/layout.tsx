import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steve Barraclough Gas Engineers | Pontefract Boiler & Heating Experts",
  description:
    "Gas Safe registered father-and-son heating engineers in Pontefract, covering West Yorkshire. Boiler installs, servicing, repairs, plumbing and free quotes.",
  keywords:
    "gas engineers Pontefract, boiler installation West Yorkshire, Gas Safe registered, Worcester Bosch installer, boiler repair, heating engineer",
  openGraph: {
    title:
      "Steve Barraclough Gas Engineers | Pontefract Boiler & Heating Experts",
    description:
      "Gas Safe registered father-and-son heating engineers in Pontefract, covering West Yorkshire. Boiler installs, servicing, repairs, plumbing and free quotes.",
    type: "website",
    locale: "en_GB",
    siteName: "Steve Barraclough Gas Engineers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
