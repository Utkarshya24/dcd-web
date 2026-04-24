import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  centered?: boolean;
}

export function SectionHeader({
  title,
  description,
  centered = true,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
      {...props}
    >
      <h2 className="section-title mb-4">{title}</h2>
      {description && <p className="lead-text">{description}</p>}
    </div>
  );
}
