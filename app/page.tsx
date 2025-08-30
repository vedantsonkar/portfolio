import HeadshotSocialsSection from "@/components/Homepage/HeadshotSocialsSection";
import SummarySection from "@/components/Homepage/SummarySection";
import ExperiencePage from "./(pages)/experience/page";
import ProjectsPage from "./(pages)/projects/page";
import ResumePage from "./(pages)/resume/page";

export default function Home() {
  return (
    <main
      role="main"
      className="font-[family-name:var(--font-geist-sans)]"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl [1600px]:max-w-9xl px-4 sm:px-6 lg:px-8 flex flex-col gap-y-8 lg:gap-y-12 xl:gap-y-16">
        <div className="flex flex-col items-center lg:items-start justify-center gap-x-16 lg:flex-row gap-y-14">
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
