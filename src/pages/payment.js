import React, {useState} from "react";
import CheckoutCart from "../components/checkoutcart";
import PaymentPage from "../pages/paymentPage";
import Shipping from "../components/shipping";
import "./payment.css";
function Payment() {
  const [information,setInformation] = useState(1);
  return (
    <div className="payment-main-container">
      <div className="payment-cotainer-1">
        {information===1 &&
        <PaymentPage />}
        {information===0 &&
        <Shipping />}
      </div>
      <CheckoutCart />
    </div>
  );
}

export default Payment;
