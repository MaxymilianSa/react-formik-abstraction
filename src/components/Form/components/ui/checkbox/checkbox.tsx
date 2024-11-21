import { clsxm } from '@/lib/clsxm';

import type { CheckboxUIProps } from './checkbox.model';

import { ReactComponent as CheckIcon } from '~/svg/check.svg';

const Checkbox = ({ className, content, duration, name, ...props }: CheckboxUIProps) => (
  <label
    id={name}
    className={clsxm(
      'py-3 px-4 flex flex-row items-center gap-4 border border-border-color bg-white rounded-lg cursor-pointer hover:border-purple hover:bg-very-light-grey transition-colors',
      'lg:py-4 lg:px-6',
      props.checked && 'border-purple bg-very-light-grey',
      className,
    )}
  >
    <input className="hidden" {...{ ...props, name, type: 'checkbox' }} />
    <span
      className={clsxm(
        'w-5 h-5 rounded border border-border-color flex items-center justify-center',
        props.checked && 'border-purple bg-purple',
      )}
    >
      {props.checked ? <CheckIcon /> : null}
    </span>
    <div className="flex flex-col gap-1">
      <p className="text-denim text-sm leading-4 font-medium">{content.name}</p>
      <p className="text-grey text-xs leading-5">{content.description}</p>
    </div>
    <p className="text-purple text-xs leading-5 ml-auto">
      +${duration === 'mo' ? content.price.per_month : content.price.per_year}/{duration}
    </p>
  </label>
);

export default Checkbox;
