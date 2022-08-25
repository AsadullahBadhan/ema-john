import React from 'react';

const ReviewItem = (props) => {
  const { key, name, img, price, seller, quantity } = props.product;
  return (
    <div className='product'>
      <img src={img} alt={name} />
      <div className='description'>
        <h3 className='product-name'>{name}</h3>
        <p>
          <strong>Seller: {seller}</strong>
        </p>
        <p>price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button
          className="main-btn"
          onClick={() => props.removeProduct(key)}
        >Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;