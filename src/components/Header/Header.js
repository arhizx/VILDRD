import { Link } from "react-router-dom";
import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" className="header__title">
          VILDRD
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__links">
          <li>
            <Link to="/about" className="header__link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contactsandorder" className="header__link">
              CONTACT//ORDER//BUY
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
