import React from "react";
import "./ProductItem.css";

const ProductItem = () => {
  return (
    <div className="card">
      <img
        src="/images/products/laptop.png"
        alt="Laptop"
        className="card-image"
      />
      <h3 className="card-title">Product Name</h3>
      <p className="card-desc">Description gfdgdgfdgfd</p>
      <div className="card-info">
        <span>*****</span>
        <span className="price">1500 ₺</span>
      </div>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default ProductItem;
