import { Actions } from '@/components/commons/Actions';
import { StepPoint } from '@/components/commons/StepPoint';
import { Step } from '@/components/Step/Step';
import { clsxm } from '@/lib/clsxm';

import { steps } from './LayoutModel';
import { useLayout } from './useLayout';

export const Layout = () => {
  const {
    stepData: { active, max },
    setStepData,
    countStep,
  } = useLayout();

  return (
    <>
      <div
        className={clsxm(
          'relative w-full flex justify-center',
          'lg:max-w-4xl lg:bg-white lg:shadow-base lg:rounded-lg lg:p-4 lg:justify-start lg:items-stretch lg:gap-24',
        )}
      >
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
                handleClick: () => {
                  index <= max &&
                    setStepData(({ max }) => ({
                      active: index,
                      max: max > index ? max : index,
                    }));
                },
              }}
            />
          ))}
        </div>
        <div
          className={clsxm(
            'relative z-10 top-24 flex w-80 h-96 bg-white shadow-base rounded-lg px-6 py-8',
            'lg:bg-transparent lg:shadow-none lg:pl-0 lg:pr-20 lg:h-auto lg:top-0 lg:pt-10 lg:pb-4 lg:flex-1 lg:flex-col',
          )}
        >
          <Step {...steps[active].content} />
          <Actions
            className="hidden mt-auto px-0 shadow-none z-50 lg:flex"
            {...{
              activeStep: active,
              handleBack: () => countStep('prev'),
              handleNext: () => countStep('next', 3),
              lastStep: 4,
            }}
          />
        </div>
      </div>
      <Actions
        className="fixed bottom-0 z-50 lg:hidden"
        {...{
          activeStep: active,
          handleBack: () => countStep('prev'),
          handleNext: () => countStep('next', 3),
          lastStep: 4,
        }}
      />
    </>
  );
};
