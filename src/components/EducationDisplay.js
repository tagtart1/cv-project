import React from "react";
import "../styles/Display.css";

const EducationDisplay = (props) => {
  return (
    <div className="section-wrapper">
      <h1 className="section-header">EDUCATION</h1>
      {props.educations.map((education) => {
        return (
          <div className="info" key={education.id}>
            <div className="title-and-dates">
              <p>{education.course}</p>
              <p>
                <span className="date-label">{education.university} </span>|{" "}
                {education.startYear} - {education.endYear}
              </p>
            </div>
            <div className="section-description">{education.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationDisplay;
