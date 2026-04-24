"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "@/components/ui/section-header";

export default function PricingPage() {
  return (
    <>
      <SectionWrapper className="pb-10 pt-24 text-center">
        <SectionHeader
          title="Flexible and affordable plans"
          description="Start for free, then pay as you grow with our transparent pricing. No hidden fees."
        />
        
        <Tabs defaultValue="monthly" className="w-[400px] mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monthly">Monthly billing</TabsTrigger>
            <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {/* Free Plan */}
          <Card className="flex flex-col relative border-muted/50 shadow-sm">
             <CardHeader>
               <CardTitle className="text-2xl">Basic</CardTitle>
               <CardDescription>Perfect for hobby projects and experiments.</CardDescription>
               <div className="mt-4 font-bold text-4xl">$0<span className="text-muted-foreground text-lg font-normal">/mo</span></div>
             </CardHeader>
             <CardContent className="flex-1">
               <ul className="space-y-3">
                 <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Up to 3 Projects</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Shared CPU</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Community Support</span>
                 </li>
               </ul>
             </CardContent>
             <CardFooter>
               <Button className="w-full" variant="outline">Start for Free</Button>
             </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col relative border-primary shadow-xl">
             <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Most Popular
                </span>
             </div>
             <CardHeader>
               <CardTitle className="text-2xl text-primary">Pro</CardTitle>
               <CardDescription>For production workloads and growing teams.</CardDescription>
               <div className="mt-4 font-bold text-4xl">Pay-as-you-go<span className="text-muted-foreground text-lg font-normal"> base</span></div>
             </CardHeader>
             <CardContent className="flex-1">
               <ul className="space-y-3">
                 <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Unlimited Projects</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Dedicated CPU available</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">24/7 Priority Support</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Advanced Metrics & Logs</span>
                 </li>
               </ul>
             </CardContent>
             <CardFooter>
               <Button className="w-full text-md">Join This Plan</Button>
             </CardFooter>
          </Card>
        </div>
      </SectionWrapper>

      {/* Machine Pricing Table Section */}
      <SectionWrapper id="machines" className="bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Machine Pricing" className="mb-8" />
          <div className="overflow-x-auto rounded-lg border bg-card shadow">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 font-medium">
                <tr>
                  <th className="px-6 py-4">Machine Type</th>
                  <th className="px-6 py-4">Memory</th>
                  <th className="px-6 py-4">CPU</th>
                  <th className="px-6 py-4 hidden sm:table-cell">Storage</th>
                  <th className="px-6 py-4">Price / mo</th>
                  <th className="px-6 py-4 text-right">Price / hr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "DCD-1 (Shared)", mem: "512 MB", cpu: "1 vCPU", str: "10 GB", mo: "$2.50", hr: "$0.0034" },
                  { name: "DCD-2 (Shared)", mem: "1 GB", cpu: "1 vCPU", str: "25 GB", mo: "$5.00", hr: "$0.0068" },
                  { name: "DCD-3 (Dedicated)", mem: "2 GB", cpu: "1 vCPU", str: "50 GB", mo: "$12.00", hr: "$0.0164" },
                  { name: "DCD-4 (Dedicated)", mem: "4 GB", cpu: "2 vCPU", str: "80 GB", mo: "$24.00", hr: "$0.0328" },
                  { name: "DCD-5 (Dedicated)", mem: "8 GB", cpu: "4 vCPU", str: "160 GB", mo: "$48.00", hr: "$0.0657" },
                  { name: "DCD-6 (Dedicated)", mem: "16 GB", cpu: "8 vCPU", str: "320 GB", mo: "$96.00", hr: "$0.1315" },
                ].map((tier, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{tier.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{tier.mem}</td>
                    <td className="px-6 py-4 text-muted-foreground">{tier.cpu}</td>
                    <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">{tier.str}</td>
                    <td className="px-6 py-4">{tier.mo}</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">{tier.hr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="faq">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Frequently Asked Questions" className="mb-8" />
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does billing work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We use precise per-hour billing up to the monthly cap. If you run a machine for less than a month, you&apos;ll only be charged for the hours used. Once you hit the monthly cap, the rest of the month is free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I switch plans later?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. You can upgrade from the Basic to the Pro plan at any time through your dashboard. Your bill will be prorated automatically based on your usage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer custom enterprise pricing?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we do. If you have unique infrastructure needs, large scale workloads, or require specialized compliance measures, please contact our sales team to discuss custom pricing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionWrapper>
    </>
  );
}
