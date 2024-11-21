import type { InputUIProps } from '@/components/form/components/ui/input';

export type InputProps = {
  label?: string;
  name: string;
} & Omit<InputUIProps, 'name'>;
