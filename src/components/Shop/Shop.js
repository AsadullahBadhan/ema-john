import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
      .then(res => res.json())
      .then(data => {
        const first10 = data.slice(0, 10);
        setProduct(first10)
      })
  }, [])

  return (
    <div className='shop-container'>
      <div className="product-container">
        <ul>
          {
            product.map(pd => <Product product={pd}></Product>)
          }
        </ul>
      </div>
      <div className="cart-container">
        <h1>this is cart</h1>
      </div>

    </div>
  );
};

export default Shop;