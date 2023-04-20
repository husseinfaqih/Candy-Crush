import React from "react";
import "./Footer.css";
import Logo from "../header/Logo";
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-information">
          <h4>Catagories</h4>
          <div className="footer-catagory">
            <div className="footer-col">
              <ul>
                <li>Cookies</li>
                <li>Candy Corn</li>
                <li>Lollipop</li>
                <li>Hard Candy</li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>Vegetarian</li>
                <li>Chocolate</li>
                <li>Candy Canes</li>
                <li>Candy Coated</li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>Cookies</li>
                <li>Candy Corn</li>
                <li>Lollipop</li>
                <li>Hard Candy</li>
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
        <div className="footer-sugarrush">
          <div className="footer-logo">
            <Logo position="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
