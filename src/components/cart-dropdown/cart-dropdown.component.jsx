import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageStyled,
} from './cart-dropdown.styles'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessageStyled>Your cart is empty</EmptyMessageStyled>
      )}
    </CartItemsContainer>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
