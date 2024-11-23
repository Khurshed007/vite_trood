import { cva, type VariantProps } from 'class-variance-authority';

export const InputVariants = cva(
  'w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1 transition',
  {
    variants: {
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      variant: {
        default: 'border-input focus:ring-ring colo',
        outline: 'border-2 border-blue-500 focus:ring-blue-600',
        error: 'border-red-500 text-red-600 focus:ring-red-600',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

export type inputTypes = VariantProps<typeof InputVariants>;