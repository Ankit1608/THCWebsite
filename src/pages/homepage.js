import React, { Component } from "react";
import Lefthomepage from "../components/lefthomepage";
import Righthomepage from "../components/righthomepage";
import SearchPage from "./searchpage";
import "./homepage.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import Preview from "../components/previewcomponent";
import Smallfooter from "../components/smallfooter";
const listing = [
  {
    price: "300",
    name: "black hoodie",
  },
  {
    price: "3000",
    name: "black  dskmlke dsfa hoodie",
  },
  {
    price: "3100",
    name: "black  sdscdda adad hoodie",
  },
  {
    price: "3030",
    name: "black sdfe efdad dce rferv refgverhoodie",
  },
  {
    price: "4300",
    name: "black sdfe efdad dce rferv refgverhoodie",
  },
];
function Homepage() {
  var lis = [];
  var temp = [];
  for (let i = 0; i < listing.length; i++) {
    if (i % 4 !== 0 || i === 0) {
      temp.push(listing[i]);
    } else if (temp.length === 4 && i % 4 === 0) {
      lis.push(temp);
      temp = [];
      temp.push(listing[i]);
    }
  }
  if (temp !== []) {
    lis.push(temp);
    temp = [];
  }

  return (
    <>
      <Navbar />
      <div className="homepage-maincontainer">
        <Lefthomepage />
        <Righthomepage />
      </div>

      <div style={{ marginLeft: "50px", marginRight: "50px" }}>
        {lis !== [] &&
          lis.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                {item.map((item2) => {
                  return (
                    <Link
                      to="/item"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Preview name={item2.name} price={item2.price} />
                    </Link>
                  );
                })}
              </div>
            );
          })}
      </div>
      <Smallfooter />
    </>
  );
}

export default Homepage;
