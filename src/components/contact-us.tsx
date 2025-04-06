import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LighterLogo from "./lighter-logo";
import LighterText from "./lighter-text";

export default function ContactPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 px-6 md:px-12 h-full pt-2">
          <LighterLogo className="text-gray-300">reach us</LighterLogo>
          <h2 className="text-4xl font-extrabold">Get in Touch with Us</h2>
          <ul className=" space-y-8 text-lg flex flex-col capitalize pt-4">
            <li>
              <LighterText className="text-gray-200">
              <span className="font-bold">Expert legal assistance tailored to your needs</span> <br />
              We provide customized legal solutions designed to meet your
              specific requirements.
              </LighterText>
            </li>
            <li><LighterText className="text-gray-200">
              <span className="font-bold">Timely and Professional Client Engagement</span> <br />
              We respond to your queries at our earliest convenience, ensuring timely and effective support.
              </LighterText></li>
            <li>
              <LighterText className="text-gray-200">
              <span className="font-bold">Serving a Diverse Clientele Across National and International Borders</span> <br />
              Our services are relied upon by esteemed clients across the country and beyond.
              </LighterText>
            </li>
            <li>
              <LighterText className="text-gray-200">
                <span className="font-bold">
                Focused on Delivering Strategic and Effective Outcomes
                </span> <br />
                We are committed to delivering optimal results through strategic and diligent legal representation.
              </LighterText>
            </li>
          </ul>
        </div>
        {/* Right Form */}
        <div className="bg-black p-8 rounded-lg shadow-lg text-gray-300">
          <form className="space-y-4">
            <div>
              <Label className="text-white mb-2" htmlFor="name">
                Full Name
              </Label>
              <Input id="name" type="text" placeholder="Enter your name" />
            </div>
            <div>
              <Label className="text-white mb-2" htmlFor="phone">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <Label className="text-white mb-2" htmlFor="email">
                Email
              </Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label className="text-white mb-2" htmlFor="practice-area">
                Practice Area
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a practice area" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Corporate Law",
                    "Criminal Defense",
                    "Family Law",
                    "Personal Injury",
                    "Real Estate Law",
                    "Intellectual Property",
                    "Employment Law",
                    "Bankruptcy",
                    "Immigration Law",
                    "Tax Law",
                    "Civil Rights",
                  ].map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-white mb-2" htmlFor="case-description">
                Case Description
              </Label>
              <Textarea
                id="case-description"
                rows={4}
                placeholder="Briefly describe your case"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-white hover:text-white hover:border-white hover:bg-blue-600 text-black rounded-none border-2 border-blue-500"
            >
              Get Free Consultation
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
