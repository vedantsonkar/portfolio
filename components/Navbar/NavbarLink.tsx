"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

type NavbarLinkPropTypes = {
  href: string;
  icon: string;
  title: string;
};

const NavbarLink: FC<NavbarLinkPropTypes> = ({ href, icon, title }) => {
  const pathname = usePathname();
  const [isActiveLink, setIsActiveLink] = useState<boolean>(false);

  useEffect(() => {
    console.log("test", pathname, href);
    setIsActiveLink(pathname === href);
  }, [pathname]);

  return (
    <li
      className={clsx(
        "hover:bg-white/15 relative group flex flex-col items-center justify-center text-center p-2 rounded-full",
        {
          "bg-white/15": isActiveLink,
        }
      )}
    >
      <Link
        href={href}
        className="h-6 w-6 aspect-square relative hover:float"
        aria-label={title}
      >
        <Image src={icon} alt={title} fill sizes="20vw" />
      </Link>
      <span
        className="text-white bg-white/15 px-3 py-[0.5]  rounded-xl absolute mx-auto bottom-0 group-hover:translate-y-[145%] transition-all opacity-0 invisible group-hover:visible group-hover:scale-100 scale-0 group-hover:opacity-100 duration-300 text-md font-semibold"
        role="tooltip"
        aria-hidden="true"
      >
        {title}
      </span>
    </li>
  );
};

export default NavbarLink;
