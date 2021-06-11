import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Auth from "@aws-amplify/auth";
import { useLocation } from "react-router-dom";

import "./login.css";
import Navbar from "../components/Navbar";
import Smallfooter from "../components/smallfooter";
import cover from "../images/cover2.png";
export default function Login({ history }) {
  const location = useLocation();
  const [pass, setPass] = useState(null);
  useEffect(() => {
    try {
      setPass(location.state.pass);
    } catch (e) {
      history.replace("/");
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values.password);

      const otp = values.password.toString();
      console.log(otp);
      Auth.confirmSignUp(values.email, otp)
        .then(async (result) => {
          console.log(result);
          await Auth.signIn({ username: values.email, password: pass });
          history.push("/");
          alert("signed in");
        })
        .catch((e) => {
          console.log(e);
        });
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
              <div>
                <input
                  type="submit"
                  name="Signin"
                  value="Verify"
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

// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import Auth from "@aws-amplify/auth";
// import { useLocation } from "react-router-dom";

// import "./signup.css";
// import Navbar from "../components/Navbar";
// import Smallfooter from "../components/smallfooter";
// import cover from "../images/cover2.png";
// export default function Signupverify({ history }) {
// const location = useLocation();
// const [pass,setPass]=useState(null);
// useEffect (() => {
//     try{
//    setPass(location.state.pass)
//     }catch(e){
//         history.replace("/")
//     }
//   },
//   []);
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },

//     onSubmit: async (values) => {
// try {
//     await await Auth.confirmSignUp({email:values.email, authCode:values.password});
//     await Auth.signIn(values.email, pass);
//     history.push("/")
//     alert("signed in")
//   } catch (err) {
//     console.log({ err });
//   }
//     },
//   });

//   return (
//     <>
//       <Navbar />
//       <div className="contact-section" id="contact">
//         <div className="login-content-wrapper">
//           <div className="login-container-1">
//             <form onSubmit={formik.handleSubmit}>
//               <div className="login-email-wrapper">
//                 <div className="login-label-container">Email</div>{" "}
//                 <input
//                   id="abcdefg"
//                   type="email"
//                   name="email"
//                   required
//                   onChange={formik.handleChange}
//                   value={formik.values.email}
//                 />
//               </div>
//               <div className="login-password-wrapper">
//                 <div className="login-label-container">Password</div>
//                 <input
//                   id="abcdefg"
//                   type="password"
//                   name="password"
//                   required
//                   onChange={formik.handleChange}
//                   value={formik.values.password}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="submit"
//                   name="Signup"
//                   value="Signup"
//                   id="loginbutton"
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "flex-end",
//           height: "50px",
//           opacity: 0.8,
//         }}
//       >
//         <img style={{ width: "100%", marginBottom: "-30px" }} src={cover} />
//       </div>
//       <Smallfooter />
//     </>
//   );
// }
