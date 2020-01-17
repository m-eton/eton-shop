import React, { Component } from "react";
import { connect } from "react-redux";

class CartPage extends Component {
  render() {
    return <div>page info</div>;
  }
}

const mapStateToProps = state => {
  return {
    cartProducts: state.cartProducts
  };
};

export default connect(mapStateToProps)(CartPage);
