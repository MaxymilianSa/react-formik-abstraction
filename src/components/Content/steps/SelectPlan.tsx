import { RadioBox } from '@/components/Form/Fields/RadioBox';
import { planOptions } from '@/const/formData';

export const SelectPlan = () => (
  <div className="w-full flex flex-col gap-3 lg:flex-row">
    {planOptions.map((plan) => (
      <RadioBox
        key={plan.content.name}
        {...{
          ...plan,
          duration: 'mo',
          name: 'plan',
          value: plan.content.name.toLowerCase(),
          className: 'lg:w-[33.33333%]',
        }}
      />
    ))}
  </div>
);
