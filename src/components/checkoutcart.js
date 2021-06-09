import React from "react";
import CheckoutCard from "./checkoutcard";
import "./checkoutcart.css";
function CheckoutCart() {
  return (<div className="checkout-container">
    <div>
      <div>

<CheckoutCard/>
<CheckoutCard/>
      </div>
      <div>
        <div style={{justifyContent:"space-between",display:"flex",flexDirection:"row"}}>
          <p>Subtotal</p>
          <p>1000</p>
        </div>
        <div style={{justifyContent:"space-between",display:"flex",flexDirection:"row"}}>
          <p>shipping</p>
          <p>100</p>
        </div>
        <div style={{justifyContent:"space-between",display:"flex",flexDirection:"row"}}>
          <p>total</p>
          <p>1100</p>
        </div>
      </div>
      </div>
  </div>);
  
}

export default CheckoutCart;
