import { Header, HeaderProps } from './components/Header';

type StepProps = HeaderProps;

export const Step = (props: StepProps) => (
  <div className="flex flex-col">
    <Header {...props} />
  </div>
);
