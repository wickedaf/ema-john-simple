import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import fakeData from '../../fakeData';

const ProductDetail = () => {
    const {productKey} = useParams();
    const selectedProduct = fakeData.find( pd => pd.key === productKey);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Product Detail</h1>
            <div style={{padding: '0 300px'}}>
            <Product productInfo={selectedProduct} showAddToCart={false}></Product>
            </div>
        </div>
    );
};

export default ProductDetail;