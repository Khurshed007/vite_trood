import { cva } from "class-variance-authority";

export const titleVariants = cva(
  "font-sans font-semibold tracking-tight", // Base styles without positioning
  {
    variants: {
      size: {
        sm: "text-sm leading-5", // Small font size
        md: "text-base leading-6", // Medium font size (base)
        lg: "text-lg leading-7", // Large font size
        xl: "text-xl leading-8", // Extra large
        "2xl": "text-2xl leading-9", // 2x large
        "3xl": "text-3xl leading-10", // 3x large
        "4xl": "text-4xl leading-[48.41px] text-[40px]", // Custom size for 40px font
        "5xl": "text-[50px] leading-[60px]", // Example: 50px font
        "6xl": "text-[60px] leading-[72px]", // Example: 60px font
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      color: {
        primary: "text-primary",
        secondary: "text-secondary",
        muted: "text-muted-foreground",
        destructive: "text-destructive",
      },
      margins : {
        lg : "mt-[120px] mb[111px]",
        md : "mb[48px]"
      }
    },
    defaultVariants: {
      size: "4xl", // Default size
      align: "center", // Default alignment
      color: "primary", // Default color
      margins : "md"
    },
  }
);