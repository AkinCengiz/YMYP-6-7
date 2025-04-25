import React from 'react'
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className='cart-item'>
        <div className="cart-item-image">
            <img src="/images/products/laptop.png" alt="Laptop" />
        </div>
        <div className="cart-item-info">
            <div className="cart-item-text">
                <strong>Laptop</strong>
                <div>
                    <span>₺ 1500 X </span>
                    <span>1</span>
                </div>
            </div>
            <a href="/" className='cart-item-remove'>x</a>
        </div>
    </div>
  )
}

export default CartItem