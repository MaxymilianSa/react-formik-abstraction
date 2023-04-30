import { clsxm } from '@/lib/clsxm';

export const Layout = () => (
  <div
    className={clsxm(
      'relative w-full flex justify-center',
      'lg:max-w-4xl lg:bg-white lg:shadow-base lg:rounded-lg lg:p-4 lg:justify-start',
    )}
  >
    <div
      className={clsxm(
        'flex justify-center gap-4 absolute w-full h-44 pt-8 bg-mobile-pattern bg-no-repeat bg-cover',
        'lg:relative lg:w-64 lg:pt-0 lg:min-h-[568px] lg:bg-desktop-pattern lg:rounded-xl lg:py-11 lg:px-10 lg:flex-col lg:items-start lg:justify-start',
      )}
    >
      <button
        type="button"
        className={clsxm(
          'w-8 h-8 border border-white rounded-full flex items-center justify-center',
          'bg-sky-blue border-sky-blue',
        )}
      >
        <p className={clsxm('text-white font-bold text-sm', 'text-denim')}>1</p>
      </button>
      <button
        type="button"
        className="w-8 h-8 border border-white rounded-full flex items-center justify-center"
      >
        <p className="text-white font-bold text-sm">2</p>
      </button>
      <button
        type="button"
        className="w-8 h-8 border border-white rounded-full flex items-center justify-center"
      >
        <p className="text-white font-bold text-sm">3</p>
      </button>
      <button
        type="button"
        className="w-8 h-8 border border-white rounded-full flex items-center justify-center"
      >
        <p className="text-white font-bold text-sm">4</p>
      </button>
    </div>
    <div className="relative z-10 top-24 flex w-80 h-96 bg-white shadow-base rounded-lg lg:bg-transparent lg:shadow-none" />
  </div>
);
