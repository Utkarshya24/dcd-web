import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Zap, Activity, LifeBuoy, TrendingUp } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";

const features = [
  {
    title: "Bare Metal Performance",
    description: "Experience the raw power of bare metal with the flexibility of cloud infrastructure.",
    icon: Server,
  },
  {
    title: "Predictable Pricing",
    description: "No hidden fees. Flat-rate pricing ensures you only pay for what you need.",
    icon: Zap,
  },
  {
    title: "Secure & Private",
    description: "Isolated MicroVMs and built-in WireGuard networking keep your workloads completely private.",
    icon: Shield,
  },
  {
    title: "Auto Scaling",
    description: "Traffic spikes? No problem. Our platform scales automatically without downtime.",
    icon: TrendingUp,
  },
  {
    title: "Monitoring & Insights",
    description: "Real-time metrics, comprehensive logging, and actionable insights out of the box.",
    icon: Activity,
  },
  {
    title: "Dedicated Support",
    description: "We're here 24/7. Get dedicated enterprise support straight from the engineers who built DCDeploy.",
    icon: LifeBuoy,
  },
];

export function FeaturesSection() {
  return (
    <SectionWrapper id="features" className="bg-secondary/20">
      <SectionHeader 
        title="Everything You Need to Scale" 
        description="Built on a foundation of performance and security, our platform gives you the tools to succeed at any scale."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="border bg-card/50 backdrop-blur transition-colors hover:bg-card/80">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
