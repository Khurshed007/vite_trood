import { cva, type VariantProps } from "class-variance-authority";

export const sectionVariants = cva("w-full h-full flex", {
  variants: {
    alignment: {
      left: "items-start justify-start", // Align elements to the left (default)
      center: "items-center justify-center flex-col", // Center elements
      right: "items-end justify-end", // Align elements to the right
    },
  },
  defaultVariants: {
    alignment: "left", // Default alignment is left
  },
});

export type SectionVariants = VariantProps<typeof sectionVariants>;