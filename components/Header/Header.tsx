import { NAVBAR_LINKS } from "@/constants";
import NavbarLink from "./NavbarLink";

const Header = () => {
  return (
    <header className="bg-[rgba(0,0,0,0.49)] dark:bg-[rgba(255,255,255,0.03)] px-4 py-2 gap-x-4 fixed top-6 sm:top-10 w-full z-5 max-w-xs rounded-full inset-x-0 mx-auto">
      <nav>
        <ul className="flex items-center justify-between">
          {NAVBAR_LINKS.map((link) => (
            <NavbarLink key={link.href} {...link} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
