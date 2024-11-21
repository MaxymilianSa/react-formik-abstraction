import { ComponentProps } from 'react';

import { AddonType } from '@/@types/addon';

export type CheckboxUIProps = {
  className?: string;
  content: AddonType;
  duration: 'mo' | 'yr';
} & Omit<ComponentProps<'input'>, 'type' | 'content'>;
