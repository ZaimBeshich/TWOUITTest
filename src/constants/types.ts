import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from '../navigation/routes';

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
  items: OrderItem[];
  total: number;
  createdAt: string;
  image: string;
}

export type OrderItem = { productId: number; quantity: number };

export type Profile = {
  name: string;
  email: string;
};

export type HistoryItem = {
  productId: number;
  quantity: number;
};

export type History = {
  id: number;
  items: HistoryItem[];
  total: number;
  createdAt: string;
  image: string;
};

export interface ProfileState {
  profile: Profile;
  history: History[];
  isLoading: boolean;
}

export type TabParamList = {
  [Routes.Catalog]: undefined;
  [Routes.Cart]: undefined;
  [Routes.Profile]: undefined;
};

export interface RootStackParamList {
  [key: string]: any;
}

export interface CatalogItemScreenStack extends RootStackParamList {
  [Routes.CatalogItemScreen]: { item: Product };
}

export interface ProfileFormScreenStack extends RootStackParamList {
  [Routes.ProfileFormScreen]: { profile: Profile };
}

export type CatalogScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.CatalogScreen
>;

export type CatalogItemScreenProps = NativeStackScreenProps<
  CatalogItemScreenStack,
  Routes.CatalogItemScreen
>;

export type CartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.CartScreen
>;

export type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.ProfileScreen
>;

export type ProfileFormScreenProps = NativeStackScreenProps<
  ProfileFormScreenStack,
  Routes.ProfileFormScreen
>;

export type HistoryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.HistoryScreen
>;
