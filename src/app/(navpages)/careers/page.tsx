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
            items={[
              { label: "Sayyid & shaykh", href: "/" },
              { label: "Careers" },
            ]}
          />

          <section>
            <Heading>Careers</Heading>
            <LighterText>
              Sayyid & Shaykh has a workplace that is professional,
              team-oriented, and collegial where diverse talents and skills are
              highly valued. At Sayyid & Shaykh, you will be part of our legal
              team and will be encouraged to innovate, strategize and
              collaborate on complex legal matters for sophisticated clients.
            </LighterText>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
