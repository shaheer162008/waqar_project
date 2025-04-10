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
              { label: "Commercial" },
            ]}
          />
          <section data-section-id="Commercial">
            <Heading>Commercial</Heading>
            <LighterText className="mt-4">
              In order for businesses to capitalise on existing opportunities
              and to ensure smooth operations, they require clear and strong
              commercial agreements. A well drafted commercial contract
              mitigates the risk for dispute and comprehensively sets out the
              obligations of the parties, thereby ensuring certainty in business
              relations.
            </LighterText>
            <LighterText className="mt-4">
              As part of its commercial practice, Sayyid & Shaykh provides broad
              legal services across a range of industry sectors. Our local and
              international lawyers, with extensive experience in advising
              national and international business clients, are able to deliver
              clear and intelligent commercial contracts, contemporaneously
              providing guidance on best practices with regards to such
              contracts, with a view to ensuring that our clients can achieve
              their strategic, commercial and business goals.
            </LighterText>
            <LighterText className="mt-4">
              We can deal with commercial contracts of virtually all
              descriptions, including but not limited to:
            </LighterText>
            <ul className=" list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> negotiating and
                  drafting commercial contracts
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> cross-border
                  joint venture, partnership and collaboration agreements
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> consultancy
                  agreements
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> IT agreements
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> corporate
                  agreements (shareholders' agreements, etc.)
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> supply and
                  distribution agreements
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> franchising
                  agreements
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> service
                  agreements
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> sale and purchase
                  agreements
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> standard business
                  terms and conditions
                </LighterText>
              </li>
            </ul>
            <LighterText className="mt-4">
              Our lawyers understand the value of enhancing the clients'
              business, through risk management and leveraging opportunities,
              and accordingly address all commercial matters meticulously with
              useful business insight.
            </LighterText>
          </section>
        </div>
        <SectionTracker className="hidden lg:block" 
                  items={[
                    {
                      id: "Commercial",
                      title: "Commercial",
                    },
                  ]}
                />
      </div>
    </div>
  );
};

export default page;
