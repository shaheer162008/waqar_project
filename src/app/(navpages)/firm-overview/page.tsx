import Heading from "@/components/heading";
import LighterText from "@/components/lighter-text";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export default function FirmOverview() {
  return (
    <Tabs defaultValue="overview" className="bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Tabs Navigation */}
        <TabsList className="flex md:flex-col gap-2 w-full md:w-64 bg-white shadow-md p-4 md:p-6 border-b md:border-r border-gray-200 overflow-x-auto md:overflow-visible">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2 rounded transition-all whitespace-nowrap"
          >
            Firm Overview
          </TabsTrigger>
          <TabsTrigger
            value="approach"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2 rounded transition-all whitespace-nowrap"
          >
            Client Centered Approach
          </TabsTrigger>
          <TabsTrigger
            value="values"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2 rounded transition-all whitespace-nowrap"
          >
            Culture and Core Values
          </TabsTrigger>
        </TabsList>

        {/* Content Section */}
        <div className="flex-1 px-6 py-10">
          <TabsContent value="overview">
            <div className="max-w-4xl mx-auto">
              <Heading>Firm Overview</Heading>
              <Card className="shadow border border-gray-200">
                <CardContent className="p-6 text-gray-700">
                  <LighterText className="text-gray-800 mt-4">
                    We offer specialist, commercial and pragmatic advice, to both employers and individuals, on a wide variety of employment and labour law matters. Working closely with the HR and senior management teams, we aim to make employment matters straight-forward thereby enabling our clients to take decisions confidently.
                  </LighterText>
                  <LighterText className="text-gray-800 mt-4 pb-4">
                    The various services offered, through our Employment & Labour practice group are:
                  </LighterText>
                  <div className="grid capitalize grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Approachable",
                      "Integrity",
                      "Highest Quality Work",
                      "Professionalism",
                      "Dedication to Enhancing Client Value",
                      "Innovative and Progressive",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-blue-600" size={20} />
                        <span className="text-gray-900 font-medium text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="approach">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-blue-700 mb-6">Client Centered Approach</h1>
              <Card className="shadow border border-gray-200">
                <CardContent className="p-6 text-gray-700">
                  <p className="text-base leading-relaxed">
                    Our client-centered approach focuses on building long-term relationships by delivering consistent results and understanding each client's unique needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="values">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-blue-700 mb-6">Culture and Core Values</h1>
              <Card className="shadow border border-gray-200">
                <CardContent className="p-6 text-gray-700">
                  <p className="text-base leading-relaxed">
                    We uphold a strong culture of collaboration, accountability, and innovation, ensuring that our values are reflected in everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
}
