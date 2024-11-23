import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg",
  {
    variants: {
      variant: {
        default:
          "bg-primary border hover:border-primary text-primary-foreground shadow hover:bg-secondary hover:text-secondary-foreground",
        outline:
          "border hover:border-primary text-secondary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground",
        secondary:
          "border hover:border-primary text-secondary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-secondary",
      },
       width : {
        half: "w-1/2",
        allWith : "w-1"
        
      },
      spacing: {
        default: "mt-6 mb-4", // Add margins as a variant
        none: "m-0", // No margin
      },
      size: {
        default: "h-9 px-4 py-2", // Default padding
        sm: "h-8 rounded-md px-3 text-xs", // Small size
        lg: "h-10 rounded-md px-8", // Large size
        custom: "p-2 px-4", // Custom padding (8px 16px)
      },
    },
    defaultVariants: {
      variant: "default", // Default variant
      size: "default", // Default size
      width : "half",
      spacing: "default", // Use default spacing by default
    },
  }
);