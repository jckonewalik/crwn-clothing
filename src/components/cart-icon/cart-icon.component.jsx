import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsAmount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemAmount }) => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{itemAmount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemAmount: selectCartItemsAmount,
});

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
