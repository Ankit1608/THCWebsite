import React from "react";
import { useFormik } from "formik";
import Shippinglogo from "./shippinglogo";
import "./information.css";

function Information() {
  const formik = useFormik({
    initialValues: {
      contact: "",
      firstname: "",
      lastname:"",
      address:"",
      city:"",
      state:"",
      country:"",
      pin:"",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
      <Shippinglogo />
  <form onSubmit={formik.handleSubmit}>
    <p style={{color:"#ffffff",fontSize:"20px"}}>Contact Information</p>
  <div className="row">
    <div className="col-25">
      <label style={{color:"white"}} for="number">Phone Number</label>
    </div>
    <div className="col-75">
      <input type="text" id="contact" name="contact" placeholder="Contact" value={formik.values.contact} onChange={formik.handleChange} />
    </div>
  </div>
  <p style={{color:"#ffffff",fontSize:"20px",marginTop:"60px"}}>Shipping address</p>
  <div className="row">
    <div className="col-25">
      <label style={{color:"white"}} for="firstname">First Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="firstname" name="firstname" placeholder="First Name" value={formik.values.firstname} onChange={formik.handleChange} />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label style={{color:"white"}} for="lastname">Last Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="lastname" name="lastname" placeholder="Last Name" value={formik.values.lastname} onChange={formik.handleChange} />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label style={{color:"white"}} for="text">Address</label>
    </div>
    <div className="col-75">
      <input type="text" id="address" name="address" placeholder="Address" value={formik.values.address} onChange={formik.handleChange} />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label style={{color:"white"}} for="city">City</label>
    </div>
    <div className="col-75">
      <input type="text" id="city" name="city" placeholder="City" value={formik.values.city} onChange={formik.handleChange} />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label style={{color:"white"}} for="state" >State</label>
    </div>
    <div className="col-75">
      <input type="text" id="state" name="state" placeholder="state" value={formik.values.state} onChange={formik.handleChange} />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label style={{color:"white"}} for="pin">PIN code</label>
    </div>
    <div className="col-75">
      <input type="text" id="pin" name="pin" placeholder="pin" value={formik.values.pin} onChange={formik.handleChange} />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label style={{color:"white"}} for="country">Country</label>
    </div>
    <div className="col-75">
      <select id="country" name="country" value={formik.values.country} onChange={formik.handleChange}>
        <option value="india">India</option>
        
      </select>
    </div>
  </div>
  
  <div style={{marginTop:"40px"}} className="row">
    <input type="submit" value="Continue to Shipping" />
  </div>
  </form>
</div>
  );
}

export default Information;


/*<label htmlFor="number">Contact</label>
      <input
        id="contact"
        name="contact"
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.contact}
      />
      <p>Shipping Address</p>
      <label>first name</label>
      <input
        id="firstname"
        name="firstname"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.firstname}
      />
      <label>last name</label>
      <input
        id="lastname"
        name="lastname"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
<div>
<label>Address</label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.address}
      />
      </div>

      <div>
<label>City</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
      />
      </div>

      <div>
<label>State</label>
      <input
        id="state"
        name="state"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.state}
      />
      </div>
      <div>
<label>Country</label>
      <input
        id="country"
        name="country"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.country}
      />
      </div> */