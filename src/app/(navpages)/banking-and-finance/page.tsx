import { Breadcrumb } from "@/components/Breadcrumb";
import Heading from "@/components/heading";
import LighterText from "@/components/lighter-text";
import { SectionTracker } from "@/components/SectionTracker";
import { CircleCheckBig } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "Banking & Finance Legal Services | Sayyid & Shaykh",
  description: "Looking for  services in Pakistan or globally? Sayyid & Shaykh Advocates provide expert legal solutions in 2025."
};

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <Breadcrumb
            items={[
              { label: "Sayyid & Shaykh", href: "/" },
              { label: "Banking & Finance" },
            ]}
          />
          <section data-section-id="Banking And Finance">
            <Heading className=" capitalize">Banking and finance</Heading>
            <LighterText className="mt-4">
              We offer a broad range of banking and financial legal services. We
              take pride in providing dynamic solutions and timely services to
              lenders and borrowers dealing with financing and security matters,
              ensuring that the transaction is completed on time.
            </LighterText>
            <LighterText className="mt-4">
              Our team, with considerable expertise and experience across
              virtually all types of financing facility (funded and unfunded)
              and securitization, is regularly involved in representing clients
              with respect to structuring, negotiating and documenting
              sophisticated and complex financing transactions, in matters
              ranging from real estate and asset-based finance, lease finance,
              Islamic finance, multi-lender syndicated loans to general
              corporate, commercial and consumer secured or unsecured lending.
            </LighterText>
            <LighterText className="mt-4">
              In addition, our lawyers have advised and assisted some of the
              leading local and international banks and financial institutions,
              including Non-Banking Financial Institutions (NBFIs), in producing
              and updating their standard template banking and finance
              documents, banking products development and standardised terms and
              conditions. We are able to provide legally and technically sound
              advice, as our team handles all banking and financing matters from
              both commercial viewpoint, as well as the regulatory aspect.
            </LighterText>
            <LighterText className="mt-4">
              Our team is also highly proficient in Islamic financing, advising
              Modarabas and Islamic banks on their Islamic financing
              transactions, including structuring, documentation and
              securitization, as well as development of Shariah-compliant
              products. Our expertise in Islamic finance include structuring on:
              (a) Murabaha, (b) Mushraka / Diminishing Musharaka, (c) Ijara, and
              (d) Istisna. Our formidable understanding of the principle of
              Shariah-compliant banking, coupled with our knowledge of current
              scholars' interpretations and the evolution of market practice for
              Islamic financing, enables us to work closely with Islamic
              financial institutions in devising innovative and leading-edge
              financing structures and products, ensuring that risks are
              minimized and our clients are able to leverage the opportunities
              available.
            </LighterText>
            <LighterText className="mt-4">
              We assist and advise our clients in structuring, documenting and
              ultimately closing a wide range of financing transactions
              including:
            </LighterText>
            <ul className=" list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Corporate Lending
                  & Securitization
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Asset-Based
                  Lending
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Receivables
                  Financing
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Lease Financing
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Bilateral and
                  Syndicate Lending
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Islamic Finance
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> General
                  Commercial Lending
                </LighterText>
              </li>
            </ul>
            <LighterText className="mt-4">
              We also provide additional support to clients through regular
              seminars, workshops, briefings and in-house training.
            </LighterText>
          </section>
          <section data-section-id="Corporate Finance">
            <Heading>Corporate Finance</Heading>
            <LighterText className="mt-4">
              Our lawyers regularly advise borrowers and lenders on the full
              spectrum of secured and unsecured corporate and commercial lending
              transactions, including but not limited to, bilateral and
              syndicate asset-based financing, financing of private business
              acquisitions (by way of both share and asset purchases),
              receivables financing, bridge financing and real estate finance,
              in line with the legal and regulatory framework in Pakistan.
            </LighterText>
            <LighterText className="mt-4">
              With a combination of skills, breadth of experience and
              geographical reach, we are strongly positioned in preparing
              standard and unique loan documentation and security structures
              with a commitment of providing the best possible service for our
              clients, however big or small the project. In each transaction
              that we are involved in, we are focused on closing the deal in an
              effective and timely manner, whilst protecting each side’s
              interests.
            </LighterText>
          </section>
          <section data-section-id="Banking Dispute & Ligitation">
            <Heading>Banking Dispute & Ligitation</Heading>
            <LighterText className="mt-4">
              Our litigation and dispute resolution lawyers are highly
              experienced in all aspects of banking litigation and enforcement
              of securities. We provide strategic, cost-efficient and seamless
              service to banks and financial institutions, before the Banking
              Courts as well as Sindh High Court at Karachi, in respect of
              recovery of finances by way of enforcement of corporate and
              consumer finance documents and related securities.
            </LighterText>
            <LighterText className="mt-4">
              In addition, our lawyers also provide ongoing counsel to financial
              institutions on governmental regulatory and enforcement matters
              (e.g. FIA, SRB, SBP etc.), litigation and transaction risks, and
              dispute-resolution mechanisms.
            </LighterText>
          </section>
          <section data-section-id="Islamic Finance">
            <Heading>Islamic Finance</Heading>
            <LighterText className="mt-4">
              Our banking and finance lawyers possess specialist understanding
              of the principles and requirements underpinning Shariah-compliant
              finance, and working closely with the Shariah advisors of leading
              Islamic banks and Modarabas, have advised on structuring of
              complex syndicate Islamic financing transactions, investments, and
              products.
            </LighterText>
            <LighterText className="mt-4">
            Our expertise in Islamic Finance includes, but is not limited to, the following:
            </LighterText>
            <ul className=" list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Sukuk
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Murabaha
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Musharaka, including Diminishing Musharaka
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Ijarah
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Istisna
                </LighterText>
              </li>
              </ul>
          </section>
        </div>
        <SectionTracker
          className="hidden lg:block"
          items={[
            {
              id: "Banking And Finance",
              title: "Banking And Finance",
            },
            {
              id: "Corporate Finance",
              title: "Corporate Finance",
            },
            {
              id: "Banking Dispute & Ligitation",
              title: "Banking Dispute & Ligitation",
            },
            {
              id: "Islamic Finance",
              title: "Islamic Finance",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
