import { PropsWithChildren } from 'react';

import { steps } from '@/const/form-data';
import { clsxm } from '@/lib/clsxm';

import { SideBar } from './components/side-bar';

const Layout = ({ children }: PropsWithChildren) => (
  <div className="lg:flex lg:py-28 justify-center">
    <div
      className={clsxm(
        'relative w-full flex justify-center',
        'lg:max-w-4xl lg:bg-white lg:shadow-base lg:rounded-lg lg:p-4 lg:justify-start lg:items-stretch lg:gap-24',
      )}
    >
      <SideBar {...{ steps }} />
      {children}
    </div>
  </div>
);

export default Layout;
