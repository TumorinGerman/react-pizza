import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLocalStorage = () => {
  const data = window.localStorage.getItem("cartOfPizzas");
  const itemsInCart = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(itemsInCart);
  return {
    totalPrice,
    itemsInCart,
  };
};
