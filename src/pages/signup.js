import React, { useEffect } from "react";
import { useFormik } from "formik";

import "./signup.css";
import Navbar from "../components/Navbar";
import Smallfooter from "../components/smallfooter";

import cover from "../images/cover2.png";
export default function Signup({ history }) {
 
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
     alert(values.email, values.password)
    },
  });

  return (
    
     
        <>
          <Navbar />
          <div className="contact-section" id="contact">
            <div className="login-container-1">
              <div className="login-content-wrapper">
                <form onSubmit={formik.handleSubmit}>
                  <div className="login-email-wrapper">
                    <div className="login-label-container">Email</div>{" "}
                    <input
                      id="abcdefg"
                      type="email"
                      name="email"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="login-password-wrapper">
                    <div className="login-label-container">Password</div>
                    <input
                      id="abcdefg"
                      type="password"
                      name="password"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      name="Signup"
                      value="Signup"
                      id="loginbutton"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "50px",
              opacity: 0.8,
            }}
          >
            <img style={{ width: "100%", marginBottom: "-30px" }} src={cover} />
          </div>
          <Smallfooter />
        </>
    
    
  );
}