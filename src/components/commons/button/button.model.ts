import { ComponentProps, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren & {
  className?: string;
  variant?: keyof typeof buttonVariants;
} & ComponentProps<'button'>;

export const buttonVariants = {
  primary: 'border-none bg-denim rounded px-4 h-10 text-white text-sm font-medium',
  secondary: 'border-none bg-purple rounded px-4 h-10 text-white text-sm font-medium',
  clear: 'border-none bg-transparent h-10 text-grey text-sm font-medium',
} as const;
