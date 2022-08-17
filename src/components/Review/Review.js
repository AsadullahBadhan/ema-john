import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/products';

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
  }, [])
  return (
    <div>
      <h1>total item added: {cart.length}</h1>
    </div>
  );
};

export default Review;