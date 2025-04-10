'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import LighterText from "@/components/lighter-text";
import Heading from "./heading";
import { Breadcrumb } from "./Breadcrumb";

interface Category {
  title: string;
  href: string;
}

interface CategoryListProps {
  slug: string;
}

export async function fetchItems(slug: string): Promise<any> {
  try {
    const response = await fetch(`/api/getdata?variable=${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for slug: ${slug}`);
    }
    const data = await response.json();
    return data.data; // Return the items from the API response
  } catch (error) {
    console.error(error);
    return null; // Return null in case of an error
  }
}

const CategoryList: React.FC<CategoryListProps> = ({ slug }) => {
  const [items, setItems] = useState<Category[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems(slug);
      if (data) {
        setItems(data);
      }
    };

    getItems();
  }, [slug]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">

     
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
            <Breadcrumb
                        items={[
                          { label: "Statutes", href: "/statutes" },
                          { label: slug.replace(/_/g, " ") },
                        ]}
                      />
          <section>
            <Heading className="border-b-2 border-black pb-2">
                {slug.replace(/_/g, " ").toUpperCase()}
            </Heading>

            {/* List of Categories */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FileText className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <p className=" leading-relaxed font-semibold">
                          {category.title}
                      </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;