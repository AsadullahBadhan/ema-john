import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import productData from '../../fakeData/products.json'

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => setProduct(productData), [])

  const handleAddProduct = product => {
    const newCart = [...cart, product]
    setCart(newCart);
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