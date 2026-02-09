import { projects } from "@/constants";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import { Metadata } from "next";
import DropText from "@/components/DropText/DropText";

// app/projects/page.tsx
export const metadata: Metadata = {
  title: "Projects | Vedant Sonkar - Fullstack Developer Portfolio",
  description:
    "Explore the projects by Vedant Sonkar, a Fullstack Developer specializing in React, Next.js, TypeScript, and MERN. Featured projects include Food Stories, Zoomin Productions, LXP Edcast, and The English Quest mobile app.",
  keywords: [
    "Vedant Sonkar projects",
    "Vedant Sonkar portfolio",
    "Vedant Sonkar developer",
    "React projects",
    "Next.js projects",
    "TypeScript projects",
    "MERN stack projects",
    "Food Stories app",
    "Zoomin Productions",
    "LXP Edcast",
    "The English Quest app",
    "fullstack developer India",
    "frontend engineer portfolio",
    "software engineer projects",
  ],
  openGraph: {
    title: "Vedant Sonkar | Projects Portfolio",
    description:
      "Browse highlighted projects by Vedant Sonkar: Food Stories, Zoomin Productions, LXP Edcast (internal tool), and The English Quest mobile app. Expertise in React, Next.js, MERN & more.",
    url: "https://www.vedantsonkar.in/projects",
    siteName: "Vedant Sonkar Portfolio",
    images: [
      {
        url: "https://www.vedantsonkar.in/VedantSonkarPortfolioLogo.png",
        width: 1200,
        height: 630,
        alt: "Vedant Sonkar Projects Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.vedantsonkar.in/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Sonkar | Projects Portfolio",
    description:
      "Check out projects built by Vedant Sonkar, including Food Stories, Zoomin Productions, LXP Edcast, and The English Quest app.",
    images: ["https://www.vedantsonkar.in/VedantSonkarPortfolioLogo.png"],
    creator: "@vedant_sonkar",
  },
};

export default function ProjectsPage() {
  return (
    <main
      className="font-[family-name:var(--font-geist-sans)] px-4 pb-4 sm:px-6 sm:pb-6 lg:px-12 lg:pb-12 space-y-8"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl [1600px]:max-w-9xl flex flex-col gap-y-8">
        <DropText text1="MY" text2="PROJECTS" duration={0.5} delay={0.3} />
        <ProjectShowcase projects={projects} />
      </div>
    </main>
  );
}
