import Image from "next/image";

const HeadshotSocialsSection = () => {
  return (
    <section
      className="dark:bg-white/90 bg-black/80 w-[340px] h-[490px] sm:h-[540px] rounded-2xl py-10 px-8 flex flex-col items-center justify-between relative overflow-hidden"
      aria-labelledby="headshot-section-title"
      aria-describedby="headshot-section-desc"
    >
      <Image
        src="/vectors/VectorTopLeft.png"
        alt="Vector Top Left"
        width={300}
        height={300}
        className="absolute top-0 left-0 z-2 select-none pointer-events-none"
        draggable="false"
        priority={false}
        unoptimized={true}
      />
      <Image
        src="/vectors/VectorBottomLeft.png"
        alt="Vector Bottom Left"
        width={400}
        height={400}
        className="absolute bottom-0 left-0 z-2 select-none pointer-events-none"
        draggable="false"
        priority={false}
        unoptimized={true}
      />
      <Image
        src="/vectors/VectorRight.png"
        alt="Vector Right"
        width={300}
        height={300}
        className="absolute -right-1 top-1/6 z-2 select-none pointer-events-none"
        draggable="false"
        priority={false}
        unoptimized={true}
      />
      <div className="aspect-square rounded-2xl w-64 relative mx-auto">
        <Image
          src="/Headshot-Vedant.jpg"
          alt="Headshot of Vedant Sonkar"
          fill
          className="rounded-2xl select-none pointer-events-none object-cover"
          role="img"
          aria-label="Headshot of Vedant Sonkar"
          draggable="false"
          priority={true}
        />
      </div>
      <div className="flex flex-col items-center justify-between mt-10 h-full w-full">
        <h1
          id="headshot-section-title"
          className="text-3xl sm:text-4xl text-center font-bold leading-[0.85] dark:text-black text-white"
        >
          Vedant Sonkar
        </h1>
        <h2
          id="headshot-section-desc"
          className="text-base sm:text-lg text-white/80 dark:text-black text-center max-w-2xl italic"
        >
          Fullstack Software Engineer passionate about AI/ML and creative
          problem solving.
        </h2>
      </div>
    </section>
  );
};

export default HeadshotSocialsSection;
