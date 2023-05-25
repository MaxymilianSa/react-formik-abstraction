import { PersonalInfo } from './steps/PersonalInfo';
import { SelectPlan } from './steps/SelectPlan';

export const initialValues = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
};

export const stepsComponent = [
  <PersonalInfo key="personal-info" />,
  <SelectPlan key="select-plan" />,
];
