export type PlanType = {
  children: React.ReactElement;
  comment?: string;
  content: {
    name: string;
    price_per_month: number;
    price_per_year: number;
  };
};
