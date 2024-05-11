import {Product} from '../constants/types';

export const sortByCheap = (arr: Product[]): Product[] => {
  return arr.sort((a, b) => Number(a.price) - Number(b.price));
};

export const sortByTop = (arr: Product[]): Product[] => {
  return arr.sort((a, b) => Number(b.price) - Number(a.price));
};
