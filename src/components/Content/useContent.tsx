import { useForm } from '@components/Form/useForm';

import { useStepsContext } from '@/providers/StepsProvider';

import { initialValues } from './ContentModel';

export const useContent = () => {
  const {
    stepData: { active },
    countStep,
    lastStep,
  } = useStepsContext();

  const form = useForm({
    initialValues,
    onSubmit: () => countStep('next', lastStep),
  });

  return { form, active };
};
