import { StepPoint } from '@/components/commons/step-point';
import { clsxm } from '@/lib/clsxm';
import { useStepsContext } from '@/providers/steps.provider';

import type { SideBarProps } from './side-bar.model';

export const SideBar = ({ steps }: SideBarProps) => {
  const {
    stepData: { active, max },
    setStepData,
  } = useStepsContext();

  return (
    <div
      className={clsxm(
        'flex justify-center gap-4 absolute w-full h-44 pt-8 bg-mobile-pattern bg-no-repeat bg-cover',
        'lg:relative lg:w-64 lg:pt-0 lg:min-h-[568px] lg:bg-desktop-pattern lg:rounded-xl lg:py-11 lg:px-10 lg:flex-col lg:items-start lg:justify-start',
      )}
    >
      {steps.map(({ id, children }, index) => (
        <StepPoint
          key={id}
          {...{
            id,
            children,
            isActive: active === index,
            clickable: max >= index,
            handleClick: () =>
              index <= max &&
              setStepData({
                active: index,
                max: max > index ? max : index,
              }),
          }}
        />
      ))}
    </div>
  );
};
