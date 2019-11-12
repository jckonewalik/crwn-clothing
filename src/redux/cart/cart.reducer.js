import CartActionsType from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'
const INITIAL_STATE = {
  hidden: true,
  items: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
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
    case CartActionsType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      }
    case CartActionsType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      }
    case CartActionsType.CLEAR_CART:
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}

export default cartReducer
