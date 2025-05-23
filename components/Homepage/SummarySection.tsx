const SummarySection = () => {
  return (
    <div
      className="flex flex-col items-center sm:items-start justify-start gap-y-8 max-w-4xl text-center sm:text-left"
      style={{ background: "var(--background)" }}
    >
      <h1 className="text-6xl sm:text-8xl [1600px]:text-9xl font-bold leading-[0.85]">
        SOFTWARE
        <br />
        <span className="dark:text-white/30 text-black/40">ENGINEER</span>
      </h1>
      <h2 className="text-base sm:text-lg dark:text-white/70 text-black max-w-2xl">
        Driven by a passion for crafting seamless user experiences, I specialize
        in building robust, scalable applications and continually explore the
        frontiers of AI/ML to create intelligent, impactful solutions.
      </h2>
    </div>
  );
};

export default SummarySection;
