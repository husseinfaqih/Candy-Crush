import React from "react";
import { CartContext } from "../../store/Context";
import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function CartButton() {
  const { items } = useContext(CartContext);
  const sum = items
    .map((item) => item.amount)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <Link className="header-cart-button" to="/cart">
        <BsFillCartFill className="header-cart-button-image" size={35} />
        <h3 className="cart-sum">{sum}</h3>
      </Link>
    </>
  );
}

export default CartButton;
