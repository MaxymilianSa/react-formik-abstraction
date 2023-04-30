import { Button } from '@components/commons/Button';

import { clsxm } from '@/lib/clsxm';
import { useStepsContext } from '@/providers/StepsProvider';

export type ActionsProps = {
  className?: string;
};

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
        <Button type="button" variant="clear" handleClick={() => countStep('prev')}>
          Go Back
        </Button>
      ) : null}
      <Button
        type={active === lastStep ? 'submit' : 'button'}
        handleClick={() => countStep('next', 3)}
      >
        Next Step
      </Button>
    </div>
  );
};
