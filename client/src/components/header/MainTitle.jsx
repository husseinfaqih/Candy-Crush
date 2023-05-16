import React from "react";
import PropTypes from "prop-types";

function MainTitle({ page }) {
  return (
    <h1 className={page === "allProducts" ? "invisible" : "header-title"}>
      The ultimate online candy destination for all candy lovers!
    </h1>
  );
}
MainTitle.propTypes = {
  page: PropTypes.string,
};
export default MainTitle;
