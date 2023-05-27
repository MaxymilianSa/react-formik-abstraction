import { useFormikContext } from 'formik';

import Root from '@/components/Form/UI/SwitchButton/SwitchButton';

type SwitchButtonProps = {
  name: string;
};

export const SwitchButton = ({ name }: SwitchButtonProps) => {
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
