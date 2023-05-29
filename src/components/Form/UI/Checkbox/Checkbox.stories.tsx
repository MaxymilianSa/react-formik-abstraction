import type { Meta } from '@storybook/react';

import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

export const Primary = {
  args: {
    content: {
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: {
        per_month: 1,
        per_year: 10,
      },
    },
    duration: 'mo',
    checked: true,
    className: 'max-w-[400px] mx-auto',
  },
};
