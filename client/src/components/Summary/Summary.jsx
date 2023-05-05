import React from "react";
import { CartContext } from "../../store/Context";
import { useContext } from "react";

const Summary = () => {
  const { items, totalAmount } = useContext(CartContext);
  const sum = items
    .map((item) => item.amount)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <h1 className="product-page-title">Purchase Summary</h1>
      <>
        <h2>You have {sum} items in your basket</h2>
        <h2>Total price:{totalAmount.toFixed(2)} $ </h2>
      </>
    </div>
  );
};

export default Summary;
