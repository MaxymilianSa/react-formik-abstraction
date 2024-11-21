import { Button } from '@components/commons/button';

import { clsxm } from '@/lib/clsxm';
import { useStepsContext } from '@/providers/steps.provider';

import type { ActionsProps } from './actions.model';

export const Actions = ({ className }: ActionsProps) => {
  const {
    stepData: { active },
    lastStep,
    countStep,
  } = useStepsContext();

  return (
    <div
      className={clsxm(
        'flex justify-between items-center h-20 px-4 shadow-base bg-white w-full',
        active <= 0 && 'justify-end',
        className,
      )}
    >
      {active > 0 ? (
        <Button variant="clear" onClick={() => countStep('prev')}>
          Go Back
        </Button>
      ) : null}
      <Button type="submit" variant={active === lastStep ? 'secondary' : 'primary'}>
        {active === lastStep ? 'Confirm' : 'Next Step'}
      </Button>
    </div>
  );
};
