import HeadshotSocialsSection from "@/components/Homepage/HeadshotSocialsSection";
import SummarySection from "@/components/Homepage/SummarySection";
import ExperiencePage from "./(pages)/experience/page";
import ProjectsPage from "./(pages)/projects/page";
import Banner from "@/components/Banner/Banner";
import AchievementScroll from "@/components/AchievementScroll/AchievementScroll";
import { achievements } from "@/constants";

export default function Home() {
  return (
    <main
      role="main"
      className="font-[family-name:var(--font-geist-sans)] pb-8"
      style={{ background: "var(--background)", position: "relative" }}
    >
      <Banner />
      <div className="mx-auto max-w-7xl [1600px]:max-w-9xl flex flex-col gap-y-8 lg:gap-y-12 xl:gap-y-16">
        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-center gap-x-16 lg:flex-row gap-y-14 px-12 sm:px-18 lg:px-24">
          <HeadshotSocialsSection />
          <SummarySection />
        </div>
        <div className="px-2">
          <AchievementScroll achievements={achievements} />
        </div>
        <div>
          <ProjectsPage />
        </div>
      </div>
    </main>
  );
}
