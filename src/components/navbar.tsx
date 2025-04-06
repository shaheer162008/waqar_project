'use client'
import SideNav from "./side-nav";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      } fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-30 transition-colors duration-300`}
    >
      <div>
        <Image
          src={"download.svg"}
          height={200}
          width={200}
          alt="sayyid and shaykh logo"
        />
      </div>
      <div>
        <ul className="brightness-110  capitalize lg:flex md:gap-4 hidden text-sm text-white">
          <li><Link href="/firm-overview">who we are</Link></li>
          <li>practice areas</li>
          <li><Link href={'/our-professionals'}>our professionals</Link></li>
          <li><Link href={'/careers'}>careers</Link></li>
          <li><Link href={'/contact'}>contact</Link></li>
          <li>language</li>
        </ul>
        <SideNav />
      </div>
    </nav>
  );
};

export default Navbar;