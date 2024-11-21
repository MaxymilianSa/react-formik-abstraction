import { useFormik } from 'formik';

import type { useFormType } from './form.model';

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
