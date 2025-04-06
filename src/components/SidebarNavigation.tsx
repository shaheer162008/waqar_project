// components/SidebarNavigation.tsx
"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SidebarNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:w-64 w-full md:static fixed top-0 left-0 z-50 md:z-auto bg-white shadow md:shadow-none border-b md:border-b-0">
      {/* Mobile Toggle Button */}
      <div className="flex justify-between items-center p-4 md:hidden">
        <h2 className="text-xl font-bold text-blue-700">Menu</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Items */}
      <div className={`${open ? "block" : "hidden"} md:block`}>
        <TabsList className="flex md:flex-col w-full md:h-screen md:justify-start justify-center bg-white text-gray-700 p-4 md:pt-20 gap-2 md:gap-4 border-r border-gray-200">
          <TabsTrigger value="overview" className="w-full text-left">Firm Overview</TabsTrigger>
          <TabsTrigger value="approach" className="w-full text-left">Client Centered Approach</TabsTrigger>
          <TabsTrigger value="values" className="w-full text-left">Culture & Values</TabsTrigger>
        </TabsList>
      </div>
    </div>
  );
}
