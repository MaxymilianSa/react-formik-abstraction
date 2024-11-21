import { ComponentProps } from 'react';

import { PlanType } from '@/@types/plan';

export type RadioBoxUIProps = {
  className?: string;
  duration: 'mo' | 'yr';
} & PlanType &
  Omit<ComponentProps<'input'>, 'type' | 'content'>;
