import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Users, Target, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <SectionWrapper className="pb-10 pt-24 text-center">
      <SectionHeader
        title="Empowering the next generation of builders"
        description="We&apos;re on a mission to democratize cloud infrastructure. By removing the complexity from deployment, we enable developers to focus on what they do best: writing code."
      />
      </SectionWrapper>

      {/* Story (Timeline) */}
      <SectionWrapper className="bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Our Story" className="mb-8" />
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              {
                year: "2023",
                title: "The Idea",
                text: "Frustrated by the ever-increasing complexity of modern cloud platforms, our founders started prototyping a simpler way to deploy full-stack applications.",
              },
              {
                year: "2024",
                title: "The Beta",
                text: "Launched in private beta. Thousands of developers signed up within the first week, affirming the desperate need for an intuitive deployment platform.",
              },
              {
                year: "2025",
                title: "Public Launch",
                text: "DCDeploy goes public, rapidly scaling to serve millions of requests and becoming the go-to platform for indie hackers and growing startups alike.",
              },
              {
                year: "2026",
                title: "Global Scale",
                text: "Expanded to 12 regions globally and introduced the enterprise MicroVM architecture for enhanced isolation and bare-metal performance.",
              },
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                   <div className="h-3 w-3 bg-primary rounded-full" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border bg-card/50 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <time className="font-mono text-sm text-primary">{item.year}</time>
                  </div>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Values */}
      <SectionWrapper>
         <SectionHeader title="Our Values" className="mb-8" />
         <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-muted">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Developer First</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                 We build tools that we actually want to use ourselves. Developer experience is our north star, and we rigorously polish every interaction.
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-muted">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Radical Simplicity</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                 Complexity is the enemy of execution. We aggressively distill infrastructure into simple, declarative primitives that &quot;just work&quot;.
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-muted">
              <CardHeader>
                <ShieldCheck className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Security by Default</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                 You shouldn&apos;t have to be a DevOps expert to run secure apps. We bake isolation and encryption deeply into the foundation of our network.
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-muted">
              <CardHeader>
                <Rocket className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Built to Scale</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                 Whether you have zero users or five million, the infrastructure automatically adapts so your product never goes down under pressure.
              </CardContent>
            </Card>
         </div>
      </SectionWrapper>

      {/* Join Us CTA */}
      <SectionWrapper className="bg-secondary/20">
         <div className="max-w-2xl mx-auto text-center">
            <SectionHeader
              title="Help us reshape the cloud"
              description="We are always looking for ambitious engineers, designers, and thinkers who are passionate about developer tools."
            />
            <Link href="#" className={buttonVariants({ size: "lg", className: "group" })}>
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
         </div>
      </SectionWrapper>
    </>
  );
}
