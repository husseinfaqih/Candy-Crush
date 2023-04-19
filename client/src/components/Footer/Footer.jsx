import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-information">
        <div className="footer-catagory">
          <h4>Catagories</h4>
          <div className="footer-col">
            <p>p1</p>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className="footer-col">
            <p>p2</p>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className="footer-col">
            <p>p3</p>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <ul>
            <li>Phone : 505050502124</li>
            <li>Email : email@emailcom</li>
            <li>Adress: Adress</li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>Copyright information</p>
          <p>copyright</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
