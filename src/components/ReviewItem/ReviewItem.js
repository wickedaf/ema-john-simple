import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity} = props.productInfo;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        padding: '30px',
        margin: '0 300px'
    };
    return (
        <div style={reviewItemStyle}>
            <h3 className="product-name">{name}</h3>
            <h3>Quantity: {quantity}</h3>
            <br />
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;