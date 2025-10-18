import DropText from "../DropText/DropText";
import TextType from "../TextType/TextType";
import NumbersSection from "./NumbersSection";

const SummarySection = () => {
  return (
    <section className="flex flex-col items-center lg:items-start justify-start gap-y-8 max-w-lg text-center lg:text-left ">
      <DropText text1="SOFTWARE" text2="ENGINEER" duration={0.5} delay={0.3} />
      <div className="sm:pl-2">
        <TextType
          text={[
            "Driven by a passion for crafting seamless user experiences, I specialize in building robust, scalable applications and continually explore the frontiers of AI/ML to create intelligent, impactful solutions.",
          ]}
          typingSpeed={20}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          startOnVisible={true}
        />
      </div>

      <NumbersSection />
    </section>
  );
};

export default SummarySection;
