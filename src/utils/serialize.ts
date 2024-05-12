import { CartItem, Order } from '../constants/types';

export const serializeOrder = (arr: CartItem[]): Order => {
  const order = {
    id: Date.now(),
    items: arr.map((el) => {
      return {
        productId: el.item.id,
        quantity: el.quantity,
        title: el.item.title,
      };
    }),
    total: getTotal(arr),
    createdAt: String(new Date()),
    image: arr[0] ? arr[0].item.image : '',
  };
  return order;
};

export const getTotal = (arr: CartItem[]): number => {
  return arr.reduce(
    (acc, item) => acc + Number(item.item.price) * item.quantity,
    0
  );
};
