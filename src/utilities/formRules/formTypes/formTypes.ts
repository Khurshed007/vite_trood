import { formRules } from "../formRules";
import * as z from "zod";
export type formTypes = z.infer<typeof formRules>;