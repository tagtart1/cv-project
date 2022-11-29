import React from "react";
import WorkExperienceForm from "./WorkExperienceForm";
import "../styles/SectionStyles.css";
import uniqid from "uniqid";
import { useEffect, useState } from "react";

const WorkExperienceSection = (props) => {
  const [experiences, setExperiences] = useState([
    {
      company: "Tesla",
      position: "Front End Developer",
      startYear: "2012",
      endYear: "2014",
      description:
        "I did some things doing this. I did this thing also. I also did that one that handles this many request while maintaining this high speeds. I was super good at the job and yea",
      id: uniqid(),
    },
  ]);

  const { sendInputs } = props;

  useEffect(() => {
    sendInputs("workExperiences", experiences);
  }, [experiences, sendInputs]);

  const generateNewExperience = (id) => {
    return {
      company: "",
      position: "",
      startYear: "",
      endYear: "",
      description: "",
      id: id,
    };
  };
  const handleNewExperience = (experience, key, value) => {
    const experiencesCopy = [...experiences];
    experience[key] = value;
    experiencesCopy.push(experience);
    setExperiences(experiencesCopy);
  };
  const onNewExperienceForm = () => {
    const newExperience = generateNewExperience(uniqid());
    const tempArray = [...experiences];
    tempArray.push(newExperience);
    setExperiences(tempArray);
  };
  const onDeleteForm = (id) => {
    let experiencesCopy = [...experiences];

    experiencesCopy = experiencesCopy.filter((experience) => {
      return experience.id !== id;
    });

    setExperiences(experiencesCopy);
  };

  const onResetForm = (id) => {
    const experiencesCopy = [...experiences];
    experiencesCopy.forEach((experience, i) => {
      if (experience.id === id) {
        experiencesCopy[i] = generateNewExperience(id);
      }
    });
    setExperiences(experiencesCopy);
  };

  const onInputChange = (e, id) => {
    const experiencesCopy = [...experiences];
    const changedKey = e.target.name;
    const changedValue = e.target.value;
    // If the experience array state is empty, start off with a new one and modify it
    if (experiencesCopy.length === 0) {
      let newExperience = generateNewExperience(id);
      handleNewExperience(newExperience, changedKey, changedValue);
      return;
    }
    // Check to see if ID is in array and modify existing expereince
    for (let i = 0; i < experiencesCopy.length; i++) {
      if (experiencesCopy[i].id === id) {
        experiencesCopy[i][changedKey] = changedValue;
        setExperiences(experiencesCopy);
        return;
      }
    }
    // ID not in experience array therefore create a new
    let newExperience = generateNewExperience(id);
    handleNewExperience(newExperience, changedKey, changedValue);
  };

  return (
    <div className="section">
      <p>Work Experience</p>
      <div className="section-items">
        {experiences.map((experience, i, arr) => {
          // Makes the Add Button stick to the last fornm
          if (arr.length - 1 === i) {
            return (
              <WorkExperienceForm
                inputChange={onInputChange}
                deleteForm={onDeleteForm}
                key={experience.id}
                company={experience.company}
                position={experience.position}
                startYear={experience.startYear}
                endYear={experience.endYear}
                description={experience.description}
                id={experience.id}
                resetForm={onResetForm}
                lastItem={true}
                addForm={onNewExperienceForm}
              />
            );
          } else
            return (
              <WorkExperienceForm
                inputChange={onInputChange}
                deleteForm={onDeleteForm}
                key={experience.id}
                company={experience.company}
                position={experience.position}
                startYear={experience.startYear}
                endYear={experience.endYear}
                description={experience.description}
                id={experience.id}
                resetForm={onResetForm}
                lastItem={false}
              />
            );
        })}
      </div>
      {experiences.length < 1 ? (
        // If experiences is empty then just add an add button here
        <button className="add-btn" onClick={() => onNewExperienceForm()}>
          Add
        </button>
      ) : null}
    </div>
  );
};

export default WorkExperienceSection;
