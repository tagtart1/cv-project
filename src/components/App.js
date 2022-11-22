import React from "react";
import "../styles/App.css";
import Header from "./Header";
import PersonalInfoSection from "./PersonalInfoSection";
import WorkExperienceSection from "./WorkExperienceSection";
import EducationSection from "./EducationSection";

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

  getFormInputs() {}

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <div className="input-column">
            <PersonalInfoSection />
            <WorkExperienceSection />
            <EducationSection />
          </div>
          <div className="output-column"></div>
        </div>
      </div>
    );
  }
}

export default App;
