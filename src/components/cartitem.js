import React from "react";
import Shirt from "../images/shirt.png";

function Cartitem() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        <img src={Shirt} style={{ height: "100px", width: "100px" }} />
      </div>
      <div style={{ alignContent: "space-between", flex: 1, width: "250px" }}>
        <p>black hoodie</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p
            style={{
              paddingTop: 5,
              paddingBottom: 5,
              cursor: "pointer",
              border: "1px solid #d3d3d3",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            -
          </p>
          <p
            style={{
              paddingTop: 5,
              paddingBottom: 5,
              border: "1px solid #d3d3d3",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderLeft: 0,
              borderRight: 0,
            }}
          >
            1
          </p>
          <p
            style={{
              paddingTop: 5,
              paddingBottom: 5,
              cursor: "pointer",
              border: "1px solid #d3d3d3",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            +
          </p>
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column", alignContent: "space-between", flex: 1,height:"100px" }}>
        <p>Remove</p>
        <p>₹ 400</p>
      </div>
    </div>
  );
}

export default Cartitem;
