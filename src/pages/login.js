import React, { useEffect } from "react";
import { useFormik } from "formik";
import Auth from "@aws-amplify/auth";

import "./login.css";
import Navbar from "../components/Navbar";
import Smallfooter from "../components/smallfooter";
import cover from "../images/cover2.png";
export default function Login({ history }) {
  useEffect (() => {
    checkUser();
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
       history.push("/")
      } catch (err) {
        console.log(err)
      }
    }
  },
  []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  
    onSubmit: async (values) => {
      Auth.signIn({username:values.email,password:values.password})
      .then((result) => {
      console.log(result)
      history.replace("/")
      }).catch((e)=>{
        console.log(e)
      })
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
                      type="text"
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
                      name="Signin"
                      value="Signin"
                      id="loginbutton"
                    />
                  </div>
                 
                </form>
                <div><button onClick={
                  ()=>{Auth.federatedSignIn({provider:"Google"})}}>Sign in with Google</button></div>
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