import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

export function SectionCard({ title, children ,className }: { title: string; children: React.ReactNode ,className?:string }) {
    return (
      <Card className={cn(className,"shadow border border-gray-200 mb-8")}>
        <CardContent className="p-4 sm:p-6 text-gray-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6">{title}</h1>
          {children}
        </CardContent>
      </Card>
    );
  }