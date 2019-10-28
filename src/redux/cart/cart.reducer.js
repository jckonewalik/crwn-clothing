import CartActionsType from './cart.types'
import { addItemToCart } from './cart.utils'
const INITIAL_STATE = {
  hidden: true,
  items: [],
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case CartActionsType.ADD_ITEM_TO_CART:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      }
    default:
      return state
  }
}
