import { FormikContextType, FormikValues, useFormikContext } from 'formik';

import { Checkbox } from '@/components/Form/Fields/Checkbox';
import { addonOptions } from '@/const/formData';

export const PickAddons = () => {
  const { values }: FormikContextType<FormikValues> = useFormikContext();

  return (
    <div className="w-full flex flex-col gap-3">
      {addonOptions.map((addon) => (
        <Checkbox
          key={addon.name}
          {...{
            content: {
              ...addon,
            },
            duration: values.duration === '0' ? 'mo' : 'yr',
            name: 'addons',
            value: addon.name.toLowerCase(),
            className: 'w-full',
          }}
        />
      ))}
    </div>
  );
};
