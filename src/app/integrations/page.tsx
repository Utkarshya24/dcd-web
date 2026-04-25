import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";

export default function IntegrationsPage() {
  const integrations = [
    "Next.js", "React", "Vue", "Nuxt", "SvelteKit", "Remix", 
    "Node.js", "Go", "Python", "Rust", "Docker", "PostgreSQL", 
    "Redis", "MongoDB", "GitHub", "GitLab"
  ];

  return (
    <SectionWrapper className="pt-24 pb-20">
      <SectionHeader 
        title="Integrations & Frameworks" 
        description="DCDeploy works seamlessly with the tools and frameworks you already love."
      />
      
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {integrations.map((name, i) => (
          <Card key={i} className="flex flex-col items-center justify-center p-8 border bg-card/50 hover:bg-card transition-colors text-center shadow-sm">
            {/* Generic placeholder for framework logo */}
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
               <span className="font-bold text-xs text-muted-foreground">{name[0]}</span>
            </div>
            <h3 className="font-medium text-sm">{name}</h3>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
