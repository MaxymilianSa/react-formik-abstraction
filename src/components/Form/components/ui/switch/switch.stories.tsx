import type { Meta } from '@storybook/react';

import Switch from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
};

export default meta;

export const Primary = {
  args: {
    checked: true,
  },
};
