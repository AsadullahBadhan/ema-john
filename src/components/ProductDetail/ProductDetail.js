import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.js';
import Product from '../Product/Product';

const ProductDetail = () => {
  const { productKey } = useParams();

  const product = fakeData.find(pd => pd.key === productKey)

  return (
    <div>
      <Product product={product}></Product>
    </div>
  );
};

export default ProductDetail;