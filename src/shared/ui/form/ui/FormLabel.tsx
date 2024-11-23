import React from "react";
import { Label } from "./Label";
import { useFormField } from "../lib/FormFieldContext";
import { cn } from "../../../lib/cn";

export const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  const { name, ...fieldState } = useFormField();

  return (
    <Label
      ref={ref}
      htmlFor={name}
      className={cn(fieldState.error && "text-red-500", className)}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";