import SideNav from "./side-nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { languages, navLinks, services } from "../../constants";
import PracticeAreaDropdown from "./practice-area-dropdown";

const NavbarVarient = () => {
  return (
    <nav className="sticky top-0 left-0 w-full px-8 py-4 flex justify-between items-center bg-black z-30">
      <div>
        <Link href="/" className="cursor-pointer">
          <Image
            src={"/download.svg"}
            height={200}
            width={200}
            alt="sayyid and shaykh logo"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div>
        <ul className="capitalize lg:flex md:gap-4 hidden text-sm text-white">
        {
            navLinks.map((item,index)=>{
              if(item.name==="Practice Areas"){
                return (
                  <li key={index}>
                  <PracticeAreaDropdown title="Practice Area" items={services} className="whitespace-nowrap"/>
                  </li>
                )
              }else if(item.name==="Language"){
                return (
                  <li key={index}>
                  <PracticeAreaDropdown title="Language" items={languages}/>
                  </li>
                )
              }
              return(
                <li key={index}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
              )
            })
          }
        </ul>
        <SideNav />
      </div>
    </nav>
  );
};

export default NavbarVarient;