import { ReactNode } from "react";
import { CardVariantsProps } from "../lib/CardVariants";

export interface CardProps extends CardVariantsProps {
  children: ReactNode;
}