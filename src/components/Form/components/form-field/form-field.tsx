import { clsxm } from '@lib/clsxm';
import { useFormikContext } from 'formik';

import type { FormFieldProps } from './form-field.model';

const FormField = ({ children, name, id, label, className }: FormFieldProps) => {
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

export default FormField;
