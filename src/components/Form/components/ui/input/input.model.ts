import { ComponentProps } from 'react';

export type InputUIProps = {
  className?: string;
  error?: string;
} & ComponentProps<'input'>;
