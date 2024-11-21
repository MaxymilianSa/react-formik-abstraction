import { useFormikContext } from 'formik';

import FormField, { useFormField } from '@/components/form/components/form-field';
import Root from '@/components/form/components/ui/radio-box/radio-box';

import type { RadioBoxProps } from './radio-box.model';

export const RadioBox = ({ ...props }: RadioBoxProps) => {
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
          checked: props.value === currentValue,
        }}
      />
    </FormField>
  );
};
