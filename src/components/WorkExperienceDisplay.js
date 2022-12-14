import React from "react";
import "../styles/Display.css";

const WorkExperienceDisplay = (props) => {
  return (
    <div className="section-wrapper">
      <h1 className="section-header">WORK EXPERIENCE</h1>
      {props.workExperiences.map((experience) => {
        return (
          <div className="info" key={experience.id}>
            <div className="title-and-dates">
              <p>{experience.position}</p>
              <p>
                <span className="date-label">{experience.company} </span>|{" "}
                {experience.startYear} - {experience.endYear}
              </p>
            </div>
            <div className="section-description">{experience.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperienceDisplay;
