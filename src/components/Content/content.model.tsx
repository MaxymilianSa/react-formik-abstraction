import { FinishingUp, PersonalInfo, PickAddons, SelectPlan } from './steps';

export const initialValues = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  duration: '0',
  addons: [],
};

export const stepsComponent = [
  <PersonalInfo key="personal-info" />,
  <SelectPlan key="select-plan" />,
  <PickAddons key="pick-addons" />,
  <FinishingUp key="finishing-up" />,
];
