import React from "react";
import { cn } from "../../../lib/cn"; // Utility for conditional classnames
import { sectionVariants } from "../lib/sectionVariants";
import type { SectionProps } from "../types/sectionTypes";

const Section: React.FC<SectionProps> = ({ alignment, className, children }) => {
  return (
    <section className={cn(sectionVariants({ alignment }), className)}>
      {children}
    </section>
  );
};

export { Section };