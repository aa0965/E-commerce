import { CartActionTypes } from './cart.types';

export const toggleCheckout = () => ({
  type: CartActionTypes.TOGGLE_CHECKOUT
});

export const addItem = (cartItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
  });
  
  export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
  });
  
  export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  });

  export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
  });