export type User = {
  id: number;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
};

/**
 * Model Profile
 *
 */
export type Profile = {
  userId: number;
  firstName: string;
  lastName: string;
  address: string;
};

/**
 * Model Product
 *
 */
export type Product = {
  id: number;
  price: number;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
};

/**
 * Model Order
 *
 */
export type Order = {
  id: number;
  shippingFirstName: string;
  shippingLastName: string;
  shippingAddress: string;
  creditCardLastDigits: string;
  totalPrice: number;
  createdAt: Date;
  userId: number | null;
};

/**
 * Model OrderItem
 *
 */
export type OrderItem = {
  id: number;
  quantity: number;
  totalPrice: number;
  createdAt: Date;
  productId: number;
  orderId: number | null;
  userId: number | null;
};

export type CartItem = {
  id: number;
  product: Product;
  quantity: number;
  totalPrice: number;
};
