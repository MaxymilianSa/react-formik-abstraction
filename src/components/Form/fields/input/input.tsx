import { useFormikContext } from 'formik';

import FormField, { useFormField } from '@/components/form/components/form-field';
import Root from '@/components/form/components/ui/input/input';

import type { InputProps } from './input.model';

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
