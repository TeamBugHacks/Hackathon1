import React from 'react'


const CartReducer = (state, action) => {
    const { cart } = state;
  
    let product;
  
    switch (action.type) {
      case "ADD_TO_CART":
        const check = cart.find((product) => product.id === action.id);
        if (check) {
        } else {
          product = action.product;
          cart["qty"] = 1;
        }
        break;
      case "REMOVE_FROM_CART":
        const filter = cart.filter((product) => product.id !== action.id);
        product = action.cart;
        return {
          cart: [...filter],
        };
        break;
      case "EMPTY":
        return {
          cart: [],
        };
      default:
        return state;
    }
}

export default CartReducer