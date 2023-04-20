import React from "react";
import logo from "../../assets/logo.svg";

function Logo({ position }) {
  return (
    <img
      className={position === "footer" ? "footer-log" : "header-logo"}
      src={logo}
      alt="sugar rush"
    />
  );
}

export default Logo;
