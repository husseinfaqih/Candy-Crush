import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import LoginButton from "./LoginButton";
import FavoriteButton from "./FavoriteButton";
import CartButton from "./CartButton";
import "./header.css";
import MainTitle from "./MainTitle";

function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="header-search-block">
        <SearchBar />
        <CategoryList />
      </div>
      <LoginButton />
      <FavoriteButton />
      <CartButton />
      <MainTitle />
    </header>
  );
}

export default Header;
