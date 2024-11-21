import type { RadioBoxUIProps } from '@/components/form/components/ui/radio-box';

export type RadioBoxProps = {
  name: string;
} & Omit<RadioBoxUIProps, 'name'>;
