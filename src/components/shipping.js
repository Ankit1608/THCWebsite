import React from 'react';
import { useFormik } from "formik";
import Shippinglogo from "./shippinglogo";

import "./information.css";

function Shipping(){
    const formik = useFormik({
        initialValues: {
          contact: "9949694474",
          address:"hsahnnfj ajjsns hjjjw jncnn skka  sjjj sjjd djjs jao wowoa iii",
          
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return(
        <div className="container">
            <Shippinglogo />
  <form onSubmit={formik.handleSubmit}>
  <div className="row">
    <div className="col-25">
      <label style={{color:"white"}} for="number">Phone Number</label>
    </div>
    <div className="col-75">
      <input type="text" id="contact" name="contact" placeholder="Contact" value={formik.values.contact} />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label style={{color:"white"}} for="number">Ship to</label>
    </div>
    <div className="col-75">
      <input type="text" id="address" name="address" placeholder="Address" value={formik.values.address} />
    </div>
  </div>
  <div style={{display:"flex",alignItems:"center"}}>
  <div style={{marginTop:"60px"}} className="row">
    <input type="submit" value="Continue Payment" />
  </div>
  <p style={{color:"#1fb4ef",marginTop:"75px",marginLeft:"25px",cursor:"pointer"}}>Return to information</p>
  </div>
  </form>
  </div>
    );
}

export default Shipping;