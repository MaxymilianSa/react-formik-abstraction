import { useFormikContext } from 'formik';

import { FormField, useFormField } from '@/components/Form/FormField';
import Root, { RadioBoxUIProps } from '@/components/Form/UI/RadioBox/RadioBox';

type RadioBoxProps = {
  name: string;
} & Omit<RadioBoxUIProps, 'name'>;

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
