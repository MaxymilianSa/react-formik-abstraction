import { useState } from 'react';
import { useForm } from '@components/Form/useForm';

import { useStepsContext } from '@/providers/StepsProvider';

import { initialValues } from './ContentModel';

export const useContent = () => {
  const {
    stepData: { active },
    countStep,
    lastStep,
  } = useStepsContext();
  const [showSummary, setSummary] = useState<boolean>(false);

  const form = useForm({
    initialValues,
    onSubmit: () => (active === lastStep ? setSummary(true) : countStep('next', lastStep)),
  });

  return { form, active, showSummary };
};
