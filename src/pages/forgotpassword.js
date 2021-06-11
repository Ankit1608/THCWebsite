import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Auth from "@aws-amplify/auth";

import "./login.css";
import Navbar from "../components/Navbar";
import Smallfooter from "../components/smallfooter";
import cover from "../images/cover2.png";
export default function ForgotPassword({ history }) {
  const [uistate, setUistate] = useState(false);
  useEffect(() => {
    checkUser();
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        history.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      new_password: "",
    },

    onSubmit: async (values) => {
      if (values.password === "") {
        Auth.forgotPassword(values.email)
          .then((data) => {
            console.log(data);
            setUistate(true);
          })
          .catch((err) => console.log(err));
      } else {
        Auth.forgotPasswordSubmit(
          values.email,
          values.password,
          values.new_password
        )
          .then((data) => {
            console.log(data);
            history.replace("/signin");
          })
          .catch((err) => console.log(err));
      }
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
              {uistate && (
                <>
                  <div className="login-password-wrapper">
                    <div className="login-label-container">OTP</div>
                    <input
                      id="abcdefg"
                      type="password"
                      name="password"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  <div className="login-password-wrapper">
                    <div className="login-label-container">New Password</div>
                    <input
                      id="abcdefg"
                      type="password"
                      name="new_password"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.new_password}
                    />
                  </div>
                </>
              )}
              <div>
                <input
                  type="submit"
                  name="Signin"
                  value="Signin"
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
