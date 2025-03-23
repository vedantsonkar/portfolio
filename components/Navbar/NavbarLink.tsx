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
    <div className="h-8 w-8 aspect-square rounded-md hover hover:bg-white/15 relative group flex flex-col items-center justify-center text-center p-4">
      <Link href={href} className="h-6 w-6 aspect-square">
        <Image src={icon} alt={title} fill sizes="20vw" />
      </Link>
      <p className="group-hover:visible invisible text-white bg-[rgba(255,255,255,0.03)] absolute mx-auto top-0 group-hover:translate-y-[150%] group-hover:opacity-100 opacity-0 transition-all -translate-y-full inset-x-0">
        {title}
      </p>
    </div>
  );
};

export default NavbarLink;
