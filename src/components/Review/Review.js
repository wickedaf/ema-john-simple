import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
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
        <div>
            <h1 style={{textAlign : 'center'}}>Cart Items {cart.length}</h1>
            {
                cart.map(product => <ReviewItem key={product.key} productInfo={product}></ReviewItem>)
            }
        </div>
    );
};

export default Review;