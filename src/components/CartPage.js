import React, { Component } from "react";
import { connect } from "react-redux";

import CartPageItem from "./CartPageItem";
import {
  removeFromCart,
  removeAllFromCart,
  counterPlus,
  counterMinus
} from "../actions/cart";

class CartPage extends Component {
  state = {
    showMessage: false
  };

  removeFromCart2 = id => {
    this.props.dispatch(removeFromCart(id));
  };
  removeAllFromCart2 = () => {
    this.props.dispatch(removeAllFromCart());
  };
  counterPlus2 = id => {
    this.props.dispatch(counterPlus(id));
  };
  counterMinus2 = id => {
    this.props.dispatch(counterMinus(id));
  };

  buy = () => {
    this.props.dispatch(removeAllFromCart());
    this.setState(() => ({
      showMessage: true
    }));
    setTimeout(() => {
      this.setState(() => ({
        showMessage: false
      }));
      this.props.history.push("/");
    }, 3500);
  };

  render() {
    const totalPrice = this.props.cartProducts.reduce(
      (total, obj) => (total += obj.product.price * obj.counter),
      0
    );
    let purchased = "";
    if (this.state.showMessage) {
      purchased = "purchased";
    }
    return (
      <div className="cart-page-container">
        <h1>Your Cart</h1>
        <div className={`cart-page ${purchased}`}>
          <div className="cart-items">
            {this.props.cartProducts.map(obj => (
              <CartPageItem
                {...obj}
                removeFromCart={this.removeFromCart2}
                removeAllFromCart={this.removeAllFromCart2}
                counterPlus={this.counterPlus2}
                counterMinus={this.counterMinus2}
                key={obj.product.id}
              />
            ))}
          </div>
          <div className="cart-total">
            <div className="cart-total-text">Total:</div>
            <div className="cart-total-price">{totalPrice.toFixed(2)} $</div>
          </div>
          <div className="cart-buy" onClick={() => this.buy()}>
            <p>BUY</p>
          </div>
        </div>
        <div className={`buy-message ${purchased}`}>
          <h2>Purchase successful!</h2>
          <p>This is just a demo message.</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartProducts: state.cartProducts
  };
};

export default connect(mapStateToProps)(CartPage);
