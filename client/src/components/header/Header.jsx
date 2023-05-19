import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
// import LoginButton from "./LoginButton";
import AllProductsLink from "./AllProductsLink";

import "./header.css";
import MainTitle from "./MainTitle";
import DonutOne from "./DonutOne";
import DonutTwo from "./DonutTwo";
import FavoriteButton from "./FavoriteButton";
import CartButton from "./CartButton";
function Header({ page }) {
  return (
    <header
      className={page === "allProducts" ? "header-allProducts" : "header"}
    >
      <div className="header-elements">
        <div className="navbar-main-elements">
          <Logo />

          <div className="sections">
            <div className="top-section">
              <SearchBar />
              <div className="cart-and-favorites-buttons">
                <FavoriteButton />
                <CartButton />
              </div>
            </div>

            <div className="bottom-section">
              <CategoryList page={page} />
              <AllProductsLink page={page} />
            </div>
          </div>
        </div>
        <div className="donut">
          {" "}
          <DonutOne />
          <DonutTwo />
        </div>

        <MainTitle page={page} />
      </div>
    </header>
  );
}

Header.propTypes = {
  page: PropTypes.string,
};

export default Header;
