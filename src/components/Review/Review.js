import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/products';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedItems = getDatabaseCart();
    const productKeys = Object.keys(savedItems);
    const addedProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedItems[key];
      return product
    });
    setCart(addedProducts);
  }, []);

  const removeProduct = productKey => {
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey)
  }
  return (
    <div className='main-container'>
      <div className="product-container">
        {
          cart.map(pd => <ReviewItem
            product={pd}
            key={pd.key}
            removeProduct={removeProduct}
          ></ReviewItem>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;