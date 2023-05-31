import { ComponentProps, PropsWithChildren } from 'react';

import { clsxm } from '@/lib/clsxm';

export type ButtonProps = PropsWithChildren & {
  className?: string;
  variant?: keyof typeof buttonVariants;
} & ComponentProps<'button'>;

const buttonVariants = {
  primary: 'border-none bg-denim rounded px-4 h-10 text-white text-sm font-medium',
  secondary: 'border-none bg-purple rounded px-4 h-10 text-white text-sm font-medium',
  clear: 'border-none bg-transparent h-10 text-grey text-sm font-medium',
} as const;

export const Button = ({ className, variant = 'primary', children, ...props }: ButtonProps) => (
  <button {...{ className: clsxm(buttonVariants[variant], className), ...props }}>
    {children}
  </button>
);
