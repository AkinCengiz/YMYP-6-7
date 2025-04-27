import React from 'react'
import "./CartItem.css";

const CartItem = ({item}) => {
  return (
    <div className='cart-item'>
        <div className="cart-item-image">
            <img src={item.image} alt={item.name} />
        </div>
        <div className="cart-item-info">
            <div className="cart-item-text">
                <strong>{item.name}</strong>
                <div>
                    <span>₺ {item.price} X </span>
                    <span>{item.amount}</span>
                </div>
            </div>
            <a href="/" className='cart-item-remove'>x</a>
        </div>
    </div>
  )
}

export default CartItem