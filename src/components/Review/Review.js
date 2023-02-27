import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/products';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import doneImage from '../../images/giphy.gif';
import { useNavigate } from 'react-router-dom';

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlace, setOrderPlace] = useState(false);
  const navigate = useNavigate();

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

  const handleProceedToCheckout = () => {
    navigate('/shipment')
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
        {
          orderPlace && <img src={doneImage} alt='Your order placed successfully' />
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button className="main-btn" onClick={handleProceedToCheckout}>Proceed to checkout</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;