import { FinishingUp } from './steps/FinishingUp';
import { PersonalInfo } from './steps/PersonalInfo';
import { PickAddons } from './steps/PickAddons';
import { SelectPlan } from './steps/SelectPlan';

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
