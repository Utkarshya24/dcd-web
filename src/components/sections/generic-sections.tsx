import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Play, Database, Globe } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function AppManagementMock() {
  return (
    <SectionWrapper id="app-management">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <SectionHeader 
            centered={false}
            title="Tailor Your App Environment"
            description="Configure, manage, and scale your applications with an intuitive interface. Set environment variables, define custom domains, and configure build settings all from one place."
            className="mb-6 md:mb-8"
          />
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Settings className="h-4 w-4 text-primary" />
              </div>
              <span className="font-medium">Zero-config deployments for 30+ frameworks</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-4 w-4 text-primary" />
              </div>
              <span className="font-medium">Seamless database integrations via UI or CLI</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 w-full relative">
          {/* Decorative background blur */}
          <div className="absolute inset-0 -z-10 bg-primary/20 blur-[100px] rounded-full" />
          
          <Card className="p-6 border bg-card/50 backdrop-blur shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-md flex items-center justify-center">
                    <span className="font-bold text-primary">Next</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">dcdeploy-web</h4>
                    <p className="text-xs text-muted-foreground">Production environment</p>
                  </div>
                </div>
                <BadgeStatus status="Ready" />
              </div>
              <div className="flex gap-2">
                 <Button size="sm" className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Redeploy
                 </Button>
                 <Button size="sm" variant="outline" className="w-full">
                    Settings
                 </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}

function BadgeStatus({status}: {status: string}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium border bg-green-500/10 text-green-500 border-green-500/20">
      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
      {status}
    </span>
  );
}

export function DashboardMock() {
  return (
    <SectionWrapper id="dashboard">
      <SectionHeader 
        title="One Dashboard, Total Control"
        description="Monitor your projects, track your usage, and seamlessly manage your team from our unified dashboard."
      />
      <div className="relative mx-auto max-w-5xl rounded-xl border bg-card overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="mx-auto flex h-6 w-full max-w-md items-center justify-center rounded bg-background text-xs text-muted-foreground shadow-sm">
            app.dcdeploy.com/dashboard
          </div>
        </div>
        <div className="p-8 pb-12 flex flex-col md:flex-row gap-6">
           <div className="w-full md:w-64 space-y-2 hidden md:block">
             {[1,2,3,4].map(i => (
               <div key={i} className="h-8 rounded-md bg-muted/50 animate-pulse" />
             ))}
           </div>
           <div className="flex-1 space-y-6">
             <div className="flex items-center justify-between">
                <div className="h-8 w-48 bg-muted rounded-md animate-pulse" />
                <div className="h-8 w-24 bg-primary/20 rounded-md animate-pulse" />
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               {[1,2,3].map(i => (
                 <div key={i} className="h-24 rounded-lg border bg-card p-4 animate-pulse">
                   <div className="h-4 w-1/2 bg-muted rounded mb-4" />
                   <div className="h-8 w-3/4 bg-muted/80 rounded" />
                 </div>
               ))}
             </div>
             <div className="h-64 rounded-lg border bg-card/60 animate-pulse" />
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function GlobalDeployMock() {
  return (
    <SectionWrapper id="global" className="bg-secondary/20">
      <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <SectionHeader 
            centered={false}
            title="Deploy Globally, Connect Locally"
            description="Launch your application close to your users. Currently serving reliably from our premium Frankfurt (FRA) region, with global edge caching and more regions coming soon."
            className="mb-6 md:mb-8"
          />
           <Button variant="outline" className="mt-4">
             View Infrastructure Map
           </Button>
        </div>
        <div className="flex-1 w-full min-h-[300px] flex items-center justify-center relative">
          <Globe className="w-full h-auto text-muted-foreground/20 absolute inset-0 -z-10 animate-pulse" />
          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 animate-ping rounded-full" />
             <div className="h-4 w-4 bg-primary rounded-full relative z-10 ring-4 ring-primary/30" />
             <span className="absolute top-6 left-1/2 -translate-x-1/2 font-semibold text-sm whitespace-nowrap bg-background border px-2 py-1 rounded shadow-sm">
               Frankfurt (FRA1)
             </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
