import type { Meta } from '@storybook/react';

import SwitchButton from './SwitchButton';

const meta: Meta<typeof SwitchButton> = {
  title: 'SwitchButton',
  component: SwitchButton,
};

export default meta;

export const Primary = {
  args: {
    checked: true,
  },
};
