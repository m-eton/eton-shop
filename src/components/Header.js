import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import CartDropMenu from "./CartDropMenu";

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
    console.log("dropmenu:", this.state.dropMenu);
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
          <div
            className="nav-link cart-link"
            onClick={() => {
              this.setState(() => ({ dropMenu: !this.state.dropMenu }));
            }}
          >
            <FaShoppingCart />
            {cartCounter !== 0 && (
              <div className="cart-counter">
                <p>{cartCounter}</p>
              </div>
            )}
            {/* <div className="cart">
            </div> */}
            {this.state.dropMenu && (
              <CartDropMenu cartProducts={this.props.cartProducts} />
            )}
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: [...state.cartProducts]
});
export default connect(mapStateToProps)(Header);
