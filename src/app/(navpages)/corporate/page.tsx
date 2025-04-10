import { Breadcrumb } from "@/components/Breadcrumb";
import Heading from "@/components/heading";
import LighterText from "@/components/lighter-text";
import { SectionTracker } from "@/components/SectionTracker";
import { CircleCheckBig } from "lucide-react";
import React from "react";

const page = () => (
  <div className="bg-gray-100 min-h-screen p-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-12">
        <Breadcrumb
          items={[
            { label: "Sayyid & Shaykh", href: "/" },
            { label: "Corporate" },
          ]}
        />
        <section data-section-id="Corporate">
          <Heading>Corporate</Heading>
          <LighterText className="mt-4">
            Our team has strong expertise in business and corporate law matters,
            providing distinctively energetic, dynamic, and pragmatic solutions
            to our clients in connection with complex transactional and
            corporate financing matters across a range of industry sectors. Our
            lawyers have advised and acted for a diverse client base, from
            start-ups to multinationals companies, and investors / shareholders
            through to family-run businesses, providing market-leading knowledge
            and facilitating corporate transactions and financing needs of our
            clients.
          </LighterText>
          <LighterText className="mt-4">
            We understand our clients’ business goals and priorities and
            therefore, with our 'one-firm' approach, we are able to work across
            legal disciplines to deliver the optimum solution for their
            organisations in a cost-effective manner.
          </LighterText>
          <LighterText className="mt-4">
            With our specialist legal skills combined with strong business
            acumen, and a network of international lawyers at our associated
            office in the UK providing international perspective and support, we
            provide exceptional strategic advisory and legal counsel on a range
            of corporate matters, including:
          </LighterText>
          <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Negotiations and Pre-Transaction Agreements
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Mergers and Acquisitions (M&As)
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Legal Due Diligence (Buy-Side or Sell-Side)
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Private Equity and Venture Capital Transactions
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Joint Ventures and Strategic Alliances
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Regulatory Compliance
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Shareholders' Agreements, Joint Venture Transactions
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Winding up and Liquidation
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Corporate Governance
              </LighterText>
            </li>
          </ul>
          <LighterText className="mt-4">
            We regularly advise entrepreneurs, start-ups, leading private and
            family businesses, and high net worth individuals and their
            businesses on the day-to-day matters of managing and operating
            companies in line with the legal and regulatory framework governing
            companies, thereby assisting them to navigate through complex,
            industry specific matters.
          </LighterText>
        </section>
        <section data-section-id="Corporate Advisory & Negotiation">
          <Heading>Corporate Advisory & Negotiation</Heading>
          <LighterText className="mt-4">
            Our corporate lawyers are recognized for their legal skills and the
            ability to navigate complex corporate matters with diligence. Due to
            our lawyers having an attentive and proactive approach to our
            clients' business needs, we are regularly engaged by a diverse
            client base, from start-ups to multinationals, family-run businesses
            through to non-profit organizations, and our counsel is sought on a
            range of company law matters, as well as representing clients in
            negotiations on the proposed deal and transaction documents before
            the other party to achieve the best possible outcome.
          </LighterText>
          <LighterText className="mt-4">
            Our corporate advisory, building on extensive local and
            international experience, encompasses a broad range of areas,
            including:
          </LighterText>
          <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                raising financing (through equity and/or debt)
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                shareholders' agreements and dispute resolution
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                directors' duties and liabilities
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                SECP and other regulatory compliance
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                corporate governance issues and compliance
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                board policies and boardroom dispute
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                C-suite service contracts
              </LighterText>
            </li>
          </ul>
          <LighterText className="mt-4">
            We complement our specialist legal expertise with a client-centric
            approach, ensuring exceptional client service and value. In
            addition, we have established a suite of training programmes and
            seminars to keep our clients up-to-date with latest developments in
            regulatory regime as well as enhancing the understanding of our
            clients in fundamental business law principles.
          </LighterText>
        </section>
        <section data-section-id="Family Business">
          <Heading>Family Business</Heading>
          <LighterText className="mt-4">
            Our team, bringing together skills from a variety of legal
            disciplines, is highly proficient in providing comprehensive legal
            services across a range of key industries to family-owned and
            controlled businesses. Our multidisciplinary and meticulous approach
            ensures that we develop a formidable understanding of your business
            and the objectives of your family before providing clear,
            intelligent and pragmatic advice to manage and safeguard your assets
            and support the long-term future for your business and family.
          </LighterText>
          <LighterText className="mt-4">
            We engage with our clients to strategise in a timely manner and
            review the plan regularly.
          </LighterText>
          <LighterText className="mt-4">
            Our expertise and services for family-owned businesses of all sizes
            across a range of sectors include:
          </LighterText>
          <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Business Succession Planning
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Family and Business Governance Agreements
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Business Structuring / Restructuring
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Shareholder and Constitutional Arrangements
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Family Dispute Management and Resolution
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Shariah-compliant Wills and Inheritance Planning
              </LighterText>
            </li>
          </ul>
          <LighterText className="mt-4">
            We engage with our clients to strategise in a timely manner and
            review the plan regularly.
          </LighterText>
        </section>
        <section data-section-id="Mergers & Acquisitions (M&As)">
          <Heading>Mergers & Acquisitions (M&As)</Heading>
          <LighterText className="mt-4">
            Our results-oriented team is focused on making transactions fast,
            smooth, and cost-efficient. Our transaction focus in the M&AS
            practice area is predominantly private company mergers and
            acquisitions involving complex structure and unique considerations,
            although we also routinely advise on business restructuring and
            reorganisation. Our goal is to deliver exceptional value throughout
            each phase of the transaction from diligence, structuring, and
            negotiation through execution and closing, providing seamless
            service to achieve our clients' commercial objectives. Our service
            in this area includes, but is not limited to:
          </LighterText>
          <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Deal Negotiations;
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Letter of Intent / Head of Terms;
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Due Diligence;
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Key Documents Preparation;
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Disclosures;
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Regulatory Compliance; and
              </LighterText>
            </li>
            <li>
              <LighterText className="flex items-center gap-4 uppercase">
                <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                Post-completion formalities.
              </LighterText>
            </li>
          </ul>
          <LighterText className="mt-4">
            Our corporate lawyers, with strong support from other practice areas
            and a network of specialist consultants, also regularly advise on
            the incorporation and structuring of joint venture arrangements
            between corporate entities and institutional investors, including
            SPV formation, funding, commercial terms, tax implications,
            termination and dispute management.
          </LighterText>
        </section>
        <section data-section-id="Startup & Emerging Companies">
            <Heading>Startup & Emerging Companies</Heading>
          <LighterText className="mt-4">
            We represent and advise start-up and early stage companies across
            diverse sectors, and work with these companies from formation
            through to their development, growth and expansion stages. Working
            closely with these emerging companies, we advise on a broad spectrum
            of matters including selecting a business structure, assisting with
            their financing needs, whether debt or equity, and subsequent exit
            strategy and investment realization. Whatever the needs of a startup
            and early stage companies are, we have the capabilities and
            practical experience to provide the legal services essential to
            their success.
          </LighterText>
        </section>
      </div>
      <SectionTracker
        className="hidden lg:block"
        items={[
          {
            id: "Corporate",
            title: "Corporate",
          },
          {
            id: "Corporate Advisory & Negotiation",
            title: "Corporate Advisory & Negotiation",
          },
          {
            id: "Family Business",
            title: "Family Business",
          },
          {
            id: "Mergers & Acquisitions (M&As)",
            title: "Mergers & Acquisitions (M&As)",
          },
          {
            id: "Startup & Emerging Companies",
            title: "Startup & Emerging Companies",
          },
        ]}
      />
    </div>
  </div>
);

export default page;
