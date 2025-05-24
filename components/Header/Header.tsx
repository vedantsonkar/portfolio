"use client";
import { NAVBAR_LINKS } from "@/constants";
import NavbarLink from "./NavbarLink";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = NAVBAR_LINKS.findIndex((link) => link.href === pathname);
    setActiveIndex(index);
  }, [pathname]);

  return (
    <header className="w-full fixed top-0 bg-gradient-to-b dark:from-black to-transparent from-white z-5 py-6">
      <div className="bg-[rgba(0,0,0,0.49)] dark:bg-[rgba(255,255,255,0.25)] px-4 py-2 gap-x-4 sm:top-10 w-full max-w-xs rounded-full inset-x-0 mx-auto">
        <nav>
          <ul className="flex items-center justify-between relative">
            <span
              className="absolute top-[100%] left-0 w-10 h-10 rounded-full bg-black/15 dark:bg-white/45 -translate-y-1/2 transition-transform duration-300 ease-in-out pointer-events-none"
              style={{
                transform: `translateX(${activeIndex * 62}px) translateY(-50%)`,
              }}
              key="active-indicator"
            />
            {NAVBAR_LINKS.map((link) => (
              <NavbarLink key={link.href} {...link} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
