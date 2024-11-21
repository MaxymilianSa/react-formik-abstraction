import { PropsWithChildren } from 'react';

export type FormFieldProps = {
  className?: string;
  id: string;
  label?: string;
  name: string;
} & PropsWithChildren;
