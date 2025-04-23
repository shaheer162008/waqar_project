"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Heading from "./heading";

interface Client {
  id: number;
  name: string;
  logo: string;
  fallbackText: string;
}

const Clientcarousel = () => {
  // Sample client data - replace with your actual clients
  const clients: Client[] = [
    {
      id: 1,
      name: "Acme Inc",
      logo:"/aman logo.webp",
      fallbackText: "AC",
    },
    {
      id: 2,
      name: "Globex Corpo",
      logo:"/AMIR.webp",
      fallbackText: "GC",
    },
    {
      id: 3,
      name: "Stark Indust",
      logo:"/APH logo.webp",
      fallbackText: "SI",
    },
    {
      id: 4,
      name: "Wayne Enter",
      logo:"/Backup_of_Untitled-1logo.webp",
      fallbackText: "WE",
    },
    {
      id: 5,
      name: "Umbrella Cor",
      logo:"BIS.webp",
      fallbackText: "UC",
    },
    {
      id: 6,
      name: "Oscorp",
      logo:"/cellcinal.webp",
      fallbackText: "OS",
    },
    {
      id: 7,
      name: "Cyberdyne",
      logo:"/CHINATRABS.webp",
      fallbackText: "CY",
    },
    {
      id: 8,
      name: "Initech",
      logo:"/COPHC.webp",
      fallbackText: "IN",
    },
    {
      id: 9,
      name: "Hooli",
      logo:"/GITL.webp",
      fallbackText: "HO",
    },
    {
      id: 10,
      name: "Pied Piper",
      logo:"/GMSL.webp",
      fallbackText: "PP",
    },
    {
      id: 11,
      name: "Pied Piper",
      logo:"/hufa.webp",
      fallbackText: "PP",
    },
    {
      id: 12,
      name: "Pied Piper",
      logo:"/i log.webp",
      fallbackText: "PP",
    },
    {
      id: 13,
      name: "Pied Piper",
      logo:"/IPS.webp",
      fallbackText: "PP",
    },
    {
      id: 14,
      name: "Pied Piper",
      logo:"/ITRANS.webp",
      fallbackText: "PP",
    },
    {
      id: 15,
      name: "Pied Piper",
      logo:"/namal.webp",
      fallbackText: "PP",
    },
    {
      id: 16,
      name: "Pied Piper",
      logo:"/sati tech.webp",
      fallbackText: "PP",
    },
    {
      id: 17,
      name: "Pied Piper",
      logo:"/SBI.webp",
      fallbackText: "PP",
    },
    {
      id: 18,
      name: "Pied Piper",
      logo:"/LOGO AMANULLAH.webp",
      fallbackText: "PP",
    },
    {
      id: 19,
      name: "Pied Piper",
      logo:"/easy marketing letter head1.webp",
      fallbackText: "PP",
    },

  ];

  // Duplicate the clients array to create seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <>
      <div className="container mx-auto px-4">
        <Heading className="text-center pb-4">Our Clients</Heading>
        
        <div className="relative w-full mt-8 ">
          {/* Marquee container */}
          <div className="relative w-full overflow-hidden">
            {/* Marquee content - will be duplicated for seamless looping */}
            <div className="flex w-max animate-marquee whitespace-nowrap">
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`${client.id}-${index}`} 
                  className="inline-flex flex-col items-center justify-center mx-8 w-40"
                >
                  <Avatar className="w-24 h-24 mb-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <AvatarImage 
                      src={client.logo} 
                      alt={client.name}
                      className="object-contain"
                    />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-semibold">
                      {client.fallbackText}
                    </AvatarFallback>
                  </Avatar>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </>
  );
};

export default Clientcarousel
