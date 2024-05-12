import { Product } from '../constants/types';

export const sortDown = (arr: Product[]): Product[] => {
  return arr.sort((a, b) => Number(a.price) - Number(b.price));
};

export const sortUp = (arr: Product[]): Product[] => {
  return arr.sort((a, b) => Number(b.price) - Number(a.price));
};
