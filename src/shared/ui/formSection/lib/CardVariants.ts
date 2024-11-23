import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva("p-6 bg-white shadow-md rounded-lg", {
  variants: {
    size: {
      sm: "w-[300px]",
      md: "w-[620px]",
      lg: "w-[600px]",
    },
    spacing: {
      tight: "space-y-4",
      normal: "space-y-6",
      loose: "space-y-8",
    },
    paddings : {
      default : "py-[124px] px-[98px]"
    }
  },
  defaultVariants: {
    size: "md",
    spacing: "normal",
    paddings: "default"
  },
});

export type CardVariantsProps = VariantProps<typeof cardVariants>;