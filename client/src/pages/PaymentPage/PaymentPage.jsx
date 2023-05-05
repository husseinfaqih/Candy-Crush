import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import PersonalInfo from "../../components/personalInfo/PersonalInfo";
import PaymentForm from "../../components/PaymentForm";
import NavButtons from "../../components/header/NavButtons";
import { CartContext } from "../../store/Context";
import { Link, useLocation } from "react-router-dom";

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
      <NavButtons />
      <Header />
      <div>
        <h3>Checking your order</h3>
        {!isCorrectPayment && (
          <p>
            You pay {totalAmount.toFixed(2)} euro for {sum} products
          </p>
        )}
      </div>

      {!isCorrectPersonalData && (
        <h3>
          Enter the correct information in the fields below and then you can
          proceed to payment
        </h3>
      )}

      {!isCorrectPersonalData && (
        <PersonalInfo
          setPersonalData={setPersonalData}
          setIsCorrectPersonalData={setIsCorrectPersonalData}
        />
      )}
      {isCorrectPersonalData && (
        <div>
          <p>Your name {personalData.name}</p>
          <p>
            Your delivery address: {personalData.country},
            {personalData.postalCode}, {personalData.city},
            {personalData.addressLine1}
          </p>
        </div>
      )}
      {paymentError && <div>Your payment was not successful Try again</div>}
      {isCorrectPersonalData && !isCorrectPayment && (
        <PaymentForm
          amount={totalAmount.toFixed(2)}
          setIsCorrectPayment={setIsCorrectPayment}
          setPaymentError={setPaymentError}
        />
      )}
      {isCorrectPayment && (
        <div>
          <h4>Your payment was successful</h4>
          <Link to="/">To the main page</Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PaymentPage;
