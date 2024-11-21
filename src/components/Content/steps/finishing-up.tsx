import { type FormikContextType, type FormikValues, useFormikContext } from 'formik';

import { planOptions } from '@/const/form-data';
import { addonOptions } from '@/const/form-data';
import { sumNumbers } from '@/lib/helpers';
import { useStepsContext } from '@/providers/steps.provider';

export const FinishingUp = () => {
  const { values }: FormikContextType<FormikValues> = useFormikContext();
  const { setStepData } = useStepsContext();

  const activePlan = planOptions.find(({ content }) => content.name.toLowerCase() === values.plan);
  const filteredAddons = addonOptions.filter(({ name }) =>
    values.addons.includes(name.toLowerCase()),
  );

  if (!activePlan) {
    setStepData({ active: 1, max: 3 });
    return <p>Not enough data!</p>;
  }

  const planPrice =
    values.duration === '0'
      ? activePlan?.content.price_per_month
      : activePlan?.content.price_per_year;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 p-4 rounded-lg bg-very-light-grey">
        <div className="flex justify-between items-center pb-3 border-b border-grey">
          <div className="flex flex-col gap-1 items-start">
            <p className="text-sm leading-4 text-denim font-medium">
              {activePlan.content.name} ({values.duration === '0' ? 'Monthy' : 'Yearly'})
            </p>
            <button
              onClick={() => setStepData({ active: 1, max: 3 })}
              className="border-none underline text-grey text-sm leading-5"
            >
              Change
            </button>
          </div>
          <p className="text-sm leading-4 text-denim font-bold">
            ${planPrice}/{values.duration === '0' ? 'mo' : 'yr'}
          </p>
        </div>
        {filteredAddons.map(({ name, price }) => (
          <div key={name} className="flex justify-between items-center">
            <p className="text-grey text-sm leading-5">{name}</p>
            <p className="text-denim text-sm leading-5">
              +${values.duration === '0' ? price.per_month : price.per_year}/
              {values.duration === '0' ? 'mo' : 'yr'}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center px-4">
        <p className="text-grey text-sm leading-5">
          Total (per {values.duration === '0' ? 'month' : 'year'})
        </p>
        <p className="text-purple leading-5 font-bold">
          $
          {sumNumbers([
            ...filteredAddons.map(({ price }) =>
              values.duration === '0' ? price.per_month : price.per_year,
            ),
            planPrice,
          ])}
          /{values.duration === '0' ? 'mo' : 'yr'}
        </p>
      </div>
    </div>
  );
};
