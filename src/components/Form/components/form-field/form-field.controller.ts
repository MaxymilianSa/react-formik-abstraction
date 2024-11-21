import type { FormFieldProps } from './form-field.model';

export const useFormField = <P extends Pick<FormFieldProps, 'name' | 'label' | 'className'>>(
  props: P,
) => {
  const { label, name, className, ...otherProps } = props;
  const id = name;

  return {
    formFieldProps: { id, name, label, className },
    childProps: { ...otherProps, id, name },
  };
};
