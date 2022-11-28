import React from "react";
import "../styles/SectionStyles.css";
import PersonalInfoForm from "./PersonalInfoForm";

class PersonalInfoSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        name: "Jimmy Doe",
        title: "Fullstack Web Developer",
        phone: "(123)-456-7891",
        email: "jimmydoe@gmail.com",
        location: "Yodie Land, TX",
        description:
          "This is a random example description used to describe yourself and career in short.",
      },
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.props.sendInputs("personalInfo", this.state.personalInfo);
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

  resetForm() {
    this.setState(
      {
        personalInfo: {
          name: "",
          title: "",
          phone: "",
          email: "",
          location: "",
          description: "",
        },
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
          <PersonalInfoForm
            inputChange={this.onInputChange}
            resetForm={this.resetForm}
            personalInfo={this.state.personalInfo}
          />
        </div>
      </div>
    );
  }
}

export default PersonalInfoSection;
