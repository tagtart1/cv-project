import React from "react";
import "../styles/App.css";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import WorkExperienceSection from "./WorkExperienceSection";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <div className="input-column">
            <p>Personal Information</p>
            <PersonalInfo />
            <WorkExperienceSection />
          </div>
          <div className="output-column"></div>
        </div>
      </div>
    );
  }
}

export default App;
