import { ComponentProps } from 'react';

import { PlanType } from '@/@types/plan';
import { clsxm } from '@/lib/clsxm';

export type RadioBoxUIProps = {
  className?: string;
  duration: 'mo' | 'yr';
} & PlanType &
  Omit<ComponentProps<'input'>, 'type' | 'content'>;

const RadioBox = ({
  children,
  className,
  content,
  comment,
  duration,
  name,
  ...props
}: RadioBoxUIProps) => (
  <label
    id={name}
    className={clsxm(
      'w-full py-5 px-4 flex flex-row gap-4 items-center border border-border-color rounded-lg cursor-pointer bg-white hover:border-purple hover:bg-very-light-grey transition-colors',
      'lg:flex-col lg:justify-start lg:items-start lg:gap-10',
      props.checked && 'border-purple bg-very-light-grey',
      className,
    )}
  >
    {children}
    <div className="flex flex-col gap-1">
      <p className="text-denim font-medium">{content.name}</p>
      <p className="text-grey text-sm leading-5">
        ${duration === 'mo' ? content.price_per_month : content.price_per_year}/{duration}
      </p>
      {comment ? (
        <p className="hidden lg:inline-block text-xs leading-4 text-denim">{comment}</p>
      ) : null}
    </div>
    <input className="hidden" {...{ ...props, name, type: 'radio' }} />
  </label>
);

export default RadioBox;
