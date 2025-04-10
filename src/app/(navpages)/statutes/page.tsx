import { Breadcrumb } from "@/components/Breadcrumb";
import Heading from "@/components/heading";
import LighterText from "@/components/lighter-text";
import Link from "next/link";
import React from "react";
import { statuteCategories } from "../../../../constants";
import { FileText } from "lucide-react";

const page = () => {
  return (
    <>
    <div className="p-4">

     <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Statutes" }]} 
            />
            </div>

    <h2 className={"text-4xl font-extrabold p-3  text-white bg-blue-500 text-center"}>
                  PAKISTANI LAWS
                </h2>
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
         
          <section>
            <h3 className="mb-4 text-3xl font-bold border-b-2 border-black pb-2">Statutes</h3>

            {/* Updated List */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {statuteCategories.map((category, index) => (
               <Link
               key={index}
               href={`/statutes/${category
                 .toLowerCase()
                 .replace(/ /g, "_") // Replace spaces with underscores
                 .replace(/,/g, "") // Remove commas
                 .replace(/-/g, "") // Remove hyphens
                 .replace(/&/g, "and") // Replace "&" with "and"
               }`}
               className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors"
             >
                  <FileText className="w-6 h-6 text-blue-500 flex-shrink-0" />{" "}
                  {/* Lucide Icon */}
                  <LighterText className="font-semibold">{category}</LighterText>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
