import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "../shared/ui/form/index";
import { Input } from "../shared/ui/input/ui/input";
import { formRules } from "../utilities/formRules/formRules"; // Import validation schema
import type { formTypes } from "../utilities/formRules/formTypes/formTypes"; // Infer types from schema

import { ActionGroup } from "../shared/ui/actionGroup/ui/actionGroup";
import { Button } from "../shared/ui/button/ui/button";
import { Section } from "../shared/ui/section/ui/Section";
import { Card } from "../shared/ui/formSection/ui/FormSection";
import { Title } from "../shared/ui/Title/ui/Title";

function Login() {
  const form = useForm<formTypes>({
    resolver: zodResolver(formRules),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { errors } = form.formState; // Access errors from form state

  const onSubmit = (data: formTypes) => {
    console.log("Login Data:", data);
  };

  return (
    <Section alignment="center">
      <Title size="6xl">Trood</Title>
      <Card>
        <Title>Authorization</Title>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <h1 className="text-xl font-bold text-center">Login</h1>

            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    id="username"
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    placeholder="Enter your username"
                    dynamicText="Username"
                    variant={errors.username ? "error" : "default"} // Dynamically assign variant
                    isError = {errors.username}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    placeholder="Enter your password"
                    dynamicText="Password"
                    variant={errors.password ? "error" : "default"} // Dynamically assign variant
                    isError = {errors.username}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <ActionGroup layout="double" alignment="center">
              <Button variant="default" width="half">
                Log in
              </Button>
              <Button variant="secondary" width="half">
                Sign up
              </Button>
            </ActionGroup>
          </form>
        </Form>
      </Card>
    </Section>
  );
}

export default Login;