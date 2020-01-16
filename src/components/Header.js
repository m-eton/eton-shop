import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { setStateProducts } from "../actions/products";

class Header extends Component {
  state = {
    cartDropdown: false,
    cartCounter: this.props.cartProducts
      ? this.props.cartProducts.reduce((sum, item) => (sum += item.counter))
      : 0
  };

  componentDidMount() {
    let productsRaw = [];

    fetch("https://my-json-server.typicode.com/brankostancevic/products/db")
      .then(res => res.json())
      .then(data => {
        productsRaw = [...data.products];
        this.props.dispatch(setStateProducts(productsRaw));
      })
      .catch(console.log);
  }

  render() {
    console.log("cartProducts:", this.props.cartProducts);
    return (
      <header>
        <h1>Online Shop</h1>
        <NavLink
          to="/"
          exact={true}
          activeClassName="is-active"
          className="nav-link"
        >
          Shop
        </NavLink>
        <NavLink to="/cart" activeClassName="is-active" className="nav-link">
          Cart
        </NavLink>
      </header>
    );
  }
}

const mapStateToProps = state => {
  console.log("HEADER, map state to props: ", state);
  if (state.cartProducts) {
    return {
      cartProducts: [...state.cartProducts]
    };
  }
  return {
    cartProducts: undefined
  };
};

export default connect(mapStateToProps)(Header);
