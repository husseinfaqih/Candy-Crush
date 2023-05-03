import React from "react";
import { BsCart } from "react-icons/bs";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../store/Context";

const Basket = ({ product }) => {
  const cartCtx = useContext(CartContext);

  const submitHandler = () => {
    cartCtx.addItem({ ...product, amount: 1 });
  };
  return (
    <div onClick={submitHandler} style={{ cursor: "pointer" }}>
      <span style={{ fontSize: "20px" }}>add to cart</span>
      <BsCart size={40} />
    </div>
  );
};

export default Basket;
Basket.propTypes = {
  product: PropTypes.object,
};
