import React from 'react';
import "./Products.css"
import ProductItem from './ProductItem';

const Products = () => {
  return (
    <div className='products-wrapper'>
        <div className="products">            
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    </div>
  )
}

export default Products