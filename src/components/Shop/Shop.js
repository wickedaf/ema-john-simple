import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    
    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const oldCart = productKey.map( existingKey => {
            const product = fakeData.find( pd => pd.key === existingKey);
            const quantity = savedCart[existingKey];
            product.quantity = quantity;
            console.log(product);
            
            return product;
        });
        setCart(oldCart);
    },[]);

    const handleAddToCart = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const otherProduct = cart.filter( pd => pd.key !== product.key);
            newCart = [ ...otherProduct, sameProduct ];
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
        
    };
    
    return (
        <div className="shop-container">
            <div className="products-container">
            {
                products.map(product => <Product key={product.key} handleAddToCart={handleAddToCart} productInfo={product} showAddToCart={true}></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cartInfo={cart}>
                    <Link to="/review"><button className="main-button">Review Your Order</button></Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;