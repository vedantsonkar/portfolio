import NumberCounter from "./NumberCounter";

const NumbersSection = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <NumberCounter end={10} text="Projects Completed" speed={90} />
      <NumberCounter end={3} text="Years of Experience" speed={270} />
    </div>
  );
};
export default NumbersSection;
