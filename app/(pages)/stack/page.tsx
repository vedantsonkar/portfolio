import StackCarousel from "@/components/StackCarousel/StackCarousel";
import DropText from "@/components/DropText/DropText";
import { techStack } from "@/constants";

export default function StackPage() {
  return (
    <main
      className="font-[family-name:var(--font-geist-sans)] min-h-screen"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl [1600px]:max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <DropText
            text1="MY"
            text2="TECH STACK"
            duration={0.5}
            delay={0.3}
            textClassname="max-sm:text-[45px]"
          />
        </div>
        <StackCarousel techStack={techStack} />
      </div>
    </main>
  );
}
