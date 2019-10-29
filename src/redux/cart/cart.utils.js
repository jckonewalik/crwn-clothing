export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExistsInCart = cartItems.find(item => item.id === itemToAdd.id)

  if (itemExistsInCart) {
    return cartItems.map(item => {
      if (item.id === itemToAdd.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      } else {
        return item
      }
    })
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id)

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
