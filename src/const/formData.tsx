import { PlanType } from '@/@types/plan';

import { ReactComponent as AdvancedIcon } from '~/svg/advanced.svg';
import { ReactComponent as ArcadeIcon } from '~/svg/arcade.svg';
import { ReactComponent as ProIcon } from '~/svg/pro.svg';

export const steps = [
  {
    id: 1,
    children: 'Your info',
    content: {
      title: 'Personal info',
      description: 'Please provide your name, email address, and phone number.',
    },
  },
  {
    id: 2,
    children: 'select plan',
    content: {
      title: 'Select your plan',
      description: 'You have the option of monthly or yearly billing.',
    },
  },
  {
    id: 3,
    children: 'add-ons',
    content: {
      title: 'Pick add-ons',
      description: 'Add-ons help enhance your gaming experience.',
    },
  },
  {
    id: 4,
    children: 'summary',
    content: {
      title: 'Finishing up',
      description: 'Double-check everything looks OK before confirming.',
    },
  },
];

export const planOptions: PlanType[] = [
  {
    children: <ArcadeIcon />,
    content: {
      name: 'Arcade',
      price_per_month: 9,
      price_per_year: 90,
    },
    comment: '2 months free',
  },
  {
    children: <AdvancedIcon />,
    content: {
      name: 'Advanced',
      price_per_month: 12,
      price_per_year: 120,
    },
    comment: '2 months free',
  },
  {
    children: <ProIcon />,
    content: {
      name: 'Pro',
      price_per_month: 15,
      price_per_year: 150,
    },
    comment: '2 months free',
  },
];
