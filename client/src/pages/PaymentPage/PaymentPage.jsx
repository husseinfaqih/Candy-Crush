import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import useFetch from "../hooks/useFetch";

const PaymentPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleToken = async (token) => {
    setToken(token);

    try {
      const response = await useFetch("/charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          formData,
        }),
      });

      // eslint-disable-next-line no-console
      console.log(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleFormChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleFormChange}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Zip:
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleFormChange}
          />
        </label>
      </form>

      <StripeCheckout
        stripeKey="pk_test_51MwmSdGLu9lhE68vcDIB7Y5aEBxLk31BxWoJnkxfqG45fMMofZY9NgnOtfCh5dJngzrv2n5UnoDFhHxjZvno0y5r00V5lAyZ3y"
        token={handleToken}
        amount={1000}
        currency="USD"
        name="Payment"
        billingAddress
        shippingAddress
      />
    </div>
  );
};

export default PaymentPage;
