import { clsxm } from '@/lib/clsxm';

import { Button } from './Button';

export type ActionsProps = {
  activeStep: number;
  className?: string;
  handleBack: () => void;
  handleNext: () => void;
  lastStep: number;
};

export const Actions = ({
  activeStep,
  lastStep,
  handleBack,
  handleNext,
  className,
}: ActionsProps) => (
  <div
    className={clsxm(
      'flex justify-between items-center h-20 px-4 shadow-base bg-white w-full',
      activeStep <= 0 && 'justify-end',
      className,
    )}
  >
    {activeStep > 0 ? (
      <Button type="button" variant="clear" handleClick={handleBack}>
        Go Back
      </Button>
    ) : null}
    <Button type={activeStep === lastStep ? 'submit' : 'button'} handleClick={handleNext}>
      Next Step
    </Button>
  </div>
);
