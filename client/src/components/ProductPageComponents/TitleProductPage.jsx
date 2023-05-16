import React from "react";
import PropTypes from "prop-types";

function TitleProductPage({ title }) {
  return <h2 className="product-page-title">{title}</h2>;
}

TitleProductPage.propTypes = {
  title: PropTypes.string,
};

export default TitleProductPage;
