import React from "react";
import { Link } from "react-router-dom";
// import LoginButton from "./LoginButton";
import FavoriteButton from "./FavoriteButton";
import CartButton from "./CartButton";

const NavButtons = () => {
  return (
    <div className="nav-bar">
      <div>
        <Link to="/" className="nav-buttons">
          Home
        </Link>
        <Link to="/products" className="nav-buttons">
          All Products
        </Link>
      </div>
      <div>
        {/* <LoginButton /> */}
        <FavoriteButton />
        <CartButton />
      </div>
    </div>
  );
};

export default NavButtons;
