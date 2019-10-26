import CartActionsType from './cart.types';

export const toggleCartHidden = () => {
  return {
    type: CartActionsType.TOGGLE_CART_HIDDEN,
  };
};
