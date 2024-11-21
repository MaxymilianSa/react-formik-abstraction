import { useFormikContext } from 'formik';

import Root from '@/components/form/components/ui/switch/switch';

import type { SwitchProps } from './switch.model';

export const Switch = ({ name }: SwitchProps) => {
  const form = useFormikContext();
  const { value } = form.getFieldMeta<string | number | readonly string[] | undefined>(name);

  return (
    <Root
      {...{
        onClick: () => form.setFieldValue(name, value === '0' ? '1' : '0'),
        checked: value === '1',
      }}
    />
  );
};
