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
      <Logo />
      <div className="header-search-block">
        <SearchBar />
        <CategoryList page={page} />
        <div className="header-buttons">
          <AllProductsLink />
          <div className="cart-and-favorites-buttons">
            <FavoriteButton />
            <CartButton />
          </div>
        </div>
      </div>
      {/* <LoginButton /> */}
      <DonutOne />
      <DonutTwo />
      <MainTitle page={page} />
    </header>
  );
}

Header.propTypes = {
  page: PropTypes.string,
};

export default Header;
