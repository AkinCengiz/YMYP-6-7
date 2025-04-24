import React from "react";
import "./HeaderButton.css";

const HeaderButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <i class="fa-solid fa-cart-shopping"></i>
      </span>
      <span className="btn-text">Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderButton;
