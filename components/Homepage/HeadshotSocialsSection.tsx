import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";

const HeadshotSocialsSection = () => {
  return (
    <section
      className="dark:bg-white/90 bg-black/80 w-[340px] h-[520px] sm:h-[590px] rounded-2xl max-lg:pt-10  max-lg:pb-6 lg:py-10 px-8 flex flex-col items-center justify-between relative overflow-hidden"
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
          src="/Headshot.jpg"
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
        <div className="flex w-full justify-center items-center gap-4">
          <Link
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Image
              src="/socials/LinkedinLogo.svg"
              alt="LinkedIn Icon"
              width={24}
              height={24}
              className="inline-block invert dark:invert-0"
            />
          </Link>
          <Link
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Github Profile"
          >
            <Image
              src="/socials/GithubLogo.svg"
              alt="Github Icon"
              width={24}
              height={24}
              className="inline-block invert dark:invert-0"
            />
          </Link>
          <Link
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Instagram Profile"
          >
            <Image
              src="/socials/InstagramLogo.svg"
              alt="Instagram Icon"
              width={32}
              height={32}
              className="inline-block invert dark:invert-0"
            />
          </Link>
          <Link
            href={SOCIAL_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="X Profile"
          >
            <Image
              src="/socials/XLogo.svg"
              alt="X Icon"
              width={24}
              height={24}
              className="inline-block invert dark:invert-0"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeadshotSocialsSection;
