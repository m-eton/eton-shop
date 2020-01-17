import React from "react";
import { NavLink } from "react-router-dom";

const CartDropMenu = ({ cartProducts }) => (
  <div className="cart-drop-menu">
    <div className="cart-menu-items">
      {cartProducts.map((product, i) => (
        <>
          <div className="cart-item" key={product.id}>
            <div className="cart-item-name">{product.name}</div>
            <div className="cart-item-counter">{product.counter}</div>
          </div>
          {cartProducts.length - 1 !== i && <hr />}
        </>
      ))}
    </div>

    <NavLink to="/cart" className="to-cart-link">
      <div>
        <p>Checkout</p>
      </div>
    </NavLink>
  </div>
);

export default CartDropMenu;
