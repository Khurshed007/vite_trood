import { Controller, ControllerProps, FieldValues } from "react-hook-form";
import { FormFieldContext } from "../lib/FormFieldContext";

const FormField = <TFieldValues extends FieldValues, TName extends keyof TFieldValues>(
  { control, name, render }: ControllerProps<TFieldValues, TName>
) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller control={control} name={name} render={render} />
    </FormFieldContext.Provider>
  );
};

export { FormField };