import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type NavbarLinkPropTypes = {
  href: string;
  icon: string;
  title: string;
};

const NavbarLink: FC<NavbarLinkPropTypes> = ({ href, icon, title }) => {
  return (
    <li className="hover:bg-white/15 relative group flex flex-col items-center justify-center text-center rounded-md p-2">
      <Link
        href={href}
        className="h-6 w-6 aspect-square relative"
        aria-label={title}
      >
        <Image src={icon} alt={title} fill sizes="20vw" />
      </Link>
      <span
        className="text-white bg-black/30 absolute mx-auto top-0 group-hover:translate-y-[250%] transition-all -translate-y-full duration-300 opacity-0 group-hover:opacity-100 text-lg font-semibold"
        role="tooltip"
        aria-hidden="true"
      >
        {title}
      </span>
    </li>
  );
};

export default NavbarLink;
