import type { Meta } from '@storybook/react';

import RadioBox from './radio-box';

import { ReactComponent as ArcadeIcon } from '~/svg/arcade.svg';

const meta: Meta<typeof RadioBox> = {
  title: 'RadioBox',
  component: RadioBox,
};

export default meta;

export const Primary = {
  args: {
    children: <ArcadeIcon />,
    content: {
      name: 'Arcade',
      price_per_month: 9,
      price_per_year: 90,
    },
    comment: '2 months free',
    duration: 'mo',
    className: 'max-w-[400px] mx-auto',
  },
};
