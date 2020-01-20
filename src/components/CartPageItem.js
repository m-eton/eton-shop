import React, { Component } from "react";

import {
  FaRegPlusSquare,
  FaRegMinusSquare,
  FaWindowClose
} from "react-icons/fa";

export default class CartPageItem extends Component {
  state = {
    removalQuestion: false
  };

  confirmRemoval = () => {
    this.setState(() => ({ removalQuestion: true }));
  };
  confirmRemovalNo = () => {
    this.setState(() => ({ removalQuestion: false }));
  };

  render() {
    const { id, title, price, image } = this.props.product;
    const { counter, counterPlus, counterMinus, removeFromCart } = this.props;
    return (
      <>
        <div className="cart-item-card">
          <div className="cart-item-img">
            <img src={image} alt={title + id} />
          </div>

          <div className="cart-item-label">
            <div className="cart-item-row">
              <div className="title">{title}</div>
              <div
                className="cart-item-control close"
                onClick={() => this.confirmRemoval()}
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
            {this.state.removalQuestion && (
              <div className="cart-page-item-removal-confirmation">
                <p className="removal-confirmation-text">
                  Remove this item form cart?
                </p>
                <p className="answer" onClick={() => removeFromCart(id)}>
                  yes
                </p>
                <p
                  className="answer no"
                  onClick={() => this.confirmRemovalNo()}
                >
                  no
                </p>
              </div>
            )}
          </div>
        </div>
        <hr />
      </>
    );
  }
}
