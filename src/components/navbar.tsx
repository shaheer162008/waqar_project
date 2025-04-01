import SideNav from "./side-nav";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center bg-transparent z-30">
      <div>
        <Image
          src={"download.svg"}
          height={200}
          width={200}
          alt="sayyid and shaykh logo"
        />
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

export default Navbar;