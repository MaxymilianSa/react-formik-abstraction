import type { HeaderProps } from './header.model';

export const Header = ({ title, description }: HeaderProps) => (
  <div className="flex flex-col gap-2 lg:gap-3">
    <h1 className="font-bold text-2xl lg:text-3xl text-denim">{title}</h1>
    {description ? <p className="text-base text-grey">{description}</p> : null}
  </div>
);
