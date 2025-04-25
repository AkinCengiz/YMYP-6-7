import React, { createContext, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartIsShow, setCartIsShow] = useState(false);
    const showCartHandle = () => {
        setCartIsShow(true);
    }
    const hideCartHandle = (e) => {
        e.preventDefault();
        setCartIsShow(false);
    }

    const values = {
        cartIsShow,
        setCartIsShow,
        hideCartHandle,
        showCartHandle
    }
  return (
    <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
  )
}

export {CartProvider,CartContext}