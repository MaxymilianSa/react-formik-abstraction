import { ReactComponent as CheckIcon } from '~/svg/check-summary.svg';

export const Summary = () => (
  <div className="w-full flex flex-col items-center justify-center">
    <CheckIcon className="w-10 h-10 lg:w-20 lg:h-20" />
    <h1 className="text-denim text-2xl leading-7 font-bold mt-6 lg:mt-8 mb-2 lg:mb-3">
      Thank you!
    </h1>
    <p className="text-grey leading-6 text-center">
      Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
      need support, please feel free to email us at support@loremgaming.com.
    </p>
  </div>
);
