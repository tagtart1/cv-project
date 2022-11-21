import React from "react";
import WorkExperienceForm from "./WorkExperienceForm";
import "../styles/SectionStyles.css";

class WorkExperienceSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
      currentExperience: {
        company: "",
        position: "",
        start: "",
        end: "",
        desc: "",
      },
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange() {
    console.log("hammood");
  }

  render() {
    return (
      <div className="section">
        <p>Work Experience</p>
        <WorkExperienceForm inputChange={this.onInputChange} />
        <button className="delete-btn">Delete</button>
        <button className="add-btn">Add</button>
      </div>
    );
  }
}

export default WorkExperienceSection;
