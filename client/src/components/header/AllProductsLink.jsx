import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AllProductsLink = ({ page }) => {
  return (
    <div>
      <Link
        to="/products"
        className={page === "allProducts" ? "invisible" : "all-products-link"}
      >
        All Products
      </Link>
    </div>
  );
};
AllProductsLink.propTypes = {
  page: PropTypes.string,
};

export default AllProductsLink;
