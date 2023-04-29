import { PropsWithChildren } from 'react';
import { useFormikContext } from 'formik';
import { clsxm } from 'lib/clsxm';

type FormFieldType = {
  className?: string;
  id: string;
  label?: string;
  name: string;
} & PropsWithChildren;

export const useFormField = <P extends Pick<FormFieldType, 'name' | 'label' | 'className'>>(
  props: P,
) => {
  const { label, name, className, ...otherProps } = props;
  const id = name;

  return {
    formFieldProps: { id, name, label, className },
    childProps: { ...otherProps, id, name },
  };
};

export const FormField = ({ children, name, id, label, className }: FormFieldType) => {
  const form = useFormikContext();
  const { error } = form.getFieldMeta(name);

  return (
    <div className={clsxm('flex flex-col gap-2', className)}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      {children}
      {error ? <p className="text-xs text-error -mt-2">{error}</p> : null}
    </div>
  );
};
