import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center fixed bottom-0 inset-x-0 pb-6 sm:pb-10">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/vedantsonkar/"
        target="_blank"
        rel="noopener noreferrer"
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
