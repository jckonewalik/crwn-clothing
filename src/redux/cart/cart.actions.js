import CartActionsType from './cart.types'

export const toggleCartHidden = () => {
  return {
    type: CartActionsType.TOGGLE_CART_HIDDEN,
  }
}

export const addItemToCart = item => {
  return {
    type: CartActionsType.ADD_ITEM_TO_CART,
    payload: item,
  }
}
