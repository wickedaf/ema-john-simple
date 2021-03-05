import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.productInfo;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray'
    };
    return (
        <div style={reviewItemStyle}>
            <h3 className="product-name">{name}</h3>
            <h3>Quantity: {quantity}</h3>
            <h3>Price: {price}</h3>
            <br />
            <button onClick={() => props.removeProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;