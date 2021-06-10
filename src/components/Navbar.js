import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import { Auth } from "aws-amplify";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [user, setUser] = useState(null);

  useEffect (() => {
      checkUser();
      async function checkUser() {
        try {
          const user = await Auth.currentAuthenticatedUser();
          setUser(user);
        } catch (e) {
          setUser(null);
        }
      }
    },
    []);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container navigation-container">
            <Link
              to="/"
              offset={0}
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-logo"
              onClick={closeMobileMenu}
            >
              <img style={{ height: "30px" }} src={logo} />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            {user === null && (
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-items">
                  <Link
                    className="nav-links"
                    activeClass="active"
                    to="/signin"
                    onClick={closeMobileMenu}
                    offset={0}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Signin
                  </Link>
                </li>

                <li className="nav-items">
                  <Link
                    className="nav-links"
                    activeClass="active"
                    to="/signup"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={closeMobileMenu}
                  >
                    Signup
                  </Link>
                </li>
              </ul>
            )}
            {user && (
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-items">
                  <Link
                    className="nav-links"
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={()=>{
                      closeMobileMenu();
                      Auth.signOut();
                      setUser(null);
                      console.warn("blee")
                    }}
                  >
                    SignOut
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
