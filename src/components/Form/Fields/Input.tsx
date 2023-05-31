import { useFormikContext } from 'formik';

import { FormField, useFormField } from '@/components/Form/FormField';
import Root, { InputUIProps } from '@/components/Form/UI/Input/Input';

type InputProps = {
  label?: string;
  name: string;
} & Omit<InputUIProps, 'name'>;

export const Input = ({ ...props }: InputProps) => {
  const { formFieldProps, childProps } = useFormField(props);
  const form = useFormikContext();
  const { value, error } = form.getFieldMeta<string | number | readonly string[] | undefined>(
    props.name,
  );

  return (
    <FormField {...formFieldProps}>
      <Root
        {...{ ...childProps, value, error, onChange: form.handleChange, onBlur: form.handleBlur }}
      />
    </FormField>
  );
};
