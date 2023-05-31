import type { Meta } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

export const Primary = {
  args: {
    name: 'Name',
    value: '',
    type: 'text',
  },
};
