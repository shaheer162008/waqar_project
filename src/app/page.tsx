import Image from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Heading from "@/components/heading";
import Clientcarousel from "@/components/client-carousel";
import ContactUs from "@/components/contact-us";
import LighterLogo from "@/components/lighter-logo";
import LighterText from "@/components/lighter-text";
import CarousalSection from "@/components/CarousalSection";
import { services } from "../../constants";
import { Button } from "@/components/ui/button";
import TawkMessenger from "@/components/tawk-messenger-react";
import Navbar from "@/components/navbar";

const Page = () => {
  return (
    <>
    <Navbar/>
    <main>
      <section className="relative h-[96vh] w-full overflow-hidden flex items-center">
        <CarousalSection/>
    </section>
      {/*  what we do section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <LighterLogo className="text-center sm:text-left mb-2 text-gray-400">
              What We Do
            </LighterLogo>
            <Heading className="text-center sm:text-left">
              Legal Services
            </Heading>
            <LighterText className="text-gray-700">
              With our highly skilled and dynamic team of lawyers and
              professionals, who practice law with passion and integrity, we are
              able to provide both our business clients and private clients with
              a wide range of seamless legal services and strategic guidance
              across a broad range of specialist practice areas, ensuring
              excellence in client service at each stage.
            </LighterText>
            <LighterText className="mt-2 text-gray-700">
              Working collaboratively with our clients, we endeavour tirelessly
              with the aim to find innovative solutions to our clients' complex
              issues, whether those are high-value complex business
              transactional, regulatory, civil, constitutional or personal
              issues, or a combination of them.
            </LighterText>
            <LighterText className="mt-2 text-gray-700">
              We act as trusted advisers to our clients, committed to developing
              a deep understanding of their business, the industry and sector
              they operate in and accordingly providing solutions, customised to
              their specific needs, and which are also innovative, commercially
              focused and legally sound.
            </LighterText>
          </div>
          {/* Right Image */}
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <Image
              src="/129364.jpg"
              alt="Legal Consultation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 lg:px-16 mt-8">
        <Heading className="text-center pb-4">Our Services</Heading>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <Card className="relative rounded-none overflow-hidden shadow-lg hover:shadow-2xl pt-0 transition duration-300 transform hover:scale-105 cursor-pointer">
                <div className="relative w-full h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-black text-xl capitalize font-bold text-center px-2">
                    {service.title}
                  </h3>
                  <div className="mt-4 text-black font-semibold ">
                    <Button className="border py-2 px-4 border-black bg-transparent text-black rounded-none hover:bg-transparent cursor-pointer">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-black/100 py-16 px-6 md:px-16 text-white relative">
        <div className="absolute inset-0">
          <Image
            src="/two-successful-businessmen-discussing-business.jpg" // Replace with your actual background image
            alt="Banner Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-8">
          {/* Heading */}
          <h2 className="text-white brightness-110 text-3xl md:text-4xl font-bold text-center md:text-left max-w-md">
            Request a Free Consultation With Sayyid & Shaykh
          </h2>
          {/* Description */}
          <p className="text-white text-lg brightness-110 text-center max-w-3xs">
            We will respond to your query within 24 hours.
          </p>
          {/* CTA Button */}
          <Link 
            href="/contact"
            className="bg-blue-500 text-sm border-2 border-white hover:text-blue-500 hover:border-blue-500 text-white brightness-110 py-3 px-6 rounded-none shadow-md hover:bg-gray-200 transition"
          >
            Contact Us Now ⟶
          </Link>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <Clientcarousel />
      </section>
      <section id="contact-us" className="py-16 px-4 md:px-8 lg:px-16 bg-blue-500 text-white ">
        <ContactUs />
      </section>
            <TawkMessenger/>
    </main>
    </>
  );
};

export default Page;
