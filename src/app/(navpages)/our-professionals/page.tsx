import { Breadcrumb } from "@/components/Breadcrumb";
import Heading from "@/components/heading";
import LighterText from "@/components/lighter-text";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <Breadcrumb
            items={[{ label: "Sayyid & shaykh", href: "/" }, { label: "Our Professionals" }]}
          />

          <section>
            <Heading>Our Professionals</Heading>
            <LighterText>
              At Sayyid & Shaykh, our clients range from multinational companies
              to sole proprietorships. Regardless of size and sector, we treat
              every client like our most important one, providing strategic
              legal counsel that is tailored to your business and the unique
              issues you face.
            </LighterText>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
