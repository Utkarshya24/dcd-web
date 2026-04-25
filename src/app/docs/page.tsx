import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Database, Globe, Shield, Rocket, Server } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  const categories = [
    { title: "Getting Started", icon: Rocket, desc: "Learn the basics and deploy your first app in 5 minutes." },
    { title: "CLI Reference", icon: Terminal, desc: "Detailed breakdown of the DCDeploy command line interface." },
    { title: "Networking & Domains", icon: Globe, desc: "Configure custom domains, SSL certificates, and routing." },
    { title: "Databases", icon: Database, desc: "Connect managed PostgreSQL, Redis, and MySQL instances." },
    { title: "Security", icon: Shield, desc: "Learn about our isolation model, VPCs, and encryption." },
    { title: "Infrastructure", icon: Server, desc: "Understand regional deployments and MicroVM capabilities." },
  ];

  return (
    <SectionWrapper className="pt-24 pb-20 bg-secondary/10 min-h-[80vh]">
      <SectionHeader 
        title="Documentation" 
        description="Everything you need to know about building, deploying, and scaling on DCDeploy."
      />
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {categories.map((cat, i) => {
           const Icon = cat.icon;
           return (
             <Link href="#" key={i}>
                <Card className="h-full border bg-card/60 backdrop-blur hover:bg-card hover:border-primary/50 transition-colors shadow-sm cursor-pointer group">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-2 transition-transform group-hover:scale-110" />
                    <CardTitle className="text-lg">{cat.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cat.desc}</p>
                  </CardContent>
                </Card>
             </Link>
           );
         })}
      </div>
    </SectionWrapper>
  );
}
