import React from "react";
import Header from "../header/Header";

const Confirmation = () => {
  return (
    <div>
      <Header />

      <h1 className="product-page-title">Confirmation Page</h1>
      <>
        <h2>Overview of your items:</h2>
        <h2>Total price:</h2>
        <p>
          Your items will be shipped soon. We&apos;ll send you a confirmation
          email once they&apos;re on their way.
        </p>
        <h2>Shipping address:</h2>
        <p>
          Thank you for shopping with us! You can go back to the home page or
          continue shopping.
        </p>
      </>

      <button className={"sorting-button"}>CONTINUE SHOPPING</button>
      <button className={"sorting-button"}>HOME PAGE</button>
    </div>
  );
};

export default Confirmation;
