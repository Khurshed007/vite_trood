import { cva, type VariantProps } from "class-variance-authority";

export const actionGroupVariants = cva("flex items-center", {
  variants: {
    layout: {
      single: "w-full", // Single child spans the full width
      double: "gap-2", // Two children with smaller gap
      multiple: "gap-4", // Multiple children with larger gap
    },
    alignment: {
      left: "justify-start", // Align group items to the left
      center: "justify-center", // Align group items to the center
      right: "justify-end", // Align group items to the right
    },
    spacing: {
      tight: "gap-1", // Smallest gap between items
      normal: "gap-2", // Default spacing
      loose: "gap-4", // Larger gap between items
    },
  },
  defaultVariants: {
    layout: "single", // Default layout for a single item
    alignment: "center", // Default alignment is center
    spacing: "normal", // Default spacing is normal
  },
});

export type ActionGroupVariants = VariantProps<typeof actionGroupVariants>;