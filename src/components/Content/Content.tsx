import { Form } from '@components/Form/Form';

import { Actions } from '@/components/Layout/components/Actions';
import { steps } from '@/const/formData';
import { clsxm } from '@/lib/clsxm';

import { Header } from './components/Header';
import { stepsComponent } from './ContentModel';
import { useContent } from './useContent';

export const Content = () => {
  const { active, form } = useContent();

  return (
    <div
      className={clsxm(
        'relative z-10 top-24 flex w-80 bg-white shadow-base rounded-lg px-6 py-8',
        'lg:bg-transparent lg:shadow-none lg:pl-0 lg:pr-20 lg:h-auto lg:top-0 lg:pt-10 lg:pb-4 lg:flex-1 lg:flex-col',
      )}
    >
      <Form {...{ form, className: 'flex flex-col gap-10' }}>
        <Header {...steps[active].content} />
        {stepsComponent[active]}
      </Form>
      <Actions className="hidden mt-auto px-0 shadow-none z-50 h-auto lg:flex" />
    </div>
  );
};
