import React from "react";
import "./checkoutcard.css";
import Shirt from "../images/shirt.png";
function CheckoutCard() {
  return (
    <div className="checkout-card-container">
      <img src={Shirt} style={{ height: 70 }} />
      <div>
        <h3>Black T-shirt</h3>
        <p>Medium</p>
      </div>
      <div style={{justifySelf:"flex-end"}}>
        <p>50</p>
      </div>
      
    </div>
  );
}

export default CheckoutCard;
