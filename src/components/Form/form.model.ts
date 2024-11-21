import type { PropsWithChildren } from 'react';
import type { FormikConfig, FormikContextType, FormikValues } from 'formik';

export type useFormSubmit = (values: FormikValues) => void;

export type useFormType = {
  clearForm?: boolean;
  onSubmit?: useFormSubmit;
} & FormikConfig<FormikValues>;

export type FormProps = {
  className?: string;
  form: FormikContextType<FormikValues>;
} & Pick<useFormType, 'children'> &
  PropsWithChildren;
