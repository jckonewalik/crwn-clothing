import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ cartItens }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItens.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItens: state.cart.items,
})

export default connect(mapStateToProps)(CartDropdown)
