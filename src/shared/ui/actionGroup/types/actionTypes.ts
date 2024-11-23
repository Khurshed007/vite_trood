import React from "react";
import { ActionGroupVariants } from "../lib/actionGroupVariants";

export interface ActionGroupProps extends ActionGroupVariants {
  children: React.ReactNode; // Accepts any React children (buttons, text, icons, etc.)
  className?: string; // Allow additional custom styles
}