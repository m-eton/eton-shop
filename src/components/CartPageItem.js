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
    <div className="cart-card" key={id}>
      <div className="cart-img">
        <img src={image} alt={title + id} />
      </div>

      <div className="cart-label">
        <div className="title">{title}</div>
        <div className="cart-price">
          <div className="price">{price}$</div>
          <div className="count">{counter > 1 && " x " + counter}</div>
          <div className="cart-control" onClick={() => counterMinus(id)}>
            <FaRegMinusSquare />
          </div>
          <div className="cart-control" onClick={() => counterPlus(id)}>
            <FaRegPlusSquare />
          </div>
        </div>
      </div>

      <div className="cart-control close" onClick={() => removeFromCart(id)}>
        <FaWindowClose />
      </div>
    </div>
  );
};

export default CartPageItem;
