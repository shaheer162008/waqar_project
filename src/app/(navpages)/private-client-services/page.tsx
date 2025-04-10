import { Breadcrumb } from "@/components/Breadcrumb";
import Heading from "@/components/heading";
import LighterText from "@/components/lighter-text";
import { SectionTracker } from "@/components/SectionTracker";
import { CircleCheckBig } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <Breadcrumb
            items={[
              { label: "Sayyid & Shaykh", href: "/" },
              { label: "Private Clients Services" },
            ]}
          />
          <section data-section-id="Private Clients Services">
            <Heading>Private Clients Services</Heading>
            <LighterText className="mt-4">
              We provide comprehensive and cost-effective legal services and
              advice to individuals, ranging from entrepreneurs and landowners
              to High Net Worth Individuals (HNWI). Our lawyers provide
              strategic, high-quality, and practical legal solutions to your
              issues relating to:
            </LighterText>
            <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Inheritance and succession matters
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Personal Immigration to UK (Work, Study, Investment, Family)
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Residential / commercial property acquisition and conveyancing
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Family law
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Commercial matters and transactions
                </LighterText>
              </li>
            </ul>
          </section>
          <section data-section-id="Succession & Estate Administration">
            <Heading>Succession & Estate Administration</Heading>
            <LighterText className="mt-4">
              We offer extensive technical expertise to High Net Worth
              Individuals, in respect of inheritance and succession matters
              involving complex issues arising out of local and cross-border
              estate left by deceased family member. We have a strong and
              specialist knowledge of the conflict of laws issues which arise in
              situations where assets and estate of the deceased are in
              different jurisdictions (countries) and are able to help you
              navigate the complexities with efficient and compassionate advice.
            </LighterText>
          </section>
        </div>
        <SectionTracker
          className="hidden lg:block"
          items={[
            {
              id: "Private Clients Services",
              title: "Private Clients Services",
            },
            {
              id: "Succession & Estate Administration",
              title: "Succession & Estate Administration",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
