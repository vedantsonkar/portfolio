import SummarySection from "@/components/Homepage/SummarySection";

export default function Home() {
  return (
    <main
      role="main"
      className="font-[family-name:var(--font-geist-sans)]"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl [1600px]:max-w-9xl px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:items-start justify-center gap-x-16 sm:flex-row gap-y-14">
        <div className="dark:bg-white/90 bg-black/80 w-[340px] h-[420px] sm:h-[640px] rounded-2xl" />
        <SummarySection />
      </div>
    </main>
  );
}
