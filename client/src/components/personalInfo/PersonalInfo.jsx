import React, { useState } from "react";
import PropTypes from "prop-types";
import validator from "validator";
import "./PersonalInfo.css";

function PersonalInfo({ setPersonalData, setIsCorrectPersonalData }) {
  const API_KEY = process.env.ADDRESS_API_KEY;
  const [formData, setFormData] = useState({
    name: "",
    addressLine1: "",
    city: "",
    postalCode: "",
    country: "",
    email: "",
  });
  const [warnData, setWarnData] = useState({
    name: false,
    addressLine1: false,
    city: false,
    postalCode: false,
    country: false,
    email: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setWarnData((prevState) => ({ ...prevState, [name]: false }));
  };

  const handleSubmit = async (event) => {
    let isSuccess = true;
    event.preventDefault();
    if (validateForm()) {
      try {
        const validatedAddress = await checkAddress(formData);
        if (validatedAddress.addressLine1 === "undefined undefined") {
          isSuccess = false;
          setWarnData((prevState) => ({ ...prevState, addressLine1: true }));
        }
        if (validatedAddress.city === undefined) {
          isSuccess = false;
          setWarnData((prevState) => ({ ...prevState, city: true }));
        }
        if (validatedAddress.postalCode === undefined) {
          isSuccess = false;
          setWarnData((prevState) => ({ ...prevState, postalCode: true }));
        }
        if (validatedAddress.country === undefined) {
          isSuccess = false;
          setWarnData((prevState) => ({ ...prevState, country: true }));
        }

        if (isSuccess) {
          setPersonalData(formData);
          setIsCorrectPersonalData(true);
        } else {
          // eslint-disable-next-line no-console
          console.log("need change");
        }
      } catch (error) {
        alert("There was an error validating the address.");
      }
    }
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.addressLine1 ||
      !formData.city ||
      !formData.postalCode ||
      !formData.country ||
      !formData.email
    ) {
      setWarnData({
        name: !formData.name,
        addressLine1: !formData.addressLine1,
        city: !formData.city,
        postalCode: !formData.postalCode,
        country: !formData.country,
        email: !formData.email,
      });
      return false;
    }
    if (!validator.isEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const checkAddress = async (formData) => {
    const { addressLine1, city, postalCode, country } = formData;
    const response = await fetch(
      `https://geocode.search.hereapi.com/v1/geocode?q=${addressLine1},  ${city}, ${postalCode}, ${country}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    if (data.items.length > 0) {
      const { address, position } = data.items[0];
      return {
        addressLine1: address.houseNumber + " " + address.street,
        city: address.city,
        postalCode: address.postalCode,
        country: address.countryCode,
        latitude: position.lat,
        longitude: position.lng,
      };
    } else {
      throw new Error("Unable to validate address.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="personal-form">
      <div className="personal-form-div">
        <label className="personal-form-label" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={
            warnData.name ? "input-warn personal-input" : "personal-input"
          }
        />
      </div>
      <div className="personal-form-div">
        <label className="personal-form-label" htmlFor="addressLine1">
          Address Line 1:
        </label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleInputChange}
          className={
            warnData.addressLine1
              ? "input-warn personal-input"
              : "personal-input"
          }
        />
      </div>

      <div className="personal-form-div">
        <label className="personal-form-label" htmlFor="city">
          City:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          className={
            warnData.city ? "input-warn personal-input" : "personal-input"
          }
        />
      </div>
      <div className="personal-form-div">
        <label className="personal-form-label" htmlFor="postalCode">
          Postal Code:
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          className={
            warnData.postalCode ? "input-warn personal-input" : "personal-input"
          }
        />
      </div>
      <div className="personal-form-div">
        <label className="personal-form-label" htmlFor="country">
          Country:
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className={
            warnData.country ? "input-warn personal-input" : "personal-input"
          }
        />
      </div>
      <div className="personal-form-div">
        <label className="personal-form-label" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={
            warnData.email ? "input-warn personal-input" : "personal-input"
          }
        />
      </div>
      <button className="personal-info-button" type="submit">
        PAY HERE
      </button>
    </form>
  );
}

PersonalInfo.propTypes = {
  setPersonalData: PropTypes.func.isRequired,
  setIsCorrectPersonalData: PropTypes.func.isRequired,
};

export default PersonalInfo;
