import React, { useState } from "react";
import SearchComponent from "./SearchComponent";

function SearchBar() {
  const [searchWord, setSearchWord] = useState("");
  const [handleSearch] = SearchComponent(searchWord);

  const handleInputChange = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <input
      placeholder="Search"
      className="header-search-input"
      value={searchWord}
      onChange={handleInputChange}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          handleSearch();
          setSearchWord("");
        }
      }}
    ></input>
  );
}

export default SearchBar;
