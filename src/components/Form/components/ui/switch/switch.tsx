import { clsxm } from '@/lib/clsxm';

import type { SwitchButtonUIProps } from './switch.model';

const SwitchButton = ({ checked, ...props }: SwitchButtonUIProps) => (
  <button
    type="button"
    className="h-5 w-10 rounded-full flex bg-denim items-center justify-start px-1"
    {...props}
  >
    <span
      className={clsxm(
        'bg-white w-3 h-3 rounded-full transition-transform',
        checked && 'translate-x-5',
      )}
    />
  </button>
);

export default SwitchButton;
