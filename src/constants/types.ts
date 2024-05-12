export type Product = {
  id: number;
  title: string;
  product_type: string;
  price: string;
  image: string;
};

export interface ProductsState {
  products: Product[];
  isLoading: boolean;
}

export interface CartItem {
  id: number;
  item: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isLoading: boolean;
}

export interface Order {
  id: number;
  items: { productId: number; quantity: number }[];
  total: number;
  createdAt: string;
  image: string;
}
