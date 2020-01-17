import React from "react";

const CartPageItem = props => {
  const { id, title, price, image } = props.product;
  return (
    <div className="cart-card" key={id}>
      <div className="cart-img">
        <img src={image} alt={title + id} />
      </div>

      <div className="cart-label">
        <div className="title">{title}</div>
        <div className="cart-price">
          <div className="price">{price}$</div>
          <div className="count">{" x " + props.counter}</div>
        </div>
      </div>

      <div className="cart-controls">
        <button>-</button>
        <button>+</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default CartPageItem;
