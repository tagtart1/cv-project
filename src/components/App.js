import React from "react";
import "../styles/App.css";
import Header from "./Header";
import PersonalInfoSection from "./PersonalInfoSection";
import WorkExperienceSection from "./WorkExperienceSection";
import EducationSection from "./EducationSection";
import PersonalInfoDisplay from "./PersonalInfoDisplay";
import WorkExperienceDisplay from "./WorkExperienceDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {},
      workExperiences: [],
      educations: [],
    };

    this.getFormInputs = this.getFormInputs.bind(this);
  }

  getFormInputs(propertyName, value) {
    this.setState(
      {
        [propertyName]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <div className="input-column">
            <PersonalInfoSection sendInputs={this.getFormInputs} />
            <WorkExperienceSection sendInputs={this.getFormInputs} />
            <EducationSection sendInputs={this.getFormInputs} />
          </div>
          <div className="output-column">
            <PersonalInfoDisplay personalInfo={this.state.personalInfo} />
            <WorkExperienceDisplay
              workExperiences={this.state.workExperiences}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
