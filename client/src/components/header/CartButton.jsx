import React from "react";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";

function CartButton() {
  return (
    <Link className="header-cart-button" to="/cart">
      <img className="header-cart-button-image" src={cart} alt="cart" />
    </Link>
  );
}

export default CartButton;
