import React from 'react'

import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButtonStyled,
  QuantityStyled,
  TextStyled,
} from './checkout-item.styles'

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="product" />
      </ImageContainer>
      <TextStyled>{name}</TextStyled>
      <QuantityStyled>
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityStyled>
      <TextStyled>${price}</TextStyled>
      <RemoveButtonStyled onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonStyled>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItemToCart(item)),
  removeItem: item => dispatch(removeItemFromCart(item)),
})

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem)
