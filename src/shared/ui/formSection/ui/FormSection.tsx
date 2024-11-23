import React from "react";
import { cn } from "../../../lib/cn"; // A utility to conditionally join class names
import { CardProps } from "../types/CardTypes";
import { cardVariants } from "../lib/CardVariants";

const Card: React.FC<CardProps> = ({ size, spacing, children }) => {
  return <div className={cn(cardVariants({ size, spacing }))}>{children}</div>;
};

export { Card };
