import { CartItem, Order, Product, User } from './product';

export type LoginRes = {
  status: string;
  data?: {
    token: string;
    user: User;
  };
};

export type RegisterRes = {
  status: string;
  data?: {
    id: number;
  };
};

export type GetProductsRes = {
  status: string;
  data?: Product[];
};

export type GetProductRes = {
  status: string;
  data?: Product;
};

export type GetCartRes = {
  status: string;
  data?: CartItem[];
};

export type GetOrdersRes = {
  status: string;
  data?: Order[];
};
