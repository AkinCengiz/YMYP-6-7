import React from 'react'
import "./Cart.css"
import CartItems from './CartItems'

const Cart = () => {
  return (
    <div className='offcanvas'>
        <div className="content">
            <div className="cart">
                <div className="cart-header">
                    <h2>Cart</h2>
                    <a href="/">X</a>
                </div>
                <CartItems />
                <div className="cart-total">
                    <span>Total</span>
                    <span>100 ₺</span>
                </div>
                <div className="action-buttons">
                    <button className='order-button'>Pay</button>
                    <button className='cart-clear'>Clear</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart