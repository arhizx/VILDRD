import React from "react";
import "./Contacts&Order.scss";
const ContactsAndOrder = () => {
  return (
    <div className="container">
      <div className="contactsandorder">
        <p className="constactsandorder__p">
          Located in Moscow, Russia - 48 Ariel
        </p>
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
