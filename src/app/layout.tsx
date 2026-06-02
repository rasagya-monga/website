import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Amvent Consulting | Pigment Implementation & Connected Planning Experts",
  description:
    "Amvent is a Pigment-certified consulting firm helping organizations implement connected planning systems. Expert Pigment implementation, migration, and advisory services.",
  openGraph: {
    title: "Amvent Consulting — Planning Shouldn't Be This Hard",
    description:
      "Pigment-certified consultants who help teams replace fragmented planning with a single, connected system.",
    url: "https://www.amventconsulting.com",
    siteName: "Amvent Consulting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Amvent Consulting",
              url: "https://www.amventconsulting.com",
              description:
                "Pigment-certified consulting firm specializing in connected planning implementation, advisory, and platform migration.",
              telephone: "+16476762039",
              email: "info@amventconsulting.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              founder: { "@type": "Person", name: "Rasagya Monga" },
              areaServed: "North America",
              serviceType: [
                "Pigment Implementation",
                "Connected Planning Advisory",
                "Platform Migration",
                "EPM Consulting",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
