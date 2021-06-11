import React, { useState } from "react";

import "./dropdown.css";
import { Link } from "react-router-dom";
import { FaBook, FaCog, FaNetworkWired } from "react-icons/fa";
import Auth from "@aws-amplify/auth";

const MenuItems = [
  {
    id: "dropdown-orders",
    title: "My Orders",
    path: "/myorders",
    cName: "dropdown-link",
  },

  {
    id: "dropdown-settings",
    title: "Settings",
    path: "/settings",
    cName: "dropdown-link",
  },
  {
    id: "dropdown-logout",
    title: "Logout",
    path: "/",
    cName: "dropdown-link",
  },
];

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const logoutuser = (id) => {
    if (id === "dropdown-logout") {
      Auth.signOut();
      window.location.href = window.location.href;
    }
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-list clicked" : "dropdown-list"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="dropdown-list-li-container">
              {item.id === "dropdown-orders" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "8px",
                  }}
                >
                  <FaBook size={12} color="#444" />
                </div>
              )}

              {item.id === "dropdown-settings" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "8px",
                  }}
                >
                  <FaCog size={12} color="#444" />
                </div>
              )}
              {item.id === "dropdown-settings" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "8px",
                  }}
                ></div>
              )}
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => {
                  setClick(false);
                  logoutuser(item.id);
                }}
              >
                <p className="dropdown-li-items">{item.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
