import { cva, type VariantProps } from 'class-variance-authority';

export const DynamicTextVariants = cva(
  'absolute transition-all bg-white px-1', // Базовые стили
  {
    variants: {
      color: {
        default: 'text-gray-500',
        primary: 'text-blue-500',
        error: 'text-red-600',
        success: 'text-green-500',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      position: {
        inside: 'top-2.5 left-4',
        outside: 'top-[-10px] left-4',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'md',
      position: 'inside',
    },
  }
);

export type DynamicTextTypes = VariantProps<typeof DynamicTextVariants>;