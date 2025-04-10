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
              { label: "Family Law" },
            ]}
          />
          <section data-section-id="Family Law">
            <Heading>Family Law</Heading>
            <LighterText className="mt-4">
              At S&S, our enthusiastic and meticulous team provides the
              paramount treatment to the client by given best possible advises
              on their disputes just like to make them comfortable and assured
              that the remedies we put forward toward them are best in their
              interest. Hence, any family case at the district level is treated
              as a case of the apex court. Be it a maintenance dispute, divorce
              dispute, or custody matter, S&S can be counted on to understand
              and to make things right.
            </LighterText>
            <LighterText className="mt-4">
              At S&S, our enthusiastic and meticulous team provides the
              paramount treatment to the client by given best possible advises
              on their disputes just like to make them comfortable and assured
              that the remedies we put forward toward them are best in their
              interest. Hence, any family case at the district level is treated
              as a case of the apex court. Be it a maintenance dispute, divorce
              dispute, or custody matter, S&S can be counted on to understand
              and to make things right.
            </LighterText>
          </section>
          <section data-section-id="Dissolution Of Marriage By Way Of Divorce/Khula">
            <Heading>Dissolution Of Marriage By Way Of Divorce/Khula</Heading>
            <LighterText className="mt-4">
              The end of a marriage is always a big step. But it can be
              bittersweet if done correctly. We truly believe in given the right
              advice to our client in dissolution of marriage as one has to
              fully inform with the consequences of the same after such step.
            </LighterText>
            <LighterText className="mt-4">
              S&S believes in providing the most sensitive legal care and client
              dealing when working with a divorce/khula case. It is important to
              mention that khula is not the only option for a woman to dissolve
              her marriage. As Muslim family law Ordinance provides 8 grounds
              where a client can seek divorce through court and khula is one of
              them not only one which is not known by most clients. Our Counsels
              make sure to advise you the best option which is in your best
              interest
            </LighterText>
          </section>
          <section data-section-id="Maintenance">
            <Heading>Maintenance</Heading>
            <LighterText className="mt-4">
              Maintenance is the one of the most complex dispute which required
              cogent evidences whether to prove allegation or decline the same.
              We at S&S are advocates that fight aggressively for you before the
              courts, so that you are best served.
            </LighterText>
            <LighterText className="mt-4">
              This is one of the area of practice in which our lawyers have
              amazing command to defend you whether to appear from wife side or
              husband. We always stands for our client welfare.
            </LighterText>
          </section>
          <section data-section-id="Custody/Guardianship">
            <Heading>Custody / Guardianship</Heading>
            <LighterText className="mt-4">
              To us, your child is more valuable than any piece of property can
              ever be. We fight for your legal rights, keeping your interests
              above and beyond any other commitment. We do everything in our
              power to make sure that your child is given the correct legal
              recourse that would benefit his/her future in the long-term. Our
              expert family lawyers make sure to fight for best possible
              maintenance allowance for our clients and minors.
            </LighterText>
            <LighterText className="mt-4">
              This is one of the area of practice in which our lawyers have
              amazing command to defend you whether to appear from wife side or
              husband. We always stands for our client welfare.
            </LighterText>
            <LighterText className="mt-4">
              Not only for mothers, we strongly contests on behalf of fathers
              when they is on right to make sure he gets justice against any
              allegation which is not true in its essence.
            </LighterText>
            <LighterText className="mt-4">
              Disputes which can be put forward before courts in Guardianship
              matters are:
            </LighterText>
            <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Meeting Rights
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Custody
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Protection
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Temporary Custody
                </LighterText>
              </li>
            </ul>
          </section>
          <section data-section-id="Domestic Violence">
            <Heading>Domestic Violence</Heading>
            <LighterText className="mt-4">
              Domestic violence by a spouse, parent, child or sibling is
              becoming more and more common. Domestic violence encompasses acts
              of physical, psychological, sexual, verbal and financial undue
              force. While this area can be treated as a criminal case in more
              severe scenarios, the matter can be taken before a family bench
              too. Given the fact that Pakistan has special legislation against
              domestic abuse, we levy this while unequivocally arguing your case
              so that you can get the best possible remedy. This can take the
              form of damages, interim and restraining orders, khulas/divorce
              and obtaining FIRs. Unfortunately, clients lack the awareness of
              the same due to which there are many people who are unheard. We
              make sure to spread Awareness and deter the perpetrator of the
              violence by taking them before court.
            </LighterText>
          </section>
        </div>
        <SectionTracker
          className="hidden lg:block"
          items={[
            {
              id: "Family Law",
              title: "Family Law",
            },
            {
              id: "Dissolution Of Marriage By Way Of Divorce/Khula",
              title: "Dissolution Of Marriage By Way Of Divorce/Khula",
            },
            {
              id: "Maintenance",
              title: "Maintenance",
            },
            {
              id: "Custody/Guardianship",
              title: "Custody/Guardianship",
            },
            {
              id: "Domestic Violence",
              title: "Domestic Violence",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
