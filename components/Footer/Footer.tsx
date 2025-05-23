import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center px-4 sm:px-6 lg:px-8 z-[-1] fixed inset-x-0 bottom-0">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 py-4 dark:text-white text-black"
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
    </footer>
  );
};

export default Footer;
