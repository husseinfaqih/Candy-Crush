import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import PersonalInfo from "../../components/personalInfo/PersonalInfo";
import PaymentForm from "../../components/PaymentForm";
import { CartContext } from "../../store/Context";
import { Link, useLocation } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [isCorrectPersonalData, setIsCorrectPersonalData] = useState(false);
  const [isCorrectPayment, setIsCorrectPayment] = useState(false);
  const [personalData, setPersonalData] = useState({});
  const [paymentError, setPaymentError] = useState(false);
  const { items, totalAmount, resetCart } = useContext(CartContext);
  const location = useLocation();
  const sum = items
    .map((item) => item.amount)
    .reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (isCorrectPayment) {
      resetCart();
    }
  }, [isCorrectPayment]);
  return (
    <div>
      <Header />
      <div className="payment-container">
        <h3 className="payment-title">Checking your order</h3>
        {!isCorrectPayment && (
          <p className="payment-text">
            You pay {totalAmount.toFixed(2)} euro for {sum} products
          </p>
        )}

        {!isCorrectPersonalData && (
          <h3 className="payment-subtitle">
            Enter the correct information in the fields below and then you can
            proceed to payment
          </h3>
        )}
      </div>
      {!isCorrectPersonalData && (
        <PersonalInfo
          setPersonalData={setPersonalData}
          setIsCorrectPersonalData={setIsCorrectPersonalData}
        />
      )}
      {isCorrectPersonalData && (
        <div className="payment-container">
          <p className="payment-text">
            Your name:{" "}
            <span className="payment-text-black">{personalData.name}</span>
          </p>
          <p className="payment-text">
            Your delivery address:{" "}
            <span className="payment-text-black">
              {personalData.country}, {personalData.postalCode},{" "}
              {personalData.city}, {personalData.addressLine1}
            </span>
          </p>
        </div>
      )}
      {paymentError && (
        <div className="payment-subtitle">
          Your payment was not successful Try again
        </div>
      )}
      <div className="payment-button">
        {isCorrectPersonalData && !isCorrectPayment && (
          <PaymentForm
            amount={totalAmount.toFixed(2)}
            setIsCorrectPayment={setIsCorrectPayment}
            setPaymentError={setPaymentError}
          />
        )}
      </div>
      {isCorrectPayment && (
        <div className="payment-container">
          <h4 className="payment-subtitle">Your payment was successful</h4>
          <Link className="payment-link-main-page" to="/">
            To the main page
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PaymentPage;
