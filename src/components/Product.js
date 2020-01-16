import React from "react";
// link?

const Product = ({ id, title, price, description, image }) => (
  <div>
    <img src={image} className="product-img" alt={title + id} />
    <div className="title">{title}</div>
    <div className="price">{price}</div>
    <div className="description">{description}</div>
  </div>
);

export default Product;
