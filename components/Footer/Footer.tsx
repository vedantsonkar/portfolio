import { FC } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";

const Footer: FC = () => {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black sticky bottom-0 w-full">
      {/* <div className="absolute top-0 left-0 w-full h-12 pointer-events-none bg-gradient-to-b from-[#fff] dark:from-[#0a0a0a] to-transparent"></div> */}
      {/* Contact form */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ContactForm />
      </div>

      {/* Divider line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/90 dark:via-black/90 to-transparent neon-divider" />

      {/* Footer bottom link */}
      <div className="flex max-sm:flex-col max-sm:justify-center py-6 w-full justify-between items-center gap-4">
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
        <div className="flex justify-center w-full">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/vedantsonkar/"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Made by Vedant Sonkar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
