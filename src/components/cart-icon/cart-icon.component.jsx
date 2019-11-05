import React from 'react'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsAmount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'

import { CartIconContainer, ItemCountStyled } from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden, itemAmount }) => (
  <CartIconContainer onClick={() => toggleCartHidden()}>
    <ShoppingBagIcon className="shopping-icon" />
    <ItemCountStyled>{itemAmount}</ItemCountStyled>
  </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
  itemAmount: selectCartItemsAmount,
})

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
