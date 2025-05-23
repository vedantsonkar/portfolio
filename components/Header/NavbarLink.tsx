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
    setIsActiveLink(pathname === href);
  }, [href, pathname]);

  return (
    <li
      className={clsx(
        "hover:bg-black/15 dark:hover:bg-white/45 relative group flex flex-col items-center justify-center text-center p-2 rounded-full",
        {
          "bg-black/15 dark:bg-white/45": isActiveLink,
        }
      )}
    >
      <Link
        href={href}
        className="h-6 w-6 aspect-square relative float"
        aria-label={title}
      >
        <Image src={icon} alt={title} fill sizes="20vw" />
      </Link>
      <span
        className="dark:text-white text-black bg-black/15 dark:bg-white/45 px-3 py-[0.5] rounded-xl absolute mx-auto bottom-0 group-hover:translate-y-[145%] transition-all opacity-0 invisible group-hover:visible group-hover:scale-100 scale-0 group-hover:opacity-100 duration-300 text-md font-semibold"
        role="tooltip"
        aria-hidden="true"
      >
        {title}
      </span>
    </li>
  );
};

export default NavbarLink;
