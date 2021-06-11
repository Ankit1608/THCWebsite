import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { Auth } from "aws-amplify";

import logo from "../images/logo.png";
import Dropdown from "./dropdown";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    checkUser();
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (e) {
        setUser(null);
      }
    }
  }, []);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
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

            <div className="nav-bar-search">
              <input type="text" placeholder="Search anything" />
            </div>

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
                <li
                  className="nav-items"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Link
                    to=""
                    className="nav-links"
                    activeClass="active"
                    onClick={closeMobileMenu}
                  >
                    <div>
                      {click ? (
                        <ul className={"nav-menu active"}>
                          <li className="nav-items">
                            <Link
                              to="/myorders"
                              className="nav-links"
                              activeClass="active"
                              spy={true}
                              smooth={true}
                              duration={500}
                              onClick={closeMobileMenu}
                            >
                              My Orders
                            </Link>
                          </li>
                          <li className="nav-items">
                            <Link
                              to="/settings"
                              className="nav-links"
                              activeClass="active"
                              spy={true}
                              smooth={true}
                              duration={500}
                              onClick={closeMobileMenu}
                            >
                              Settings
                            </Link>
                          </li>
                          <li className="nav-items">
                            <Link
                              to="/"
                              className="nav-links"
                              activeClass="active"
                              spy={true}
                              smooth={true}
                              duration={500}
                              onClick={() => {
                                closeMobileMenu();
                                Auth.signOut();
                              }}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "contain",
                              border: "1px solid gray",
                              backgroundImage: `url(
                                https://picsum.photos/200)`,
                            }}
                          />
                          <FaSortDown color="gray" />
                        </div>
                      )}
                    </div>
                  </Link>
                  {dropdown && <Dropdown />}
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
