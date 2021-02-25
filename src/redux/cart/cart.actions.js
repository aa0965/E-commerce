import { CartActionTypes } from './cart.types';

export const toggleCheckout = () => ({
  type: CartActionTypes.TOGGLE_CHECKOUT
});

export const addItem = (cartItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
  });
  