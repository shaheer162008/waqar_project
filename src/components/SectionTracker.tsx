'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle, ChevronRight } from "lucide-react"; // Updated icons
import { useEffect, useState } from "react";

export function SectionTracker({ items , className }: { items: { id: string; title: string; text: string }[],className?:string }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("[data-section-id]");
      let current = "";
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          current = heading.getAttribute("data-section-id") || "";
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(`[data-section-id='${id}']`);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <Card className={cn(className,"fixed top-40 right-10 w-80 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl p-6 z-50 border border-gray-300 hover:shadow-2xl transition-shadow duration-300")}>
      <CardHeader className="pb-4 border-b border-gray-300">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-blue-600" /> {/* Updated icon */}
          In This Section
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer transition-all mt-2 ${
                active === item.id
                  ? "text-blue-700 font-bold scale-105 bg-blue-100 rounded-lg p-4 shadow-lg"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg  p-4"
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              <div className="flex items-center space-x-4 ">
                <ChevronRight
                  className={`w-5 h-5 ${
                    active === item.id ? "text-blue-700" : "text-gray-400"
                  }`}
                />
                <span className="text-base leading-tight tracking-wide">{item.title}</span>
              </div>
              {active === item.id && (
                <div className="relative bg-blue-600 h-[3px] w-full rounded-full"></div>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
