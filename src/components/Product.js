import React from "react";
// link?
import { FaCartPlus } from "react-icons/fa";

const Product = ({ id, title, price, description, image, add }) => (
  <div className="product-card">
    <div className="product-img">
      <img src={image} alt={title + id} />
    </div>

    <div className="product-under-img">
      <div className="product-info">
        <div className="product-label">
          <div className="title">{title}</div>
          <div className="price">{price}$</div>
        </div>
        <div className="description">{description}></div>
      </div>

      <button
        className="add-btn"
        onClick={() => {
          add(id);
        }}
      >
        <p>Add to Cart</p>
        <FaCartPlus />
      </button>
    </div>
  </div>
);

export default Product;
