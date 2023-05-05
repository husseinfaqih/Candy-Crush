import React from "react";
import logo from "../../assets/logo.svg";
import PropTypes from "prop-types";
function Logo({ position }) {
  return (
    <img
      className={position === "footer" ? "footer-logo" : "header-logo"}
      src={logo}
      alt="sugar rush"
    />
  );
}
Logo.propTypes = {
  position: PropTypes.string.isRequired,
};

export default Logo;
