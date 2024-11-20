// import { type InputVariants } from "../lib/inputVariants";

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement>,
//     InputVariants {
//   startIcon?: React.ReactNode; // Иконка слева
//   endIcon?: React.ReactNode; // Иконка справа
// }
import type { VariantProps } from 'class-variance-authority';
import { inputVariants } from '../lib/inputVariants';

export type InputVariants = VariantProps<typeof inputVariants>;
