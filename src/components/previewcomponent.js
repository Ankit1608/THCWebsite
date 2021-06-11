import React from "react";

import Shirt from "../images/shirt.png";

function previewcomponent({ name, price }) {
  return (
    <div
      style={{
        height: "400px",
        overflow: "hidden",
        width: "260px",
        boxShadow: "3px 3px 2px #ddd",
      }}
    >
      <div>
        <img
          src={Shirt}
          style={{ width: "260px", height: "260px", objectFit: "cover" }}
        />
        <div
          style={{ minHeight: "90px", maxHeight: "90px", overflow: "hidden" }}
        >
          <p
            style={{
              color: "#36454F",
              fontSize: "20px",

              fontWeight: "500px",
            }}
          >
            {name}
          </p>
        </div>
      </div>
      <p style={{ fontWeight: "bold", bottom: 0 }}>₹ {price}</p>
    </div>
  );
}

export default previewcomponent;
