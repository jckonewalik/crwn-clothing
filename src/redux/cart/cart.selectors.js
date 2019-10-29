import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.items
);

export const selectCartItemsAmount = createSelector(
  [selectCartItems],
  items => items.reduce((accumulatedValue, item) => accumulatedValue + item.quantity, 0)
);