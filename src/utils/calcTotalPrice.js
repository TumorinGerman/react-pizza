export const calcTotalPrice = (itemsInCart) => {
  return itemsInCart.reduce((sum, obj) => obj.count * obj.price + sum, 0);
};
