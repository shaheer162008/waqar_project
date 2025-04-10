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
              { label: "Taxation" },
            ]}
          />
          <section data-section-id="Taxation">
            <Heading>Taxation</Heading>
            <LighterText className="mt-4">
              Sayyid & Shaykh Advocates and Legal Consultants is supervised and
              managed by a team of specialized lawyers with high legal acumens
              and armed with top-notch skills in direct and indirect taxation.
              As a tax consultant, we assist our respected clients in tax
              planning to enhance the tax efficiency within legal parameters in
              addition to that, providing planning and advising on strategizing
              tax implications.
            </LighterText>
            <LighterText className="mt-4">
              We believe in developing a close relationship with our respected
              clients, which enables us to understand the business process which
              is of core importance in recommending a suitable tax-efficient
              business model. We provide a work environment for our people that
              attracts, develops, and challenges the most talented
              professionals. We handle matters of every type and size ranging
              from individuals to multinational organizations.
            </LighterText>
            <LighterText className="mt-4">
              The services offered by the S&S can be categorized into the
              following segments;
            </LighterText>
          </section>
          <section data-section-id="Income Tax Advisory Services">
            <Heading>Income Tax Advisory Services</Heading>
            <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Advice and opinions on the matters of Income Tax both written
                  and oral
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Advice and updating of new tax laws applicable to the company,
                  AOP, and individual
                </LighterText>
              </li>
            </ul>
          </section>
          <section data-section-id="Income Tax Compliance Services">
            <Heading>Income Tax Compliance Services</Heading>
            <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  E-filing of withholding tax statements on the month-to-month
                  basis within the given timeframe
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  The advice in computing advance income tax on a quarterly
                  basis and the related intimation to the department
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  The advice in computing capital gain tax and the related
                  intimation to the department
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Preparation of income tax provisions of the company
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Computation of total income of the taxable person and tax
                  thereon
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Preparation and filing of Annual Income Tax Return of the
                  Company, AOP
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Compliance of legal notices in connection with withholding tax
                  audit proceedings under Income Tax Ordinance, 2001
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Compliance of legal notices in connection with income tax
                  amendments proceedings
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Preparation of income tax return of an individual
                </LighterText>
              </li>
            </ul>
          </section>
          <section data-section-id="Indirect Taxation Services (Federal And Provincial Taxes)">
            <Heading>
              Indirect Taxation Services (Federal And Provincial Taxes)
            </Heading>
            <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Sales tax return review and advisory services
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Compliance of legal notices with respect to the sales tax
                  return and representations thereof
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Provincial return and advisory services
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Compliance of monthly sales tax return
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Making representations before the Commissioner of Inland
                  Revenue (Appeals) and/or Appellate Tribunal and/or higher
                  authorities
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Preparation and follow up of refund cases
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Representation for sales tax audit proceedings
                </LighterText>
              </li>
            </ul>
          </section>
        </div>
        <SectionTracker
          className="hidden lg:block"
          items={[
            {
              id: "Taxation",
              title: "Taxation",
            },
            {
              id: "Income Tax Advisory Services",
              title: "Income Tax Advisory Services",
            },
            {
              id: "Income Tax Compliance Services",
              title: "Income Tax Compliance Services",
            },
            {
              id: "Indirect Taxation Services (Federal And Provincial Taxes)",
              title:
                "Indirect Taxation Services (Federal And Provincial Taxes)",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
