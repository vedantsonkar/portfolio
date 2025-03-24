import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import Header from "@/components/Navbar/Header";
import { SEO_KEYWORDS, YEARS_OF_EXPERIENCE } from "@/constants";
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
  openGraph: {
    title: "Vedant Sonkar | Portfolio",
    description: `Hello Recruiters and fellow developers. I am Vedant Sonkar, a Full Stack Developer with ${YEARS_OF_EXPERIENCE}+ years of experience in building web/mobile applications.`,
    type: "website",
    url: "https://www.vedantsonkar.in",
    images: [
      {
        url: "/VedantSonkarPortfolioLogo.png",
        width: 800,
        height: 600,
        alt: "Vedant Sonkar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "Vedant Sonkar | Portfolio",
    description: `Hello Recruiters and fellow developers. I am Vedant Sonkar, a Full Stack Developer with ${YEARS_OF_EXPERIENCE}+ years of experience in building web/mobile applications.`,
    images: ["/VedantSonkarPortfolioLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "https://www.vedantsonkar.in" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
