import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/products.js';

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => setProduct(fakeData), [])

  const handleAddProduct = product => {
    const newCart = [...cart, product]
    setCart(newCart);
    const sameItem = newCart.filter(pd => pd.key === product.key);
    const count = sameItem.length;
    addToDatabaseCart(product.key, count)
  }

  return (
    <div className='shop-container'>
      <div className="product-container">
        <ul>
          {
            product.map(pd =>
              <Product
                product={pd}
                handleAddProduct={handleAddProduct}
                key={pd.key}>
              </Product>)
          }
        </ul>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>

    </div>
  );
};

export default Shop;