import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Serverless is Bare Metal",
      date: "April 22, 2026",
      excerpt: "Why we abandoned traditional serverless containers in favor of dedicated MicroVMs to provide 10x the performance without sacrificing auto-scaling.",
      category: "Engineering"
    },
    {
      title: "Introducing the New DCDeploy CLI",
      date: "February 28, 2026",
      excerpt: "A deep dive into our CLI rewrite using Go, what it means for deployment times, and how to migrate your existing workflows.",
      category: "Product Updates"
    },
    {
      title: "How to Deploy a Full-Stack Next.js App in 30 Seconds",
      date: "January 14, 2026",
      excerpt: "A step-by-step tutorial on leveraging zero-config deployments to ship your React applications to our global edge network.",
      category: "Tutorials"
    }
  ];

  return (
    <SectionWrapper className="pt-24 pb-20">
      <SectionHeader 
        title="DCDeploy Blog" 
        description="Engineering insights, product updates, and tutorials from the team."
      />
      
      <div className="max-w-4xl mx-auto grid gap-8 mt-12">
        {posts.map((post, i) => (
          <Card key={i} className="border bg-card shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
             {/* Subtle gradient strip */}
             <div className="absolute top-0 left-0 w-1 h-full bg-primary/80" />
             <CardHeader className="pl-8 pb-2">
               <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                 <span className="font-medium text-primary">{post.category}</span>
                 <span>•</span>
                 <time>{post.date}</time>
               </div>
               <CardTitle className="text-2xl group-hover:text-primary transition-colors cursor-pointer">
                 {post.title}
               </CardTitle>
             </CardHeader>
             <CardContent className="pl-8">
               <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
             </CardContent>
             <CardFooter className="pl-8 pt-2 pb-6">
                <Link href="#" className="inline-flex items-center text-sm font-semibold text-foreground group/link">
                  Read article 
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
             </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
