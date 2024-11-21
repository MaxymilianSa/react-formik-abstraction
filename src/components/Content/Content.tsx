import Form from '@/components/form';
import { Actions } from '@/components/layout/components/actions';
import { steps } from '@/const/form-data';
import { clsxm } from '@/lib/clsxm';

import { Header } from './components/header';
import { useContent } from './content.controller';
import { stepsComponent } from './content.model';
import { Summary } from './steps';

const Content = () => {
  const { active, form, showSummary } = useContent();

  return (
    <div
      className={clsxm(
        'absolute z-10 top-24 flex w-80 bg-white shadow-base rounded-lg px-6 py-8',
        'relative lg:bg-transparent lg:shadow-none lg:pl-0 lg:pr-20 lg:h-auto lg:top-0 lg:pt-10 lg:pb-4 lg:flex-1 lg:flex-col lg:items-stretch',
        showSummary && 'py-20 lg:pt-40',
      )}
    >
      {showSummary ? (
        <Summary />
      ) : (
        <Form {...{ form, className: 'flex flex-col gap-10 h-full' }}>
          <Header {...steps[active].content} />
          {stepsComponent[active]}
          <Actions className="fixed lg:relative bottom-0 left-0 mt-auto lg:px-0 shadow-none z-50 lg:h-auto lg:flex" />
        </Form>
      )}
    </div>
  );
};

export default Content;
