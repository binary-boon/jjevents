import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";

export const metadata: Metadata = {
  title: "JJ Events — Luxury Wedding & Event Management",
  description:
    "Premier wedding planning and bespoke event management in Rajasthan. From royal palace weddings to corporate galas, we craft timeless celebrations.",
  keywords: [
    "wedding planner jodhpur",
    "event management rajasthan",
    "luxury wedding india",
    "destination wedding planner",
    "corporate event management",
    "JJ Events",
  ],
  openGraph: {
    title: "JJ Events — Crafting Timeless Celebrations",
    description:
      "Luxury wedding planning and bespoke event management, bringing your grandest visions to life.",
    url: "https://jjevents.in",
    siteName: "JJ Events",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "JJ Events — Luxury Wedding & Event Management",
    description: "Premier event management in Rajasthan.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventPlanner",
              name: "JJ Events",
              description: "Luxury wedding & event management in Rajasthan",
              url: "https://jjevents.in",
              telephone: "+91-98XXX-XXXXX",
              email: "hello@jjevents.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jodhpur",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              areaServed: "India",
              priceRange: "₹₹₹",
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
