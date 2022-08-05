import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
  const cart = props.cart;
  const price = cart.reduce((total, prd) => total + prd.price, 0);
  const shipping = cart.reduce((total, prd) => total + prd.shipping, 0);
  const tax = price * 0.15;
  const totalPrice = price + tax + shipping;


  return (
    <div>
      <h2>Order Summary</h2>
      <h5>Item ordered: {cart.length}</h5>
      <p>Price: {parseInt(price)}</p>
      <p>Shipping & Handling: {parseInt(shipping)}</p>
      <p>Estimated Tax: {parseInt(tax)}</p>
      <h3>Order Total: {parseInt(totalPrice)}</h3>
      <button className="main-btn"><Link to='/review'>Review your order</Link></button>
    </div>
  );
};

export default Cart;