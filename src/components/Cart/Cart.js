import React from 'react';


const Cart = (props) => {
    const cart = props.cartInfo;
    const total = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    let shippingCharge = 0;

    if(total>35){
        shippingCharge =0;
    }else if(total>15){
        shippingCharge = 4.23;
    }else if(total>0){
        shippingCharge = 12.99;
    }

    const tax = Number((total/10).toFixed(2));
    const grandTotal = Number((total + shippingCharge + tax).toFixed(2));
    
    
    return (
        <div>
            <h1>Order Summery</h1>
            <h5>Items Ordered: {cart.length}</h5>
            <h5>Product Price: {Number(total.toFixed(2))}</h5>
            <h5>Total Tax: {tax}</h5>
            <h5>Shipping Charge: {shippingCharge}</h5>
            <h5>Grand Total: {grandTotal}</h5>
            { props.children}
        </div>
    );
};

export default Cart;