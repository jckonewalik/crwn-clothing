import React from 'react'

import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart.actions'

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  CustomButtomStyled,
  NameStyled,
  PriceStyled,
} from './collection-item.styles'

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer>
        <NameStyled>{name}</NameStyled>
        <PriceStyled>{price}</PriceStyled>
      </CollectionFooterContainer>
      <CustomButtomStyled isInverted onClick={() => addItemToCart(item)}>
        ADD TO CART
      </CustomButtomStyled>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem)
