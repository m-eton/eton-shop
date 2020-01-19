import React, { Component } from "react";
import { connect } from "react-redux";

import { setStateProducts } from "../actions/products";
import { addToCart } from "../actions/cart";
import selectProducts from "../selectors/products";
import Product from "./Product";
import HourGlassLoader from "./HourGlassLoader";

class ShopProducts extends Component {
  state = {
    isLoading: false,
    error: null
  };

  addToCart2 = id => {
    const theProduct = this.props.products.find(product => product.id === id);
    this.props.dispatch(addToCart(theProduct));
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
      return <HourGlassLoader />;
    }

    return (
      <div className="shop-products">
        {this.props.products.map(product => (
          <Product key={product.id} {...product} add={this.addToCart2} />
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
