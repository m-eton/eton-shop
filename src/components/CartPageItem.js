import React from "react";

import {
  FaRegPlusSquare,
  FaRegMinusSquare,
  FaWindowClose
} from "react-icons/fa";

const CartPageItem = props => {
  const { id, title, price, image } = props.product;
  const { counter, counterPlus, counterMinus, removeFromCart } = props;
  return (
    <>
      <div className="cart-item-card" key={id}>
        <div className="cart-item-img">
          <img src={image} alt={title + id} />
        </div>

        <div className="cart-item-label">
          <div className="cart-item-row">
            <div className="title">{title}</div>
            <div
              className="cart-item-control close"
              onClick={() => removeFromCart(id)}
            >
              <FaWindowClose />
            </div>
          </div>
          <div className="cart-item-row">
            <div className="cart-item-price">
              <div className="price">{price}$</div>
              <div className="count">{counter > 1 && " x " + counter}</div>
            </div>
            <div className="cart-item-controls">
              <div
                className="cart-item-control"
                onClick={() => counterMinus(id)}
              >
                <FaRegMinusSquare />
              </div>
              <div
                className="cart-item-control"
                onClick={() => counterPlus(id)}
              >
                <FaRegPlusSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartPageItem;
