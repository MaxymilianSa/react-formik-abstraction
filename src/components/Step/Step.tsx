import { Actions } from '@/components/Layout/components/Actions';
import { clsxm } from '@/lib/clsxm';
import { steps } from '@/lib/data';
import { useStepsContext } from '@/providers/StepsProvider';

import { Header } from './components/Header';

export const Step = () => {
  const {
    stepData: { active },
  } = useStepsContext();

  return (
    <div
      className={clsxm(
        'relative z-10 top-24 flex w-80 h-96 bg-white shadow-base rounded-lg px-6 py-8',
        'lg:bg-transparent lg:shadow-none lg:pl-0 lg:pr-20 lg:h-auto lg:top-0 lg:pt-10 lg:pb-4 lg:flex-1 lg:flex-col',
      )}
    >
      <div className="flex flex-col">
        <Header {...steps[active].content} />
      </div>
      <Actions className="hidden mt-auto px-0 shadow-none z-50 lg:flex" />
    </div>
  );
};
