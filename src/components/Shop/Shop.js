import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/products.js';

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => setProduct(fakeData), []);

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

  const handleAddProduct = product => {
    const sameItem = cart.find(pd => pd.key === product.key);
    let count = 1;
    let newCart;
    if (sameItem) {
      count = sameItem.quantity + 1;
      sameItem.quantity = count;
      const others = cart.filter(pd => pd.key !== product.key);
      newCart = [...others, sameItem]
    } else {
      product.quantity = count;
      newCart = [...cart, product]
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count)
  }

  return (
    <div className='main-container'>
      <div className="product-container">
        {
          product.map(pd =>
            <Product
              product={pd}
              handleAddProduct={handleAddProduct}
              key={pd.key}>
            </Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>

    </div>
  );
};

export default Shop;