import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

function Header() {
  const {productInfo} = useContext(ProductContext);
  return (
    <header className='header'>
        <div className="logo">LOGO : {productInfo}</div>
        <div className="menu">MENU</div>
    </header>
  )
}

export default Header