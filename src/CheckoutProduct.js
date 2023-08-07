import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import { useState } from 'react';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    const [notificationVisible, setNotificationVisible] = useState(false);

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
        setNotificationVisible(true);
        setTimeout(() => {
            setNotificationVisible(false);
        }, 800);
    }

    return (
        <>
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) =>
                        (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
        {notificationVisible && (
                <div className="notification">Item Removed from cart</div>
            )}
        </>
    )
}

export default CheckoutProduct
