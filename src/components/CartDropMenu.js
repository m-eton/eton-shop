import React from "react";
import { NavLink } from "react-router-dom";

const CartDropMenu = ({ cartProducts, toggleMenu }) => (
  <div className="cart-drop-menu">
    <div className="cart-menu-items">
      {cartProducts.map((obj, i) => {
        return (
          <div className="cart-menu-item" key={obj.product.id}>
            <div className="cart-menu-item-img">
              <img src={obj.product.image} alt={obj.product.title} />
            </div>
            <div className="cart-menu-item-info">
              <div className="cart-menu-item-name">{obj.product.title}</div>
              <div className="cart-menu-item-counter">
                {(obj.counter !== 1 && "x " + obj.counter) || "--"}
              </div>
            </div>
            {cartProducts.length - 1 !== i && <hr />}
          </div>
        );
      })}
    </div>

    <NavLink
      to="/cart"
      className="to-cart-link"
      onClick={() => {
        toggleMenu();
      }}
    >
      <div>
        <p>Checkout</p>
      </div>
    </NavLink>
  </div>
);

export default CartDropMenu;
