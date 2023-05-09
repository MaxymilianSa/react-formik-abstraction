import { PropsWithChildren } from 'react';

import { clsxm } from '@/lib/clsxm';

export type ButtonProps = PropsWithChildren & {
  className?: string;
  handleClick: () => void;
  type: 'submit' | 'button';
  variant?: keyof typeof buttonVariants;
};

const buttonVariants = {
  primary: 'border-none bg-denim rounded px-4 h-10 text-white text-sm font-medium',
  secondary: 'border-none bg-purple rounded px-4 h-10 text-white text-sm font-medium',
  clear: 'border-none bg-transparent h-10 text-grey text-sm font-medium',
} as const;

export const Button = ({
  type,
  className,
  variant = 'primary',
  children,
  handleClick,
}: ButtonProps) => (
  <button {...{ className: clsxm(buttonVariants[variant], className), type, onClick: handleClick }}>
    {children}
  </button>
);
