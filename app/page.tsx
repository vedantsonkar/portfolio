import HeadshotSocialsSection from "@/components/Homepage/HeadshotSocialsSection";
import SummarySection from "@/components/Homepage/SummarySection";
import ExperiencePage from "./(pages)/experience/page";
import ProjectsPage from "./(pages)/projects/page";
import ResumePage from "./(pages)/resume/page";
import TextPressureComponent from "@/components/Banner/Banner";
import LiquidEther from "@/components/LiquidEther";

export default function Home() {
  return (
    <main
      role="main"
      className="font-[family-name:var(--font-geist-sans)]"
      style={{ background: "var(--background)", position: "relative" }}
    >
      <div className="px-4 -mt-32 sm:-mt-36 2xl:-mt-48 h-screen relative select-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <LiquidEther />
        </div>
        <TextPressureComponent text="Building smooth experiences, one pixel at a time." />
        <div className="absolute bottom-0 left-0 w-full h-36 pointer-events-none bg-gradient-to-t from-[#fff] dark:from-[#0a0a0a] to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl [1600px]:max-w-9xl px-4 sm:px-6 lg:px-8 flex flex-col gap-y-8 lg:gap-y-12 xl:gap-y-16">
        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-x-16 lg:flex-row gap-y-14">
          <HeadshotSocialsSection />
          <SummarySection />
        </div>
        <div>
          <ExperiencePage />
        </div>
        <div>
          <ProjectsPage />
        </div>
        <div>
          <ResumePage />
        </div>
      </div>
    </main>
  );
}
