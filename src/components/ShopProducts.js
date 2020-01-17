import React, { Component } from "react";
import { connect } from "react-redux";

import { setStateProducts } from "../actions/products";
import { addToCart } from "../actions/cart";
import selectProducts from "../selectors/products";
import Product from "./Product";

class ShopProducts extends Component {
  state = {
    isLoading: false,
    error: null
  };

  addToCart = product => {
    this.props.dispatch(addToCart(product));
  };

  componentDidMount() {
    this.setState(() => ({ isLoading: true }));
    const API =
      "https://my-json-server.typicode.com/brankostancevic/products/db";
    let productsRaw = [];

    fetch(API)
      .then(result => result.json())
      .then(data => {
        productsRaw = [...data.products];
        this.props.dispatch(setStateProducts(productsRaw));
        this.setState(() => ({ isLoading: false }));
      })
      .catch(error => this.setState(() => ({ error, isLoading: false })));
  }

  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>LOADING...</p>;
    }

    return (
      <div className="shop-products">
        {this.props.products.map(product => (
          <Product key={product.id} {...product} add={this.addToCart} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: selectProducts(state.products, state.filters)
  };
};

export default connect(mapStateToProps)(ShopProducts);
