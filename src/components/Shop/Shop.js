import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        // console.log("Product Added", product);
        const newCart = [...cart, product];
        setCart(newCart);
        
    };
    
    return (
        <div className="shop-container">
            <div className="products-container">
            {
                products.map(product => <Product handleAddToCart={handleAddToCart} productInfo={product}></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cartInfo={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;