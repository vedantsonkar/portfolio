import { NAVBAR_LINKS } from "@/constants";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] flex items-center justify-between p-4 gap-x-4 fixed top-10 left-0 w-full z-50 max-w-xs rounded-xl inset-x-0 mx-auto">
      {NAVBAR_LINKS.map((link) => (
        <NavbarLink key={link.href} {...link} />
      ))}
    </div>
  );
};

export default Navbar;
