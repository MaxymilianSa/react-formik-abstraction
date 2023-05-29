import { useFormikContext } from 'formik';

import { FormField, useFormField } from '@/components/Form/FormField';
import Root, { CheckboxUIProps } from '@/components/Form/UI/Checkbox/Checkbox';

type CheckboxProps = {
  name: string;
} & Omit<CheckboxUIProps, 'name'>;

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const { formFieldProps, childProps } = useFormField(props);
  const form = useFormikContext();
  const { value: currentValue } = form.getFieldMeta<
    string | number | readonly string[] | undefined
  >(props.name);

  return (
    <FormField {...formFieldProps}>
      <Root
        {...{
          ...childProps,
          onChange: form.handleChange,
          checked:
            typeof currentValue !== 'number' && typeof props.value === 'string'
              ? currentValue?.includes(props.value)
              : false,
        }}
      />
    </FormField>
  );
};
