import { Breadcrumb } from "@/components/Breadcrumb";
import Heading from "@/components/heading";
import LighterText from "@/components/lighter-text";
import { SectionTracker } from "@/components/SectionTracker";
import { CircleCheckBig } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "Property & Real Estate Law | Sayyid & Shaykh",
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
              { label: "Property & Real Estate" },
            ]}
          />
          <section data-section-id="Property & Real Estate">
            <Heading>Property & Real Estate</Heading>
            <LighterText className="mt-4">
              With considerable experience and expertise in all areas of
              property law, whether you are a large organisation looking for
              services in relation to complex construction projects, a banking
              company wanting to vet a property as collateral for financing
              facility or a private client seeking to complete a residential
              sale or purchase, we can provide a full range of transactional,
              advisory and dispute resolution legal services in property
              matters.
            </LighterText>
            <LighterText className="mt-4">
              With considerable experience and expertise in all areas of
              property law, whether you are a large organisation looking for
              services in relation to complex construction projects, a banking
              company wanting to vet a property as collateral for financing
              facility or a private client seeking to complete a residential
              sale or purchase, we can provide a full range of transactional,
              advisory and dispute resolution legal services in property
              matters.
            </LighterText>
            <ul className="list-inside text-gray-700 space-y-3 leading-relaxed mt-4">
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Sale and purchase of residential and commercial properties
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Advising banks and financial institutions, through diligent property reviews for real estate financing facilities and security collateral
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  All aspects of landlord and tenant matters    
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Property dispute resolution
                </LighterText>
              </li>
              <li>
                <LighterText className="flex items-center gap-4 uppercase">
                  <CircleCheckBig className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  Assisting with recoveries for lenders when borrowers default
                </LighterText>
              </li>
              </ul>
          </section>
        </div>
        <SectionTracker
          className="hidden lg:block"
          items={[
            {
              id: "Property & Real Estate",
              title: "Property & Real Estate",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
