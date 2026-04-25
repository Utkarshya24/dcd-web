import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const jobs = [
    { title: "Senior Systems Engineer (Go/Rust)", dept: "Engineering", location: "Remote (Global)" },
    { title: "Frontend Engineer (React/Next.js)", dept: "Engineering", location: "San Francisco / Remote" },
    { title: "Developer Advocate", dept: "Marketing & Community", location: "Remote (US/EU)" },
    { title: "Product Designer", dept: "Design", location: "Remote" }
  ];

  return (
    <>
      <SectionWrapper className="pt-24 pb-12 text-center bg-secondary/20">
        <SectionHeader 
          title="Build the future of the cloud" 
          description="We're a fast-growing team of builders obsessed with making infrastructure invisible."
        />
      </SectionWrapper>

      <SectionWrapper className="pb-24 pt-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Open Positions" className="mb-8" />
          <div className="space-y-4">
            {jobs.map((job, i) => (
               <Card key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border hover:border-primary/50 transition-colors">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{job.dept}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <Button variant="secondary">Apply Now</Button>
               </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
