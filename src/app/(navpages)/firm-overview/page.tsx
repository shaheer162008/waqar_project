import { Breadcrumb } from "@/components/Breadcrumb";
import Heading from "@/components/heading";
import LighterText from "@/components/lighter-text";
import { SectionTracker } from "@/components/SectionTracker";
import { CircleCheckBig } from "lucide-react";

export default function FirmOverviewPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <Breadcrumb
            items={[{ label: "Sayyid & Shaykh", href: "/" }, { label: "Firm Overview" }]}
          />

          <section data-section-id="Firm Overview">
            <Heading>Firm Overview</Heading>
            <LighterText className="">
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
            <ul className=" list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Approachable
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Integrity
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Highest Quality
                  Work
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Professionalism
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Dediction to
                  Enchancing Client Value
                </LighterText>
              </li>
              <li>
                <LighterText className="flex gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500" /> Innovative And
                  Progessive
                </LighterText>
              </li>
            </ul>
            <LighterText className="mt-4">
              In addition to providing a quality, practical legal services, we
              also provide bespoke trainings and seminars to the HR and
              management teams.
            </LighterText>
          </section>

          <section data-section-id="Client Centered Approach">
            <Heading>Client Centered Approach</Heading>

            <LighterText className="mb-4 mt-4">
              In the present rapidly changing and competitive business
              environment, clients' demands and expectations from their lawyers
              are also changing. One area of clients' frustration, which has
              mired the legal service sector in cynicism, is the inaccessibility
              of the lawyers once the matter has been delegated by the client,
              coupled with the lack of responsiveness and timely advice. WE ARE
              HERE TO CHANGE THIS; THE STATUS QUO.
            </LighterText>
            <LighterText className="mb-4">
              With a clear vision of becoming the 'law firm of the future', we
              take pride in claiming that we are focused squarely on our clients
              and their legal matters, being proactive and client-led from the
              outset of our engagement. Excellence in client service sits at the
              heart of everything we do, as we aim to develop lasting
              relationships with our clients.
            </LighterText>
            <LighterText className="mb-4">
              Our watchword is ‘Client Value Proposition’, i.e. the value we can
              deliver to our clients. To this end, we have created a
              value-driven client service model, unique to the legal profession
              and a modern approach to providing, delivering and managing client
              and legal services. Our service model combines innovative client
              care protocols, legal matter management, and enhanced use of
              progressive technology solutions, thereby delivering tangible
              results for our clients in the form of consistent and efficient
              quality legal services, and improved communication and
              collaboration. In addition, we have invested significantly in
              solutions and technical resources, which are used by the top
              international law firms globally, in order to provide our clients
              with superior service at a par with international standards.
            </LighterText>
            <LighterText className="mb-4">
              We are also able to distinguish ourselves, as client-driven, based
              on our ability to understanding the uniqueness of each of our
              client, rather than viewing them generically. We firmly believe
              that a particular strategy or solution for one client may not be
              suitable for another, even if they operate in similar sectors, and
              therefore we seek to bring creative insight and fresh approach to
              every matter.
            </LighterText>
            <LighterText className="mb-4">
              Our legal strategy is devised after carefully listening to our
              clients’ needs and issues, and developing a sound understanding of
              the business of our client and the industry in which they operate.
              Once the best strategy has been devised, we aim to advice our
              client in a timely, transparent, friendly and straightforward
              manner, thereby allowing our clients to fully understand the
              rewards and risks associated with each option.
            </LighterText>
            <LighterText className="mb-4">
              Moreover, our collaborative approach ensures that if a particular
              matter requires a unique set of skills or is multi-jurisdictional,
              we will be able to provide you with our recommended and trusted
              network of like-minded leading independent law firms and counsels,
              who share our values and provide expert advice and dedicated
              services ensuring that you receive the same level of client care
              as you do with us.
            </LighterText>
          </section>

          <section data-section-id="Culture and Core Values">
            <Heading>Culture And Core Values</Heading>
            <LighterText className="mt-4 mb-4">
              Our values are the foundation of our culture, providing a shared
              sense of direction and guidance for our people. Through putting
              our core values at the center stage and ensuring that these values
              are evident in everything we do and are reflected in every strand
              of the firm, we are able to accomplish our goal of being
              meaningful partners and trusted advisers to our clients.
            </LighterText>
            <LighterText className="mb-4">
              The values which define the lawyers and professionals at Sayyid &
              Shaykh are:
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
                  Director and senior management contracts negotiations and
                  drafting
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Advising and representation before employment tribunals and
                  High Court in relation to unfair dismissals, restraint of
                  trade, and other employment disputes
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  EOBI, SESSI and other statutory laws compliance and dispute
                  resolution
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  contentList7
                </LighterText>
              </li>
            </ul>
          </section>
        </div>

        {/* Section Tracker Card */}
        <SectionTracker className="hidden lg:block" 
          items={[
            {
              id: "Firm Overview",
              title: "Firm Overview",
              text: "Overview of our expertise in employment and labour law.",
            },
            {
              id: "Client Centered Approach",
              title: "Client Centered Approach",
              text: "How we prioritize integrity, quality, and professionalism.",
            },
            {
              id: "Culture and Core Values",
              title: "Culture and Core Values",
              text: "The values driving our commitment to clients.",
            },
          ]}
        />
      </div>
    </div>
  );
}
