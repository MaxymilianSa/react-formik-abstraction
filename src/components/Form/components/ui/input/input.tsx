import { clsxm } from '@/lib/clsxm';

import type { InputUIProps } from './input.model';

const Input = ({ className, error, ...props }: InputUIProps) => (
  <input
    {...props}
    className={clsxm(
      'border border-border-color rounded-lg h-12 px-4 text-denim focus:border-purple outline-none',
      error && 'border-red-errors',
      className,
    )}
  />
);

export default Input;
