import { createContext, PropsWithChildren, useContext, useState } from 'react';

type StepDataType = { active: number; max: number };

type StepsContextProps = {
  countStep: (direction: 'next' | 'prev', max?: number) => void;
  lastStep: number;
  setStepData: (data: StepDataType) => void;
  stepData: StepDataType;
};

export const StepsContext = createContext<StepsContextProps | null>(null);

export const StepsProvider = ({ children }: PropsWithChildren) => {
  const lastStep = 4;
  const [stepData, setStepData] = useState<StepDataType>({
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

  return (
    <StepsContext.Provider value={{ stepData, lastStep, setStepData, countStep }}>
      {children}
    </StepsContext.Provider>
  );
};

export const useStepsContext = () => {
  const ctx = useContext(StepsContext);

  if (!ctx) {
    throw new Error("Missing authContext, it's not wrapped in AuthProvider");
  }

  return ctx;
};
