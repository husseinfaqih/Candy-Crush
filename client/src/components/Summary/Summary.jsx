import React from "react";
import { CartContext } from "../../store/Context";
import { useContext } from "react";
import "./Summary.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Summary = ({ isEmptyCart }) => {
  const { items, totalAmount } = useContext(CartContext);
  const sum = items
    .map((item) => item.amount)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="cart-summary">
      <h1 className="cart-summary-page-title">Order summary</h1>
      <>
        <p className="cart-summary-text">
          {sum}
          {sum === 1 ? " item" : " items"}
        </p>
        <p className="cart-summary-text">
          subtotal
          <span className="cart-summary-price">€{totalAmount.toFixed(2)}</span>
        </p>
        <p className="cart-summary-text">
          delivery cost <span className="cart-summary-price">€0.00</span>
        </p>
        <p className="cart-summary-text">
          TOTAL
          <span className="cart-summary-price">€{totalAmount.toFixed(2)}</span>
        </p>
      </>
      <div className="cart-payment-link-container">
        {!isEmptyCart && (
          <Link className="cart-payment-link" to="/payment">
            CHECKOUT
          </Link>
        )}
      </div>
    </div>
  );
};

Summary.propTypes = {
  isEmptyCart: PropTypes.bool.isRequired,
};

export default Summary;
