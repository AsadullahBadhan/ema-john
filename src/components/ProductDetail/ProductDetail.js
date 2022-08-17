import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../fakeData/products.json';
import Product from '../Product/Product';

const ProductDetail = () => {
  const { productKey } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setProducts(productData)
    setIsLoaded(true)
  }, [])

  const product = products.find(pd => pd.key === productKey)
  return (
    <div>
      {isLoaded && <Product product={product}></Product>}
    </div>
  );
};

export default ProductDetail;