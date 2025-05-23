import { NAVBAR_LINKS } from "@/constants";
import NavbarLink from "./NavbarLink";

const Header = () => {
  return (
    <header className="w-full fixed top-0 bg-gradient-to-b dark:from-black to-transparent from-white z-5 py-6">
      <div className="bg-[rgba(0,0,0,0.49)] dark:bg-[rgba(255,255,255,0.25)] px-4 py-2 gap-x-4 sm:top-10 w-full max-w-xs rounded-full inset-x-0 mx-auto">
        <nav>
          <ul className="flex items-center justify-between">
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
