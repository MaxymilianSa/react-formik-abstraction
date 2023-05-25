import { PropsWithChildren } from 'react';
import { clsxm } from '@lib/clsxm';
import { useFormikContext } from 'formik';

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
      <div className="flex justify-between items-center">
        {label ? (
          <label className="text-denim" htmlFor={id}>
            {label}
          </label>
        ) : null}
        {error ? <p className="text-xs text-red-errors font-bold">test</p> : null}
      </div>
      {children}
    </div>
  );
};
