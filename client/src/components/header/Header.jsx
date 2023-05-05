import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
// import LoginButton from "./LoginButton";
// import FavoriteButton from "./FavoriteButton";
// import CartButton from "./CartButton";
import "./header.css";
import MainTitle from "./MainTitle";
import DonutOne from "./DonutOne";
import DonutTwo from "./DonutTwo";

function Header({ page }) {
  return (
    <header
      className={page === "allProducts" ? "header-allProducts" : "header"}
    >
      <Logo />
      <div className="header-search-block">
        <SearchBar />
        <CategoryList page={page} />
      </div>
      <div className="header-buttons">
        {/* <LoginButton />
        <FavoriteButton />
        <CartButton /> */}
      </div>
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
