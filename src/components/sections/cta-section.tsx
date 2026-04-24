import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";

export function CtaSection() {
  return (
    <SectionWrapper id="cta">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 text-center shadow-xl sm:px-12 sm:py-24">
        <div className="absolute inset-0 top-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_-20%,rgba(255,255,255,0.15),rgba(255,255,255,0))]" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Ready to simplify your deployment?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80 leading-7">
            Join thousands of developers who are building faster, scaling effortlessly, and sleeping better at night. Get started for free today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup" className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "h-12 px-8 w-full sm:w-auto font-medium group")}>
              Deploy Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-12 w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium")}>
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
