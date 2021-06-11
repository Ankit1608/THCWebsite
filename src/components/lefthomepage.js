import React from "react";
import { Link } from "react-router-dom";

import Genrebutton from "./genrebutton";

const listing = [
  {
    title: "Casual Shirts",
  },
  {
    title: "Formal Shirts",
  },
  {
    title: "T-Shirts",
  },
  {
    title: "Full T-Shirts",
  },
  {
    title: "Jeans",
  },
  {
    title: "Chinos",
  },
  {
    title: "Floral",
  },
  {
    title: "Shorts",
  },
];

function lefthomepage() {
  return (
    <div style={{ paddingRight: "6px" }}>
      {listing.map((item) => {
        return (
          <Link to="/search" style={{ textDecoration: "none", color: "black" }}>
            <Genrebutton title={item.title} />
          </Link>
        );
      })}
    </div>
  );
}

export default lefthomepage;
