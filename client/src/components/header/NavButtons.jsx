import React from "react";
import { Link } from "react-router-dom";

const NavButtons = () => {
  return (
    <>
      <Link to="/" style={{ margin: "5px" }}>
        Home
      </Link>
      <Link to="/products">All Products</Link>
    </>
  );
};

export default NavButtons;
