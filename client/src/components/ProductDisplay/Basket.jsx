import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../store/Context";
import { BsFillCartFill } from "react-icons/bs";

const Basket = ({ product }) => {
  const cartCtx = useContext(CartContext);

  const submitHandler = () => {
    cartCtx.addItem({ ...product, amount: 1 });
  };
  return (
    <div onClick={submitHandler} style={{ cursor: "pointer" }}>
      <span style={{ fontSize: "20px" }}></span>
      <BsFillCartFill className="header-cart-button-image" size={35} />
    </div>
  );
};

export default Basket;
Basket.propTypes = {
  product: PropTypes.object,
};
