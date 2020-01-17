import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

class Header extends Component {
  state = {
    dropMenu: false
  };

  countProducts(products) {
    const productsInCart =
      products.length === 0
        ? 0
        : products.reduce((sum, item) => (sum += item.counter), 0);
    return productsInCart;
  }

  render() {
    const cartCounter = this.countProducts(this.props.cartProducts);
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

const mapStateToProps = state => ({
  cartProducts: [...state.cartProducts]
});
export default connect(mapStateToProps)(Header);
