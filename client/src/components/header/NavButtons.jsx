import React from "react";
import { Link } from "react-router-dom";

const NavButtons = () => {
  return (
    <>
      <Link to="/" className="nav-buttons">
        Home
      </Link>
      <Link to="/products" className="nav-buttons">
        All Products
      </Link>
    </>
  );
};

export default NavButtons;
