import React from "react";
import { cn } from "../../../lib/cn"; // Utility for conditional class names
import { titleVariants } from "../lib/TitleVariants";
import { TitleProps } from "../types/TitleTypes";

const Title: React.FC<TitleProps> = ({
  as: Component = "h1", // Default to h1
  size,
  align,
  color,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(titleVariants({ size, align, color }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Title };