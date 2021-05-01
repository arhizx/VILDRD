import React from "react";
import "./Footer.scss";
const Footer = () => {
  const date = new Date();
  return (
    <div className="container__footer">
      <div className="footer"> Copyright © {date.getUTCFullYear()} </div>
    </div>
  );
};

export default Footer;
