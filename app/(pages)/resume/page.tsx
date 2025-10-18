import DropText from "@/components/DropText/DropText";
import ResumeViewer from "@/components/ResumeViewer/ResumeViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Resume | Vedant Sonkar - Fullstack Developer (MERN, Next.js, React Native)",
  description:
    "Explore the professional resume of Vedant Sonkar, a Fullstack Developer specializing in MERN stack, Next.js, and React Native. 3+ years of experience in frontend-heavy development, delivering scalable web and mobile applications.",
  keywords: [
    "Vedant Sonkar",
    "Resume",
    "Fullstack Developer",
    "MERN",
    "React",
    "Next.js",
    "React Native",
    "Frontend Engineer",
    "Software Engineer Portfolio",
  ],
  openGraph: {
    title: "Vedant Sonkar | Resume",
    description:
      "Professional resume of Vedant Sonkar, Fullstack Developer (MERN, Next.js, React Native) with 3+ years experience building modern web apps.",
    url: "https://vedantsonkar.in/resume",
    siteName: "Vedant Sonkar Portfolio",
    images: [
      {
        url: "https://www.vedantsonkar.in/VedantSonkarPortfolioLogo.png",
        width: 1200,
        height: 630,
        alt: "Vedant Sonkar Resume",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Sonkar | Resume",
    description:
      "Fullstack Developer Resume (MERN, Next.js, React Native) with 3+ years frontend experience.",
    images: ["https://www.vedantsonkar.in/VedantSonkarPortfolioLogo.png"],
    creator: "@vedant_sonkar",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Vedant Sonkar" }],
  alternates: { canonical: "https://www.vedantsonkar.in/resume" },
};

export default function ResumePage() {
  return (
    <main
      className="font-[family-name:var(--font-geist-sans)]"
      style={{ background: "var(--background)" }}
    >
      <DropText text1="MY" text2="RESUME" duration={0.5} delay={0.3} />
      <ResumeViewer />
    </main>
  );
}
