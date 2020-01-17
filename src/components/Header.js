import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

class Header extends Component {
  state = {
    dropMenu: false,
    cartCounter:
      this.props.cartProducts.length !== 0
        ? this.props.cartProducts.reduce(
            (sum = 0, item) => (sum += item.counter)
          )
        : 0
  };

  render() {
    const { cartCounter } = this.state;

    console.log("cartProducts:", this.props.cartProducts);
    return (
      <header className="header">
        <div className="logo">EtonDigital</div>
        <div className="navigation">
          <NavLink
            to="/"
            exact={true}
            activeClassName="active-shop"
            className="nav-link"
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            activeClassName="active-cart"
            className="nav-link"
          >
            <div className="cart">
              <FaShoppingCart />
              {cartCounter !== 0 && (
                <div className="cart-counter">
                  <p>{cartCounter}</p>
                </div>
              )}
            </div>
          </NavLink>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  if (state.cartProducts) {
    return {
      cartProducts: [...state.cartProducts]
    };
  }
  return {
    cartProducts: []
  };
};

export default connect(mapStateToProps)(Header);
