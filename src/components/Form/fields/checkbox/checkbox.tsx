import { useFormikContext } from 'formik';

import FormField, { useFormField } from '@/components/form/components/form-field';
import Root from '@/components/form/components/ui/checkbox';

import type { CheckboxProps } from './checkbox.model';

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
