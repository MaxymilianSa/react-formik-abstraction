import Input from '@components/Form/UI/Input/Input';
import type { Meta } from '@storybook/react';

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
