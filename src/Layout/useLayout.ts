import { useState } from 'react';

export const useLayout = () => {
  const [stepData, setStepData] = useState<{ active: number; max: number }>({
    active: 0,
    max: 0,
  });

  const countStep = (direction: 'next' | 'prev', max = 0) => {
    if (direction === 'next' && stepData.active < max) {
      return setStepData(({ active, max }) => ({
        active: active + 1,
        max: max > active + 1 ? max : active + 1,
      }));
    }

    if (direction === 'prev' && stepData.active > 0) {
      return setStepData(({ active, max }) => ({ active: active - 1, max }));
    }
  };

  return { stepData, setStepData, countStep };
};
