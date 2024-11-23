import * as z from "zod";

// Define validation rules as constants
const usernameValidation = z
  .string()
  .min(1, "This field is required") // Ensures the field is required
  .refine((val) => !/\d/.test(val), {
    message: "Username cannot contain numbers", // Custom rule: no numbers
  });

const passwordValidation = z
  .string()
  .min(8, "Password must be at least 8 characters"); // Password length validation

const emailValidation = z
  .string()
  .email("Invalid email address") // Validates the email format
  .min(1, "This field is required"); // Ensures the field is required

// Use the constants in the form schema
const formRules = z.object({
  username: usernameValidation.optional().nullable(),
  password: passwordValidation.optional().nullable(),
  email: emailValidation.optional().nullable(),
});

export { formRules, usernameValidation, passwordValidation, emailValidation };