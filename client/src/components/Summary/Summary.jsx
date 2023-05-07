import React from "react";
import { CartContext } from "../../store/Context";
import { useContext } from "react";
import "./Summary.css";

const Summary = () => {
  const { items, totalAmount } = useContext(CartContext);
  const sum = items
    .map((item) => item.amount)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="cart-summary">
      <h1 className="cart-summary-page-title">Purchase Summary</h1>
      <>
        <h2 className="cart-summary-text">
          You have {sum} items in your basket
        </h2>
        <h2 className="cart-summary-text">
          Total price:{totalAmount.toFixed(2)} ${" "}
        </h2>
      </>
    </div>
  );
};

export default Summary;
