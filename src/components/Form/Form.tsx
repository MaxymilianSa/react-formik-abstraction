import { FormikProvider } from 'formik';

import type { FormProps } from './form.model';

const Form = ({ children, className, form }: FormProps) => (
  <FormikProvider value={form}>
    <form onSubmit={form.handleSubmit} className={className}>
      <fieldset disabled={form.isSubmitting} className={className}>
        {children}
      </fieldset>
    </form>
  </FormikProvider>
);

export default Form;
