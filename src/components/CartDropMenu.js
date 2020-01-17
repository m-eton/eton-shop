import React from "react";
import { NavLink } from "react-router-dom";

const CartDropMenu = ({ cartProducts }) => (
  <div className="cart-drop-menu">
    <div className="cart-menu-items">
      {cartProducts.map((obj, i) => {
        console.log("obj in cart drop", obj);
        return (
          <>
            <div className="cart-item" key={obj.product.id}>
              <div className="cart-item-img">
                <img src={obj.product.image} alt={obj.product.title} />
              </div>
              <div className="cart-item-name">{obj.product.title}</div>
              <div className="cart-item-counter">{obj.counter}</div>
            </div>
            {cartProducts.length - 1 !== i && <hr />}
          </>
        );
      })}
    </div>

    <NavLink to="/cart" className="to-cart-link">
      <div>
        <p>Checkout</p>
      </div>
    </NavLink>
  </div>
);

export default CartDropMenu;
