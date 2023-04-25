import React from "react";
import PropTypes from "prop-types";

export default function Category({ image, categoryName, description }) {
  const containerStyles = {
    position: "relative",
    width: "400px",
    height: "400px",
    marginRight: "20px",
    marginBottom: "200px",
  };

  const imageStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const layerStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 10%)",
    background: "rgba(245, 245, 245, 0.7)",
    height: "300px",
    width: "250px",
  };
  const textStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontWeight: "bold",
    fontSize: "24px",
    textAlign: "center",
  };
  const buttonStyles = {
    position: "absolute",
    bottom: "-50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontWeight: "bold",
    fontSize: "24px",
    textAlign: "center",
  };
  return (
    <div style={containerStyles}>
      <img src={image} alt="" style={imageStyles} />
      <div style={layerStyles}>
        <div style={textStyles}>
          <h3 style={{ fontSize: "20px", color: " #3F3E3E" }}>
            {categoryName}
          </h3>
          <span style={{ fontSize: "15px", color: " #3F3E3E" }}>
            {description}
          </span>
        </div>
      </div>
      <button style={buttonStyles}>SHOP NOW</button>
    </div>
  );
}

//to validate the props because of eSilent warning
Category.propTypes = {
  image: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
