import SideNav from "./side-nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarVarient = () => {
  return (
    <nav className="sticky top-0 left-0 w-full px-8 py-4 flex justify-between items-center bg-black z-30">
      <div>
        <Link href="/">
          <Image
            src={"download.svg"}
            height={200}
            width={200}
            alt="sayyid and shaykh logo"
          />
        </Link>
      </div>
      <div>
        <ul className="capitalize lg:flex md:gap-4 hidden text-sm text-white">
          <li>who we are</li>
          <li>practice areas</li>
          <li>our professionals</li>
          <li>careers</li>
          <li>contact</li>
          <li>language</li>
        </ul>
        <SideNav />
      </div>
    </nav>
  );
};

export default NavbarVarient;