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
              { label: "Intellectual Property" },
            ]}
          />
          <section data-section-id="Intellectual Property">
            <Heading>Intellectual Property</Heading>
            <LighterText className="mt-4">
              We offer a broad range of services in the trademark area of
              Intellectual Property Law. We advise clients of all types, from
              start-up businesses to established organisations, on how to
              protect, maintain and enforce their trademark and brand identity.
            </LighterText>
            <LighterText className="mt-4">
            We advise on a full range of contentious and non-contentious matters including:
            </LighterText>
            <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Trademark search and trademark registration applications
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Trademark licensing, franchising, assignment, and distribution agreements
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Registered and unregistered trade mark rights, and
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Assisting clients with trade mark opposition and cancellation actions
                </LighterText>
              </li>
              </ul>
          </section>
        </div>
        <SectionTracker
          className="hidden lg:block"
          items={[
            {
              id: "Intellectual Property",
              title: "Intellectual Property",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
