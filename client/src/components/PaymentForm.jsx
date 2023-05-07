import React, { useState } from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";
import useFetch from "../hooks/useFetch";

const PaymentForm = ({ amount, setIsCorrectPayment, setPaymentError }) => {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [key, setKey] = useState("");

  const { performFetch } = useFetch("/charge", (data) => {
    if (data.success && data.result.client_secret) {
      setPaymentError(false);
      setIsCorrectPayment(true);
    } else {
      setPaymentError(true);
    }
  });

  const handlePayment = async (token) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await performFetch({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100,
          currency: "eur",
          token,
        }),
      });
      setKey(response);
    } catch (error) {
      setError(error);
      setPaymentError(true);
      // eslint-disable-next-line no-console
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <StripeCheckout
      stripeKey={process.env.STRIP_KEY}
      name="Candy Rush"
      amount={amount * 100}
      currency="EUR"
      billingAddress
      zipCode
      token={handlePayment}
      disabled={isLoading}
      stripeAccount=""
    />
  );
};

PaymentForm.propTypes = {
  amount: PropTypes.number,
  setIsCorrectPayment: PropTypes.func.isRequired,
  setPaymentError: PropTypes.func.isRequired,
};

export default PaymentForm;
