export type HeaderProps = {
  description?: string;
  title: string;
};

export const Header = ({ title, description }: HeaderProps) => (
  <div className="flex flex-col gap-2 lg:gap-3">
    <h2 className="font-bold text-2xl lg:text-3xl text-denim">{title}</h2>
    {description ? <p className="text-base text-grey">{description}</p> : null}
  </div>
);
