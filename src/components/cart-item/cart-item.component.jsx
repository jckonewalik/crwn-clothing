import React from 'react'

import { CartItemContainer, ItemDetailsContainer, NameStyled } from './cart-item.styles'
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="logo" />
      <ItemDetailsContainer>
        <NameStyled>{name}</NameStyled>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default CartItem
