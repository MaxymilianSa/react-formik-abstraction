export type AddonType = {
  description: string;
  name: string;
  price: {
    per_month: number;
    per_year: number;
  };
};
