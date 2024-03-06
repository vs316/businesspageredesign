import React from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="main__footer">
        <a href="/" className="footer__logo">
          SRI VASAGA ENTERPRISES
        </a>
        <ul className="permalinks">
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/banks">BANKS</Link>
          </li>
          <li>
            <Link to="/awards">AWARDS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <div className="footer-icon">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="footer__logo-icon">
              <BsFillArrowUpSquareFill />
            </a>
          </div>
        </ul>
        <div className="footer__copyright">
          <small>&copy; 2024 Sri Vasaga | All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
