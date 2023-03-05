import { FormikProvider, FormikValues } from 'formik';
import { ComponentProps } from 'react';
import { useYupForm, useYupFormType } from './useForm';
import { Schema } from 'Yup';

const Form = <Y extends Schema>({
  children,
  ...props
}: Omit<ComponentProps<'form'>, 'onSubmit'> & useYupFormType<Y>) => {
  const form = useYupForm({ ...props });

  return (
    <FormikProvider value={form}>
      <form onSubmit={form.handleSubmit}>
        <fieldset disabled={form.isSubmitting}>{children}</fieldset>
      </form>
    </FormikProvider>
  );
};

export default Form;
