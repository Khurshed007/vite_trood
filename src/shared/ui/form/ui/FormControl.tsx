import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { useFormField } from "../lib/formFieldContext";

export const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { name } = useFormField();

  return <Slot ref={ref} id={name} {...props} />;
});
FormControl.displayName = "FormControl";