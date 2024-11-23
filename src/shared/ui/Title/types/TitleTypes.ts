import type { VariantProps } from "class-variance-authority";
import { titleVariants } from "../lib/titleVariants";

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // Customizable heading levels
}