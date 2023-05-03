import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import useFetch from "../hooks/useFetch";

const PaymentForm = ({ amount }) => {
  const [token, setToken] = useState(null);

  const handleToken = async (token) => {
    setToken(token);

    const response = await useFetch("/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        amount,
      }),
    });
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51MwmSdGLu9lhE68vcDIB7Y5aEBxLk31BxWoJnkxfqG45fMMofZY9NgnOtfCh5dJngzrv2n5UnoDFhHxjZvno0y5r00V5lAyZ3y"
      token={handleToken}
      amount={amount}
      currency="USD"
      name="Payment"
      billingAddress
      shippingAddress
    />
  );
};

export default PaymentForm;
