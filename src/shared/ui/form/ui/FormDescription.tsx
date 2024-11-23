import React from "react";
import { useFormField } from "../lib/FormFieldContext";
import { cn } from "../../../lib/cn";

export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { name } = useFormField();

  return (
    <p
      ref={ref}
      id={`${name}-description`}
      className={cn("text-sm text-gray-500", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";