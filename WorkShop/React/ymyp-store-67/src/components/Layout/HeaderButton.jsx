import React, { useContext } from "react";
import "./HeaderButton.css";
import { CartContext } from "../../contexts/CartProvider";

const HeaderButton = () => {
  const {showCartHandle} = useContext(CartContext);
  return (
    <button className="button" onClick={showCartHandle}>
      <span className="icon">
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
      <span className="btn-text">Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderButton;
