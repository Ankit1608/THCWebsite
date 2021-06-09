import React, { useState } from "react";
import Cap from "../images/cap.png";
import Cap2 from "../images/cap2.png";
import { FaCartArrowDown, FaCartPlus, FaCross, FaUber } from "react-icons/fa";
import CartItem from "../components/cartitem";

import "./itempage.css";
import { Link } from "react-router-dom";

function Itempage() {
  const [image, setImage] = useState(Cap);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <img src={image} style={{ height: "600px", width: "600px" }} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={Cap2}
            style={{ height: "70px", width: "70px" }}
            onClick={() => setImage(Cap2)}
          />
          <img
            src={Cap}
            style={{ height: "70px", width: "70px" }}
            onClick={() => setImage(Cap)}
          />
          <img
            src={Cap2}
            style={{ height: "70px", width: "70px" }}
            onClick={() => setImage(Cap2)}
          />
          <img
            src={Cap}
            style={{ height: "70px", width: "70px" }}
            onClick={() => setImage(Cap)}
          />
        </div>
      </div>
      <div
        style={{
          paddingLeft: "10px",
          marginLeft: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ fontSize: "30px" }}>Black hoodie</p>
          <p style={{ marginTop: "-15px", fontWeight: "bold" }}>₹ 1000</p>
          <p style={{ maxWidth: "700px" }}>
            kwfnkenfje wejfn ewjk jsdn jkwe jkew asjnc ajknd akjsc kjascb jascb
            jaks kjN JKCB AJ jcas cakjn kjcas ckjab sakjcb kcjasb jkcabs kjscba
            bchhds kancj
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "100px",
          }}
        >
          {count === 0 && (
            <div className={"item-button"} onClick={() => setCount(count + 1)}>
              <p style={{ color: "#ffffff" }}>Add to cart</p>
            </div>
          )}
          {count > 0 && (
            <div className={"item-button"}>
              <p style={{ color: "#ffffff" }}>
                <span onClick={() => setCount(count - 1)}>
                  {"  "} -{"  "}{" "}
                </span>{" "}
                {count}{" "}
                <span onClick={() => setCount(count + 1)}>
                  {"  "} + {"  "}
                </span>{" "}
              </p>
            </div>
          )}
        </div>
      </div>
      {count !== 0 && cart === 0 && (
        <div
          style={{ position: "fixed", right: 0, top: "50%", cursor: "pointer" }}
          onClick={() => setCart(1)}
        >
          <FaCartArrowDown color={"black"} size={40} />
        </div>
      )}
      {count !== 0 && cart === 1 && (
        <div
          style={{
            position: "fixed",
            right: 0,
            top: "0%",
            backgroundColor: "white",
          }}
        >
          <div style={{ height: "100vh" ,  }}>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p style={{ paddingRight: "25px" }}>Shopping Cart{"  "}</p>
                <p style={{ cursor: "pointer" }} onClick={() => setCart(0)}>
                  +
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignContent: "space-between",
                }}
              >
                <CartItem />
              </div>
            </div>
            <div style={{justifySelf:"flex-end", alignSelf:"flex-end"}}>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <p>Subtotal:</p>
                <p>₹4000</p>
              </div>
              <Link to="/payment">
              <div style={{ justifyContent: "center", display: "flex" }}>
                <p
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "15px 30px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Begin checkout
                </p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Itempage;
