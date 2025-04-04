'use client'
import  { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Image from "next/legacy/image";
import { Button } from './ui/button';
import { MoveRight } from 'lucide-react';


const CarousalSection = () => {

      useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % imgPath.length);
        }, 6000);
    
        return () => clearInterval(interval);
      }, []);

    const [activeIndex, setActiveIndex] = useState(0);


    const imgPath = [
        "closeup-shot-person-writing-book-with-gavel-table.jpg",
        "grey-marble-column-details-building.jpg",
        "still-life-with-scales-justice.jpg",
      ];

  return (
    <>
        {/* Black Overlay for All Images */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <Carousel className="relative h-[96vh] w-full overflow-hidden">
          <CarouselContent
            className="h-[96vh] flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {imgPath.map((img, index) => (
              <CarouselItem
                key={index}
                className="h-[96vh] relative w-full flex-shrink-0"
              >
                <Image
                key={index}
                  src={"/"+img}
                  layout="fill"
                  alt="Hero Image"
                  className=" object-cover h-full w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Heading & Button (Left Aligned & Vertically Centered) */}
        <div className="absolute flex flex-col gap-5 z-20 max-w-2xl p-4">
          <h1 className="text-2xl text-white md:text-4xl font-bold mb-4 capitalize mt-4">
            sayyid and shaykh : advocate and legal consultant
          </h1>
          <p className="text-sm md:text-md mb-6 text-gray-300 leading-relaxed">
            SAYYID & SHAYKH Advocates and Legal Consultants is an International,
            Civil, Corporate, Commercial, Criminal, and Taxation law firm, which
            provides a full range of high-quality legal services including
            advisory work, merger, and acquisition transaction, consultancy,
            Litigation, and dispute resolution, to Pakistani and International
            businesses, organizations, and institutions. We have a team of
            specialized lawyers with high legal acumen.
          </p>
          <div>
            <Button className="border-2 border-black capitalize px-4 hover:bg-white hover:text-blue-500 hover:border-blue-500 flex items-center justify-center rounded-none bg-blue-500 py-6">
              get free assistance <MoveRight className="mt-1" />
            </Button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {imgPath.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                activeIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
    </>
  )
}

export default CarousalSection