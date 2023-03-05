import * as yup from 'Yup';

import Form from './components/Form/Form';
import Input from './components/Form/Fields/Input';
import SubmitButton from './components/Form/Fields/SubmitButton';

import { useState } from 'react';
import { FormikValues } from 'formik';

const schemaStepOne = yup.object({
  name: yup.string().required(),
  surname: yup.string().required(),
});

const schemaStepTwo = yup.object({
  email: yup.string().required(),
  count: yup.number().required(),
});

const schemaSteps = [schemaStepOne, schemaStepTwo];

const StepOne = () => (
  <>
    <Input type="text" name="name" label="Imię" />
    <Input type="text" name="surname" label="Nazwisko" />
  </>
);

const StepTwo = () => (
  <>
    <Input type="email" name="email" label="Adres e-mail" />
    <Input type="number" name="count" label="Licznik" />
  </>
);

const Steps = [StepOne, StepTwo];

const initialValues = {
  name: '',
  surname: '',
  test: '',
};

const App = () => {
  const [step, setStep] = useState(0);
  const Component = Steps[step];

  const onSubmit = (values: FormikValues) => {
    setStep((prev) => (prev === 0 ? prev + 1 : prev));
    console.log(values);
  };

  return (
    <Form {...{ schema: schemaStepOne, initialValues, onSubmit }}>
      <Component />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export default App;
