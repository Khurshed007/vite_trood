import React from "react";
import { useFormField } from "../lib/FormFieldContext";
import { cn } from "../../../lib/cn";

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className,  ...props }, ref) => {
  const { error, name } = useFormField();

  return error ? (
    <p
      ref={ref}
      id={`${name}-message`}
      className={cn("text-sm text-red-500", className)}
      {...props}
    >
      {error.message}
    </p>
  ) : null;
});
FormMessage.displayName = "FormMessage";