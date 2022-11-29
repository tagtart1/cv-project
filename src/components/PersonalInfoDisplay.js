import React from "react";
import "../styles/PersonalInfoDisplay.css";
import callSvg from "../imgs/call.svg";
import locationSvg from "../imgs/location.svg";
import mailSvg from "../imgs/mail.svg";

const PersonalInfoDisplay = (props) => {
  const { name, title, email, phone, location, description } =
    props.personalInfo;

  return (
    <div className="personal-info">
      <div className="top-header">
        <div className="name-and-title">
          <p>{name}</p>
          <p>{title}</p>
        </div>
        <ul className="contacts-and-locations">
          <li>
            <img src={callSvg} alt="Phone Number Icon" />
            {phone}
          </li>
          <li>
            <img src={mailSvg} alt="Email Icon" />
            {email}
          </li>
          <li>
            <img src={locationSvg} alt="My Location Icon" />
            {location}
          </li>
        </ul>
      </div>
      <div className="horizontal-line"></div>
      <div className="description">{description}</div>
    </div>
  );
};

export default PersonalInfoDisplay;
