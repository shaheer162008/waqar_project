import { Breadcrumb } from "@/components/Breadcrumb";
import Heading from "@/components/heading";
import LighterText from "@/components/lighter-text";
import { SectionTracker } from "@/components/SectionTracker";
import { CircleCheckBig } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "Employment & Labour Law | Sayyid & Shaykh",
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
              { label: "Employement & Labour" },
            ]}
          />
          <section data-section-id="Employement & Labour">
            <Heading>Employement & Labour</Heading>
            <LighterText className="mt-4">
              We offer specialist, commercial and pragmatic advice, to both
              employers and individuals, on a wide variety of employment and
              labour law matters. Working closely with the HR and senior
              management teams, we aim to make employment matters
              straight-forward thereby enabling our clients to take decisions
              confidently.
            </LighterText>
            <LighterText className="mt-4">
              The various services offered, through our Employment & Labour
              practice group are:
            </LighterText>
            <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Drafting of employment contracts, policies, handbooks, and
                  procedures
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Day-to-day advice on employee relations issues, including
                  disciplinary issues, dismissals, and grievances
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Business reorganizations, transfers, and redundancies
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Business reorganizations, transfers, and redundancies
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Advising and representation before employment tribunals and
                  High Court in relation to unfair dismissals, restraint of
                  trade, and other employment dispute
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  EOBI, SESSI and other statutory laws compliance and dispute
                  resolution
                </LighterText>
              </li>
            </ul>
            <LighterText className="mt-4">
              In addition to providing a quality, practical legal services, we
              also provide bespoke trainings and seminars to the HR and
              management teams.
            </LighterText>
          </section>
        </div>
        <SectionTracker
          className="hidden lg:block"
          items={[
            {
              id: "Employement & Labour",
              title: "Employement & Labour",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
