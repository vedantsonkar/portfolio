// app/experience/page.tsx
import { experiences, Experience } from "@/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience | Vedant Sonkar - Software Engineer Portfolio",
  description:
    "Detailed professional experience of Vedant Sonkar, Software Engineer & Fullstack Developer. Proven expertise in building scalable web apps using MERN stack, React, Next.js, and React Native.",
  keywords: [
    "Vedant Sonkar",
    "Experience",
    "Work History",
    "Frontend Developer",
    "Fullstack Developer",
    "MERN",
    "React",
    "Next.js",
    "React Native",
    "Software Engineer",
    "Portfolio Experience",
  ],
  openGraph: {
    title: "Vedant Sonkar | Professional Experience",
    description:
      "Professional work experience of Vedant Sonkar — Fullstack Developer specializing in MERN stack, React, Next.js, and React Native.",
    url: "https://vedantsonkar.in/experience",
    siteName: "Vedant Sonkar Portfolio",
    images: [
      {
        url: "https://www.vedantsonkar.in/VedantSonkarPortfolioLogo.png",
        width: 1200,
        height: 630,
        alt: "Vedant Sonkar Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Sonkar | Experience",
    description:
      "Fullstack Developer with 3+ years of professional experience in MERN, Next.js, and React Native.",
    images: ["https://www.vedantsonkar.in/VedantSonkarPortfolioLogo.png"],
    creator: "@vedant_sonkar",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Vedant Sonkar" }],
  alternates: { canonical: "https://www.vedantsonkar.in/experience" },
};

export default function ExperiencePage() {
  return (
    <main
      className="font-[family-name:var(--font-geist-sans)] px-4 pb-4 sm:px-6 sm:pb-6 lg:px-12 lg:pb-12 space-y-8"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl [1600px]:max-w-9xl flex flex-col gap-y-8">
        <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-6 text-center">
          Experience
        </h1>

        <section className="space-y-6">
          {experiences.map((exp: Experience, idx: number) => (
            <article
              key={idx}
              className="p-3 sm:p-4 lg:p-6 rounded-2xl shadow-md bg-white/5 border border-gray-200"
            >
              {/* Company + Role */}
              <header className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                    {exp.role}
                  </h2>
                  <Link
                    href={exp.company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg underline text-gray-600 dark:text-gray-500"
                  >
                    {exp.company.name}
                  </Link>
                </div>
                <span className="text-xs sm:text-sm lg:text-base text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                  {exp.location}
                </span>
              </header>

              {/* Date Range (semantic + accessible) */}
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 dark:text-gray-400">
                <time dateTime={exp.startDate.toISOString()}>
                  {exp.startDate.toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </time>
                {" - "}
                {exp.endDate ? (
                  <time dateTime={exp.endDate.toISOString()}>
                    {exp.endDate.toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                ) : (
                  <span aria-label="Present">Present</span>
                )}
              </p>

              {/* Bullet Points */}
              <ul className="list-disc list-inside mt-3 space-y-1 sm:space-y-2">
                {exp.bulletPoints.map((point, i) => (
                  <li
                    key={i}
                    className="text-xs sm:text-base lg:text-lg text-gray-700 dark:text-white"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
