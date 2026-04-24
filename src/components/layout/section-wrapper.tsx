import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
}

export function SectionWrapper({
  children,
  id,
  className,
  innerClassName,
  ...props
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16 lg:py-24", className)} {...props}>
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
