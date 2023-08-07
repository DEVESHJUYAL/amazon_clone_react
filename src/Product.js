import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
import { useState } from 'react';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const [notificationVisible, setNotificationVisible] = useState(false);
    console.log("this is the basket >>> ", basket)
    const addtobasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        setNotificationVisible(true);
        setTimeout(() => {
            setNotificationVisible(false);
        }, 800);
    };


    return (
        <>
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt='' />

            <button  onClick={addtobasket}>Add to Cart</button>
        </div>
        {notificationVisible && (
                <div className="notification">Item added to cart</div>
            )}
        </>
    )
}

export default Product
