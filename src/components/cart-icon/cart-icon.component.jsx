import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsAmount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemAmount }) => (
  <div className="cart-icon">
    <ShoppingBagIcon className="shopping-icon" onClick={() => toggleCartHidden()} />
    <span className="item-count">{itemAmount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemAmount: selectCartItemsAmount(state),
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
