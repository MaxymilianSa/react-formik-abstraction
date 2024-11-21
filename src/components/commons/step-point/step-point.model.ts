import { PropsWithChildren } from 'react';

export type StepPointProps = PropsWithChildren & {
  clickable: boolean;
  handleClick: () => void;
  id: number;
  isActive: boolean;
};
