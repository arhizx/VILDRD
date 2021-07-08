import React from "react";
import "./Contacts&Order.scss";
const ContactsAndOrder = () => {
  return (
    <div className="container">
      <div className="contactsandorder">
        <a
          href="https://www.instagram.com/vildrdmaker/"
          target="_blank no-rel no-referrer"
          className="constactsandorder__instagram"
        >
          Instagram
        </a>
        <p className="contactsandorder__gmail">contactvildrd@gmail.com</p>
        <p className="protonmail">contactvildrd@protonmail.com</p>
      </div>
    </div>
  );
};

export default ContactsAndOrder;
