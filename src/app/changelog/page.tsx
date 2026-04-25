import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";

export default function ChangelogPage() {
  const logs = [
    {
      version: "v1.4.0",
      date: "April 20, 2026",
      title: "Global Edge Caching & Frankfurt Region",
      type: "Feature",
      description: "We've officially launched our Frankfurt (FRA1) region for EU users. In addition, our global edge caching layer is now on by default for all Pro tier projects, reducing latency by up to 300ms globally."
    },
    {
      version: "v1.3.2",
      date: "April 05, 2026",
      title: "Improved Dashboard Metrics",
      type: "Improvement",
      description: "The dashboard now displays real-time network egress/ingress metrics at 5-second intervals. We also fixed a bug causing CPU usage to display incorrectly."
    },
    {
      version: "v1.3.0",
      date: "March 15, 2026",
      title: "Dedicated MicroVMs for Pro Tier",
      type: "Architecture",
      description: "Transitioned all Pro tier workloads to isolated MicroVMs. This provides bare-metal performance, enhanced security via hard boundary isolation, and predictable CPU scheduling."
    },
    {
      version: "v1.2.5",
      date: "February 28, 2026",
      title: "CLI v2.0 Release",
      type: "Tooling",
      description: "A complete rewrite of the DCDeploy CLI using Go. Deployments are now 40% faster on average, and it includes robust interactive environment variable management."
    }
  ];

  return (
    <SectionWrapper className="pt-24 pb-20">
      <SectionHeader 
        title="Changelog" 
        description="Stay up to date with the latest features, improvements, and bug fixes."
      />
      <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:ml-0 md:before:left-1/3 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border/50 before:to-transparent">
        {logs.map((log, i) => (
          <div key={i} className="relative flex flex-col md:flex-row md:gap-8 group">
             {/* Timeline Node */}
            <div className="absolute left-5 md:left-1/3 -ml-1.5 md:ml-0 md:-translate-x-1.5 mt-1.5 md:mt-2 h-3 w-3 bg-primary rounded-full ring-4 ring-background z-10" />
            
            {/* Date block */}
            <div className="md:w-1/3 pl-12 md:pl-0 md:text-right md:pr-8 mb-2 md:mb-0">
               <time className="text-sm font-semibold text-primary">{log.date}</time>
               <div className="text-xs text-muted-foreground mt-1 font-mono">{log.version}</div>
            </div>
            
            {/* Content block */}
            <div className="md:w-2/3 pl-12 md:pl-8">
               <div className="flex flex-col gap-2 mb-3">
                 <Badge variant="outline" className="w-fit">{log.type}</Badge>
                 <h3 className="text-xl font-bold">{log.title}</h3>
               </div>
               <p className="text-muted-foreground leading-relaxed">
                 {log.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
