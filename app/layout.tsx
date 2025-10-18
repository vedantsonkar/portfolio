import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import Header from "@/components/Header/Header";
import { SEO_KEYWORDS, SOCIAL_LINKS, YEARS_OF_EXPERIENCE } from "@/constants";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedant Sonkar | Portfolio",
  description: `Hello Recruiters and fellow developers. I am Vedant Sonkar, a Full Stack Developer with ${YEARS_OF_EXPERIENCE}+ years of experience in building web/mobile applications.`,
  keywords: SEO_KEYWORDS,
  metadataBase: new URL("https://www.vedantsonkar.in"),
  openGraph: {
    title: "Vedant Sonkar | Portfolio",
    description: `Hello Recruiters and fellow developers. I am Vedant Sonkar, a Full Stack Developer with ${YEARS_OF_EXPERIENCE}+ years of experience in building web/mobile applications.`,
    type: "website",
    url: "https://www.vedantsonkar.in",
    images: [
      {
        url: "https://www.vedantsonkar.in/VedantSonkarPortfolioLogo.png",
        width: 800,
        height: 600,
        alt: "Vedant Sonkar Portfolio",
      },
    ],
    siteName: "Vedant Sonkar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vedant_sonkar",
    title: "Vedant Sonkar | Portfolio",
    description: `Hello Recruiters and fellow developers. I am Vedant Sonkar, a Full Stack Developer with ${YEARS_OF_EXPERIENCE}+ years of experience in building web/mobile applications.`,
    images: ["https://www.vedantsonkar.in/VedantSonkarPortfolioLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "https://www.vedantsonkar.in" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vedant Sonkar",
  url: "https://www.vedantsonkar.in",
  image: "https://www.vedantsonkar.in/VedantSonkarPortfolioLogo.png",
  sameAs: Object.values(SOCIAL_LINKS),
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Cornerstone OnDemand",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Mumbai",
    url: "https://mu.ac.in/",
  },
  description: `Hello Recruiters and fellow developers. I am Vedant Sonkar, a Full Stack Developer with ${YEARS_OF_EXPERIENCE}+ years of experience in building web/mobile applications.`,
  knowsAbout: [
    "React.js",
    "Node.js",
    "TypeScript",
    "Next.js",
    "React Native",
    "PostgreSQL",
    "Frontend Development",
    "Bikes",
    "Backend Development",
    "Gaming",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Work",
    email: "vedantsonkar0810@gmail.com",
    url: "https://www.vedantsonkar.in",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    description: "Developing high-performance web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased min-h-screen flex flex-col pt-32 sm:pt-36 2xl:pt-48`}
      >
        <Header />
        <main className="flex-1 z-2 ">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
