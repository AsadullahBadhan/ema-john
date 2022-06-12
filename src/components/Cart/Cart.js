import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart)
  const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  return (
    <div>
      <h2>Order Summary</h2>
      <h5>Item ordered: {cart.length}</h5>
      <p>Items:</p>
      <p>Shipping & Handling:</p>
      <p>Total before tax: {totalPrice}</p>
      <p>Estimated Tax: {totalPrice * 0.15}</p>
      <h3>Order Total: </h3>
      <button className="cart-btn">Review your order</button>
    </div>
  );
};

export default Cart;