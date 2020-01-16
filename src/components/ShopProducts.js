import React from "react";
import { connect } from "react-redux";

import selectProducts from "../selectors/products";
import Product from "./Product";

const ShopProducts = props => (
  <div>
    {props.products.map(product => (
      <Product key={product.id} {...product} />
    ))}
  </div>
);

const mapStateToProps = state => {
  // console.log("ShopProducts, map state to props: ", state);
  return {
    products: selectProducts(state.products, state.filters)
  };
};

export default connect(mapStateToProps)(ShopProducts);
