import { PersonalInfo } from './steps/PersonalInfo';
import { SelectPlan } from './steps/SelectPlan';

export const initialValues = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  duration: '0',
};

export const stepsComponent = [
  <PersonalInfo key="personal-info" />,
  <SelectPlan key="select-plan" />,
];
