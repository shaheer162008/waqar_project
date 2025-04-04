"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navLinks } from "../../constants";

const SideNav = () => {
  return (
    <div className="flex lg:hidden text-white">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-white w-64 p-6 flex flex-col space-y-6">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold text-gray-900">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4">
           {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="pb-2 relative text-gray-800 text-lg font-medium hover:text-blue-500 transition-all duration-300"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500"></span>
              </Link>
            ))}
          </nav>
          <Button className=" border-2 border-black rounded-none absolute bottom-4 bg-blue-500 hover:bg-blue-600 text-white">
            Get Free Consultation
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideNav;
