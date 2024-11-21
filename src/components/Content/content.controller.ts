import { useState } from 'react';

import { useForm } from '@/components/form/form.controller';
import { useStepsContext } from '@/providers/steps.provider';

import { initialValues } from './content.model';

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
