import { PropsWithChildren } from 'react';

import { clsxm } from '@/lib/clsxm';

export type StepPointProps = PropsWithChildren & {
  clickable: boolean;
  handleClick: () => void;
  id: number;
  isActive: boolean;
};

export const StepPoint = ({ isActive, id, children, clickable, handleClick }: StepPointProps) => (
  <button
    type="button"
    className={clsxm(
      'w-8 h-8 border border-white rounded-full flex items-center justify-center',
      clickable ? 'cursor-pointer' : 'cursor-default',
      isActive && 'bg-sky-blue border-sky-blue lg:bg-transparent lg:border-white',
      'lg:w-full lg:border-none lg:gap-4 lg:justify-start',
    )}
    onClick={handleClick}
  >
    <p
      className={clsxm(
        'text-white font-bold text-sm flex',
        isActive && 'text-denim lg:bg-sky-blue lg:border-sky-blue',
        'lg:w-8 lg:h-8 lg:border lg:border-white lg:rounded-full lg:items-center lg:justify-center',
      )}
    >
      {id}
    </p>
    <div className={clsxm('hidden flex-col gap-1 justify-start items-start', 'lg:flex')}>
      <span className="uppercase text-light-blue text-xs">step {id}</span>
      <p className="uppercase text-white font-bold text-sm">{children}</p>
    </div>
  </button>
);
