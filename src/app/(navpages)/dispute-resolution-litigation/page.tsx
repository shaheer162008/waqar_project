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
              { label: "Dispute Resolution / Litigation" },
            ]}
          />
          <section data-section-id="Dispute Resolution / Litigation">
            <Heading>Dispute Resolution / Litigation</Heading>
            <LighterText className="mt-4">
              Sayyid & Shaykh's litigation and dispute resolution specialists
              can help you resolve your complex and stressful contentious
              matters, in a broad spectrum of legal areas. We are passionately
              committed to providing the highest quality of legal representation
              and litigation to our clients. We work closely with our clients to
              assess their needs and objectives at the outset of the dispute,
              followed by providing practical advice on the merits of the case
              and exploring all available options for its resolution, including
              offering our clients our services of information negotiations and
              mediation.
            </LighterText>
            <LighterText className="mt-4">
              Where out-of-court settlement is not an option, we are tenacious
              and effective litigators, experienced in handling challenging
              litigation with a multifaceted approach. We take pride in claiming
              that our standards of client care, quality of advice, and the
              manner of delivery is equally at par with our services in other
              practice areas. This means that we are highly responsive,
              approachable, and act quickly to provide clear advice, ensuring
              that our clients are always well informed with the status and
              progress of their matter. In addition, with our innovative
              litigation management tools, we are able to enhance efficiencies
              and prompt delivery of communication and correspondence in all
              cases.
            </LighterText>
            <LighterText className="mt-4">
              We provide legal representation and litigation services before the
              District Courts at Karachi, Sindh High Court at Karachi, as well
              as appearing before quasi-judicial forums and tribunals, in the
              following areas:
            </LighterText>
            <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  banking dispute and recovery of finances
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  civil dispute
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  commercial and contractual dispute
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  constitutional law and statutory rights enforcement
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  defamation and reputation management
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  employment dispute
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  intellectual property dispute
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  property and real estate dispute
                </LighterText>
              </li>
            </ul>
            <LighterText className="mt-4">
              Our client base comprises of public and private companies, banks
              and financial institutions, high net worth individuals, family
              businesses, non-profit organisations, and expatriate and overseas
              Pakistani nationals.
            </LighterText>
            <LighterText className="mt-4">
              We are also able to effectively handle cross-border litigation in
              the UK, through our litigation experts at our associated office in
              the UK.
            </LighterText>
          </section>
          <section data-section-id="Banking Dispute & Litigation">
            <Heading>Banking Dispute & Litigation</Heading>
            <LighterText className="mt-4">
              We represent banks and financial institutions in a variety of
              contentious matters, but primarily act for recovery of finances
              availed by consumer and corporate clients, under financing and
              security documents. Our approach is swift and effective, working
              closely with the in-house counsels of the banks, ensuring that any
              external risks are adequately mitigated.
            </LighterText>
          </section>
          <section data-section-id="Civil Dispute & Litigation">
            <Heading>Civil Dispute & Litigation</Heading>
            <LighterText className="mt-4">
              We act for businesses and private clients in respect of dispute
              arising out of their civil rights, seeking to claim damages,
              specific performance or injunction. The civil right may accrue in
              a variety of areas, including landlord and tenants dispute, family
              law dispute, money claims, defamation, partnership dispute etc. We
              adopt a results-oriented approach and discuss the merits of the
              claim with the client before undertaking to represent them.
            </LighterText>
            <LighterText className="mt-4">
              Once we are engaged, we adopt an agile and effective legal
              strategy to ensure the most favourable outcome for our client.
              Where necessary, we can act quickly to obtain injunctions to
              prevent any future damage to our client. One distinguishing
              element of our firm is that we keep our clients apprised of the
              status of the case on a frequent basis, by sharing case updates,
              upcoming hearings, and all necessary information so that our
              clients are at ease.
            </LighterText>
          </section>
          <section data-section-id="Commercial & Contractual Dispute">
            <Heading>Commercial & Contractual Dispute</Heading>
            <LighterText className="mt-4">
              We understand that contractual and commercial dispute can be
              damaging to our business and private clients alike and requires
              careful handling and urgent response. Our team of litigation
              lawyers are experienced in handling commercial and contractual
              dispute in a diligent and responsive manner.
            </LighterText>
            <LighterText className="mt-4">
              We represent clients before the High Courts and District Courts at
              Karachi, in dispute arising out of breach of contracts and
              commercial dealings, shareholder dispute, professional negligence,
              regulatory breaches, breaches of employment contracts, breach of
              intellectual property rights etc. In the event of a dispute, we
              help our clients navigate seamlessly through the full life cycle
              of the litigation case and ensure that our clients are kept
              updated at each stage of the matter.
            </LighterText>
          </section>
          <section data-section-id="Constitutional Rights & Litigation">
            <Heading>Constitutional Rights & Litigation</Heading>
            <LighterText>
              We act for clients in matters concerning complex mix of legal,
              commercial and constitutional factors centered around issues of
              fairness and justice, as provided under the Constitution of
              Islamic Republic of Pakistani, 1973. We advise our clients on
              their constitutional rights, as well as the remedies available to
              them, and are able to expeditiously initiate writ / constitutional
              petitions before the High Court under the applicable provision of
              Article 199 of the Constitution.
            </LighterText>
            <LighterText>
              In addition, we also invoke the constitutional jurisdiction of the
              High Court, in matters pertaining to protection or preservation of
              the rights of the general public, through our Public Interest
              Litigation division.
            </LighterText>
          </section>
          <section data-section-id="Property & Real Estate Dispute">
            <Heading>
            Property & Real Estate Dispute
            </Heading>
            <LighterText className="mt-4">
            Our litigation team is well equipped to represent business and private clients in dispute arising out of property and real estate related transactions. We advise on diverse array of matters in this area, including commercial and residential landlord and tenant dispute, contractual interpretation (agreements for sale, sale deeds), planning and construction dispute etc. Our litigators are approachable, persuasive, and possess excellent advocacy skills and are dedicated to achieve the best possible outcome for our clients.
            </LighterText>
          </section>
        </div>
        <SectionTracker
          className="hidden lg:block"
          items={[
            {
              id: "Dispute Resolution / Litigation",
              title: "Dispute Resolution / Litigation",
            },
            {
              id: "Banking Dispute & Litigation",
              title: "Banking Dispute & Litigation",
            },
            {
              id: "Civil Dispute & Litigation",
              title: "Civil Dispute & Litigation",
            },
            {
              id: "Commercial & Contractual Dispute",
              title: "Commercial & Contractual Dispute",
            },
            {
              id: "Constitutional Rights & Litigation",
              title: "Constitutional Rights & Litigation",
            },
            {
              id: "Property & Real Estate Dispute",
              title: "Property & Real Estate Dispute",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
