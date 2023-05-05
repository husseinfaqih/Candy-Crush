import React from "react";
import { Link } from "react-router-dom";

const AllProductsLink = () => {
  return (
    <div>
      <Link to="/products" className="nav-buttons">
        All Products
      </Link>
    </div>
  );
};

export default AllProductsLink;
