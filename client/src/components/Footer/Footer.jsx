import React from "react";
import "./Footer.css";
import Logo from "../header/Logo";
import Socialmedia from "../Socialmedia";
function Footer() {
  return (
    <footer>
      <div className="footer-information">
        <h4>Categories</h4>
        <div className="footer-category">
          <div className="footer-col">
            <ul>
              <li>Cookies</li>
              <li>Candy Corn</li>
              <li>Lollipop</li>
              <li>Hard Candy</li>
              <li>Vegetarian</li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <ul>
            <li>Phone : 06-123-321-89</li>
            <li>Email : info@sugarrush.com</li>
            <li>Adress: Sugarrush 1 , 8937 SR Netherland</li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>Copyright information:</p>
          <p>&copy;2023 Sugar Rush. All rights reserved</p>
          <p>
            Created with <span className="heart">&#10084;</span>| HYF Class41
            Team 1
          </p>
        </div>
      </div>
      <div className="footer-sugarRush">
        <Logo position="footer" />
        <Socialmedia />
      </div>
    </footer>
  );
}

export default Footer;
