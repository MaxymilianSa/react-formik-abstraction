import { FormikConfig, FormikValues, useFormik } from 'formik';

export type useFormSubmit = (values: FormikValues) => void;

export type useFormType = {
  clearForm?: boolean;
  onSubmit?: useFormSubmit;
} & FormikConfig<FormikValues>;

export const useForm = ({ onSubmit, clearForm, ...formProps }: useFormType) =>
  useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    ...formProps,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      onSubmit(values);
      setSubmitting(false);
      if (clearForm) {
        resetForm();
      }
    },
  });
