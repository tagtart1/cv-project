import React from "react";
import "../styles/PersonalInfoDisplay.css";

class PersonalInfoDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, title, email, phone, location, description } =
      this.props.personalInfo;

    return (
      <div className="personal-info">
        <div className="top-header">
          <div className="name-and-title">
            <p>{name}</p>
            <p>{title}</p>
          </div>

          <ul className="contacts-and-locations">
            <li>{phone}</li>
            <li>{email}</li>
            <li>{location}</li>
          </ul>
        </div>
        <div className="horizontal-line"></div>
        <div className="description">{description}</div>
      </div>
    );
  }
}

export default PersonalInfoDisplay;
