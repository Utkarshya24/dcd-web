"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Background gradients */}
      <div className="absolute inset-0 top-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,82,204,0.15),rgba(255,255,255,0))]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5 text-sm">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Free Tier Available
            </span>
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="display-title mb-6"
        >
          Deploy Simply. Scale Affordably. <span className="text-primary">Rest Securely.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lead-text mb-10 max-w-2xl"
        >
          From Code to Cloud, Without the Complexity. Infrastructure designed for modern teams who want to build, not manage servers.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="/signup" className={cn(buttonVariants({ size: "lg" }), "h-12 px-8 text-base group")}>
            Deploy Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/pricing" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-12 px-8 text-base")}>
            Free Tier - No Credit Card Required
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 w-full max-w-4xl"
        >
          <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-4 shadow-2xl flex items-center gap-4 overflow-hidden text-left border-white/10">
            <div className="flex flex-col w-full font-mono text-sm">
                <div className="flex items-center gap-2 border-b border-border/50 pb-3 mb-3 text-muted-foreground">
                  <Terminal className="h-4 w-4" />
                  <span>bash</span>
                </div>
                <div className="space-y-2 text-foreground/80">
                  <p><span className="text-primary">$</span> npm i -g dcdeploy-cli</p>
                  <p><span className="text-primary">$</span> dcd init</p>
                  <p><span className="text-primary">$</span> dcd deploy</p>
                  <p className="text-green-500 pt-2">✓ Deployment successful! URL: https://myapp.dcdeploy.app</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
