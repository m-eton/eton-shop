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

  toggleMenu = () => {
    this.setState(() => ({ dropMenu: !this.state.dropMenu }));
  };

  render() {
    const cartCounter = this.countProducts(this.props.cartProducts);
    let showCartIcon = true;
    if (window !== undefined) {
      showCartIcon = !window.location.pathname.includes("cart");
    }
    return (
      <>
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
            {showCartIcon && (
              <div className="nav-link cart-link">
                <FaShoppingCart
                  onClick={() => {
                    this.toggleMenu();
                  }}
                />
                {cartCounter !== 0 && (
                  <div className="cart-counter">
                    <p>{cartCounter}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </header>
        {this.state.dropMenu && (
          <>
            <div className="cart-curtain" onClick={() => this.toggleMenu()} />
            <CartDropMenu
              cartProducts={this.props.cartProducts}
              toggleMenu={this.toggleMenu}
            />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: [...state.cartProducts]
});
export default connect(mapStateToProps)(Header);
