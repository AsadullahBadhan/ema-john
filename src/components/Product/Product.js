import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="description">
        <p className="name"><Link to={"/product/" + key}>{name}</Link></p>
        <p className="seller">by:{seller}</p>
        <p className="price">${price}</p>
        <p className="stock">only {stock} left in stock - order soon</p>
        <button
          className='main-btn'
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faCartShopping} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;