import { clsxm } from '@/lib/clsxm';

import { type ButtonProps, buttonVariants } from './button.model';

export const Button = ({
  className,
  variant = 'primary',
  children,
  type = 'button',
  ...props
}: ButtonProps) => (
  <button {...{ className: clsxm(buttonVariants[variant], className), type, ...props }}>
    {children}
  </button>
);
