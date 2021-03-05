import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {  
    // console.log(props.productInfo);
    
    const {img, name, seller, price, stock, key} = props.productInfo;    
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>by {seller}</small></p>
                <br/>
                <p><small>${price}</small></p>
                <p><small>only {stock} left in stock - order soon</small></p>
                {
                    props.showAddToCart && <button onClick={() => props.handleAddToCart(props.productInfo)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;