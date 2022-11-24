import React from "react";
import "../styles/SectionStyles.css";
import PersonalInfoForm from "./PersonalInfoForm";

class PersonalInfoSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        name: "",
        title: "",
        phone: "",
        email: "",
        location: "",
        description: "",
      },
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const personalInfoCopy = this.state.personalInfo;
    const changedKey = e.target.name;
    const changedValue = e.target.value;

    personalInfoCopy[changedKey] = changedValue;

    this.setState(
      {
        personalInfo: personalInfoCopy,
      },
      () => {
        this.props.sendInputs("personalInfo", this.state.personalInfo);
      }
    );
  }

  render() {
    return (
      <div className="section">
        <p>Personal Information</p>
        <div className="section-items">
          <PersonalInfoForm inputChange={this.onInputChange} />
        </div>
      </div>
    );
  }
}

export default PersonalInfoSection;
