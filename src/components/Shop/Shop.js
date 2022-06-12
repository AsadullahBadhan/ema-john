import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
      .then(res => res.json())
      .then(data => {
        const first10 = data.slice(0, 10);
        setProduct(first10)
      })
  }, []);

  const handleAddProduct = product => {
    const newCart = [...cart, product]
    setCart(newCart);
  }

  return (
    <div className='shop-container'>
      <div className="product-container">
        <ul>
          {
            product.map(pd => <Product product={pd} handleAddProduct={handleAddProduct}></Product>)
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