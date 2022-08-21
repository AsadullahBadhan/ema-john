import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const cart = props.cart;
  const price = cart.reduce((total, pd) => total + (pd.price * pd.quantity), 0);
  // let price = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const product = cart[i];
  //   price = price + (product.price * product.quantity);
  // }
  const shipping = cart.reduce((total, pd) => total + pd.shipping, 0);
  const tax = price * 0.15;
  const totalPrice = price + tax + shipping;

  return (
    <div>
      <h2>Order Summary</h2>
      <h5>Item ordered: {cart.length}</h5>
      <p>Price: {price.toFixed(2)}</p>
      <p>Shipping & Handling: {shipping.toFixed(2)}</p>
      <p>Estimated Tax: {tax.toFixed(2)}</p>
      <h3>Order Total: {totalPrice.toFixed(2)}</h3>
      {
        props.children
      }
    </div>
  );
};

export default Cart;