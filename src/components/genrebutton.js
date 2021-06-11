import React from "react";
import "./genrebutton.css";
import Img from "../images/right.png";
function genrebutton({ title }) {
  return (
    <div>
      <div className="genrebutton-maincontainer-2">
        <div className="genrebutton-titlecontainer">
          <img
            src={Img}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "25px",
              marginRight: "12px",
            }}
          />
          <p style={{ paddingLeft: "3px", fontSize: "14px" }}>{title}</p>
        </div>
        <p
          style={{ paddingRight: "10px", fontWeight: "400", fontSize: "18px" }}
        >
          {">"}
        </p>
      </div>
    </div>
  );
}

export default genrebutton;
