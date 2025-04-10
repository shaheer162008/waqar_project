import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from "next/link"
import LighterText from "./lighter-text"
import { cn } from "@/lib/utils"
import { Service } from "../../types/services";
import { Button } from "./ui/button";

export interface PracticeAreaDropdownProps {
  title: string;
  className?: string;
  items: Service[] ; // Accepts an array of Service objects or strings
}

interface IterateProps {
  title: string;
  link: string;
}

const changeLanguage = (language: string) => {
  // Implement your language change logic here
  console.log(`Changing language to: ${language}`);
};

const PracticeAreaDropdown = ({ title, className, items }: PracticeAreaDropdownProps) => {
  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent p-0 m-0 font-normal">{title}</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            {items &&
              items.map((service: IterateProps, index) => {
                // Check if the service.link value is "english" or "chinese"
                return service.link === "english" || service.link === "chinese" ? (
                  <Button
                    key={index}
                    onClick={() => {changeLanguage(service.title)}}
                    
                  >
                    {service.title}
                  </Button>
                ) : (
                  <Link href={service.link} key={index}>
                    <NavigationMenuLink
                      key={index}
                      className={cn(
                        className,
                        "w-auto px-4 py-2 text-gray-800 text-sm font-normal hover:text-blue-800 hover:bg-gray-100 transition-colors duration-300"
                      )}
                    >
                      <LighterText>{service.title}</LighterText>
                    </NavigationMenuLink>
                  </Link>
                );
              })}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default PracticeAreaDropdown;