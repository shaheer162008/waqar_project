"use client";
import React, { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Page = () => {

  const services = [
    {
      title: "Banking and Finance",
      description: "Expert legal advice tailored to your needs.",
      image: "/close-up-coins-saved-energy-crisis-expenses.jpg",
    },
    {
      title: "Company Secretraial services",
      description: "Professional advocacy in all legal matters.",
      image: "/court-representation.jpg",
    },
    {
      title: "Commercial",
      description: "Ensure legally sound contracts and agreements.",
      image: "/contract-drafting.jpg",
    },
    {
      title: "Corporate",
      description: "Ensure legally sound contracts and agreements.",
      image: "/contract-drafting.jpg",
    },
    
    {
      title: "Employement & Labour",
      description: "Ensure legally sound contracts and agreements.",
      image: "/contract-drafting.jpg",
    },
    {
      title: "Intellectual Property",
      description: "Ensure legally sound contracts and agreements.",
      image: "/contract-drafting.jpg",
    },
    {
      title: "Private client services",
      description: "Ensure legally sound contracts and agreements.",
      image: "/contract-drafting.jpg",
    },
    {
      title: "Property & Real Estate",
      description: "Ensure legally sound contracts and agreements.",
      image: "/contract-drafting.jpg",
    },
    {
      title: "family law",
      description: "Ensure legally sound contracts and agreements.",
      image: "/contract-drafting.jpg",
    },
    {
      title: "taxation",
      description: "Ensure legally sound contracts and agreements.",
      image: "/contract-drafting.jpg",
    },
  ];

  const imgPath = [
    "grey-marble-column-details-building.jpg",
    "closeup-shot-person-writing-book-with-gavel-table.jpg",
    "still-life-with-scales-justice.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imgPath.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="relative h-[96vh] w-full overflow-hidden flex items-center">
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
                className="h-[96vh] w-full flex-shrink-0"
              >
                <img
                  src={`/${img}`}
                  alt="Hero Image"
                  className="object-cover h-full w-full"
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

          <Button className="capitalize px-4 flex items-center justify-center rounded-none bg-blue-500 py-6">
            get free assistance <MoveRight className="mt-1"/>
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
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="uppercase tracking-widest text-gray-400 font-bold text-lg mb-2">What We Do</h3>
          <h2 className="text-4xl font-extrabold text-blue-500 mb-6">Legal Services</h2>
          <p className="text-gray-700 leading-relaxed">
          With our highly skilled and dynamic team of lawyers and professionals, who practice law with passion and integrity, we are able to provide both our business clients and private clients with a wide range of seamless legal services and strategic guidance across a broad range of specialist practice areas, ensuring excellence in client service at each stage.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
          Working collaboratively with our clients, we endeavour tirelessly with the aim to find innovative solutions to our clients' complex issues, whether those are high-value complex business transactional, regulatory, civil, constitutional or personal issues, or a combination of them.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
          We act as trusted advisers to our clients, committed to developing a deep understanding of their business, the industry and sector they operate in and accordingly providing solutions, customised to their specific needs, and which are also innovative, commercially focused and legally sound.
          </p>
        </div>
        {/* Right Images */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-6">
          <Image
            src="/129364.jpg"
            alt="Legal Consultation"
            width={300}
            height={200}
            className="rounded-lg shadow-md object-cover w-5/12 h-auto"
          />
          <Image
            src="/closeup-shot-person-writing-book-with-gavel-table.jpg"
            alt="Courtroom Scene"
            width={300}
            height={200}
            className="rounded-lg shadow-md object-cover w-5/12 h-auto relative top-16"
          />
        </div>
      </div>
    </section>
    <section className="py-16 px-4 md:px-8 lg:px-16 mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link key={index} href={'/'}>
            <Card className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center px-4">
                    {service.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <p className="text-gray-700">{service.description}</p>
                <p className="mt-3 text-blue-500 font-semibold">Read More →</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
    </main>
  );
};

export default Page;
