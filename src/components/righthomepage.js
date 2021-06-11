import React from "react";
import "./righthomepage.css";
import Top from "../images/shoebelt.jpeg";
import Right from "../images/tshirts.jpeg";
import Left from "../images/man.jpeg";
import { Link } from "react-router-dom";

function righthomepage() {
  return (
    <div>
      <div className="homepage-right-container-1">
        <div className="homepage-right-textcontainer">
          <div>
            <h1 style={{ fontSize: "30px", fontWeight: "300" }}>
              GET 10-25% OFF
            </h1>
            <h2 style={{ fontSize: "30px", fontWeight: "300" }}>
              ON SELECTED ITEMS
            </h2>
            <Link to="/search">
              <div
                style={{
                  height: "30px",
                  width: "150px",
                  borderRadius: "25px",
                  backgroundColor: "#38393A",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                  fontSize: "14px",
                }}
              >
                <p> Go To Collection</p>
              </div>
            </Link>
          </div>
        </div>

        <img src={Top} style={{ height: "300px" }} />
      </div>
      <div className="homepage-right-container-2">
        <div className="homepage-right-container-3">
          <img src={Left} style={{ maxWidth: "40vw", objectFit: "contain" }} />
        </div>
        <div className="homepage-right-container-3">
          <img src={Right} style={{ maxWidth: "40vw", objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}

export default righthomepage;
