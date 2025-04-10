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
              { label: "Company Secretarial Services" },
            ]}
          />
          <section data-section-id="Company Secretarial Services">
            <Heading>Company Secretarial Services</Heading>
            <LighterText className="mt-4">
              In order to ensure that companies are in compliance with the
              statutory framework governing companies, and to avoid penalties
              and regulatory issues due to non-compliance, we assist both local
              and foreign companies with a range of company secretarial and
              administrative services, including:
            </LighterText>
            <ul className=" list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  Advising on all aspects of company law and compliance
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  Company formation
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  Preparation and filing of statutory forms and resolutions,
                  e.g. appointment and resignation of officers, annual returns,
                  etc.
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  Ensuring compliance with statutory deadlines and procedures
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  Processing transfer of shares and issuing share certificates &
                  Securitization
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  If required, preparation of resolutions and board minutes
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  Maintaining and updating registers and statutory records of
                  the company
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  Act as proxies and nominee shareholders
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  Keeping you informed of important compliance deadlines
                </LighterText>
              </li>
            </ul>
          </section>
          <section data-section-id="Company Formation">
            <Heading>Company Formation</Heading>
            <LighterText className="mt-4">
              We are regularly instructed by both local and foreign companies /
              promoters to provide assistance with the incorporation of a
              company / foreign company. Accordingly, we provide end-to-end
              service with regards to the incorporation of:
            </LighterText>
            <ul className=" list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  private company
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  public company and
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />{" "}
                  not-for-profit company (Section 42 - Companies Act 2017).
                </LighterText>
              </li>
            </ul>
            <LighterText className="mt-4">
              We have also advised clients with regards to establishing trade
              organisations with the Directorate General of Trade Organisations
              (DGTO), under the Trade Organisation Act 2013.
            </LighterText>
            <LighterText className="mt-4">
              Our methodological approach to company incorporation means that we
              work closely with our clients, understanding their business and
              sector in which they wish to operate, followed by providing
              strategic guidance and undertaking the applicable procedure to
              ensure effective and timely completion of the incorporation
              process.
            </LighterText>
          </section>
        </div>
        <SectionTracker
          className="hidden lg:block"
          items={[
            {
              id: "Company Secretarial Services",
              title: "Company Secretarial Services",
            },
            {
              id: "Company Formation",
              title: "Company  Formation",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
