import { ComponentProps } from 'react';

export type SwitchButtonUIProps = {
  checked: boolean;
} & Pick<ComponentProps<'button'>, 'onClick'>;
