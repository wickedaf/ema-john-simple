import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = productKey => {
        const newCart = cart.filter( product => product.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };
    useEffect( () =>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const  cartProducts = productKey.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key]
            return product;
        })
        console.log(savedCart);
        setCart(cartProducts);
    }, []);

    return (
        <div className="shop-container">
            <div className="products-container">
                <h1 style={{textAlign : 'center'}}>Cart Items {cart.length}</h1>
                {
                    cart.map(product => <ReviewItem key={product.key} removeProduct={removeProduct} productInfo={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cartInfo={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;