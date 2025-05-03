type PaymentInfo = {
  price: number;
  validity: number;
  type: string;
};

export const PaymentInfo: Record<string, PaymentInfo> = {
  BSC17145589561233821: {
    price: 4999,
    validity: 3,
    type: "basic:Basic Starter",
  },
  PRM17145589571249407: {
    price: 14999,
    validity: 3,
    type: "basic:Premium Basic",
  },

  BSC17145589581251278: {
    price: 9999,
    validity: 3,
    type: "advanced:Advanced Starter",
  },
  PRM17145589591265632: {
    price: 29999,
    validity: 12,
    type: "advanced:Advanced Premium",
  },
};
