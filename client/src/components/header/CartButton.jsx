import React from "react";
import { CartContext } from "../../store/Context";
import { useContext } from "react";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";

function CartButton() {
  const { items } = useContext(CartContext);
  const sum = items
    .map((item) => item.amount)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <Link className="header-cart-button" to="/cart">
        <img className="header-cart-button-image" src={cart} alt="cart" />
        <h3 className="cart-sum">{sum}</h3>
      </Link>
    </>
  );
}

export default CartButton;
