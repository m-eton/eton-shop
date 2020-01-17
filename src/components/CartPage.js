import React from "react";
import { connect } from "react-redux";

import CartPageItem from "./CartPageItem";

const CartPage = props => {
  console.log("cart page: ", props.cartProducts);
  return (
    <div className="cart-items">
      {props.cartProducts.map(obj => (
        <CartPageItem {...obj} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartProducts: state.cartProducts
  };
};

export default connect(mapStateToProps)(CartPage);
