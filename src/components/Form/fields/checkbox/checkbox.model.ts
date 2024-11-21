import type { CheckboxUIProps } from '@/components/form/components/ui/checkbox';

export type CheckboxProps = {
  name: string;
} & Omit<CheckboxUIProps, 'name'>;
