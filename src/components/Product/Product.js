import React from 'react';

const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div>
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="description">
        <p className="name">{name}</p>
        <p className="seller">by:{seller}</p>
        <p className="price">${price}</p>
        <p className="stock">only {stock} left in stock - order soon</p>
        <button className='cart'>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;