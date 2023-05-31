import { FormikContextType, FormikValues, useFormikContext } from 'formik';

import { RadioBox } from '@/components/Form/Fields/RadioBox';
import { SwitchButton } from '@/components/Form/Fields/SwitchButton';
import { planOptions } from '@/const/formData';

export const SelectPlan = () => {
  const { values }: FormikContextType<FormikValues> = useFormikContext();

  const durationClassName = (isActive: boolean) =>
    isActive ? 'text-denim text-sm font-medium' : 'text-grey text-sm font-medium';

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col gap-3 lg:flex-row">
        {planOptions.map((plan) => (
          <RadioBox
            key={plan.content.name}
            {...{
              ...plan,
              duration: values.duration === '0' ? 'mo' : 'yr',
              name: 'plan',
              value: plan.content.name.toLowerCase(),
              className: 'lg:w-[33.33333%]',
            }}
          />
        ))}
      </div>
      <div className="bg-very-light-grey w-full h-12 rounded-lg flex justify-center items-center gap-6">
        <p className={durationClassName(values.duration === '0')}>Monthly</p>
        <SwitchButton name="duration" />
        <p className={durationClassName(values.duration === '1')}>Yearly</p>
      </div>
    </div>
  );
};
