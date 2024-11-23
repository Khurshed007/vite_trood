import React from "react";
import { SectionVariants } from "../lib/sectionVariants";

export interface SectionProps extends SectionVariants {
  children: React.ReactNode; // Elements to display inside the section
  className?: string; // Allow additional styles
}