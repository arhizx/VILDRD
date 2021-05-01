import React from "react";
import "./Contacts&Order.scss";
const ContactsAndOrder = () => {
  return (
    <div className="container">
      <div className="contactsandorder">
        <a
          href="https://www.instagram.com/vildrd/"
          target="_blank no-rel no-referrer"
          className="constactsandorder__instagram"
        >
          Instagram
        </a>
        <a
          href="mailto:contactvildrd@gmail.com"
          className="contactsandorder__gmail"
        >
          contactvildrd@gmail.com
        </a>
        <a href="mailto:contactvildrd@protonmail.com" className="protonmail">
          contactvildrd@protonmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactsAndOrder;

//contactvildrd@gmail.com
//contactvildrd@protonmail.com
