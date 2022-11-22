import React from "react";
import WorkExperienceForm from "./WorkExperienceForm";
import "../styles/SectionStyles.css";
import uniqid from "uniqid";

class WorkExperienceSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onDeleteForm = this.onDeleteForm.bind(this);
    this.onNewExperienceForm = this.onNewExperienceForm.bind(this);
  }

  generateNewExperience(id) {
    return {
      company: "",
      position: "",
      startYear: "",
      endYear: "",
      description: "",
      id: id,
    };
  }

  handleNewExperience(experience, key, value) {
    const experiencesCopy = this.state.experiences;

    experience[key] = value;
    experiencesCopy.push(experience);
    this.setState({
      experiences: experiencesCopy,
    });
  }

  onNewExperienceForm() {
    const newExperience = this.generateNewExperience(uniqid());
    const tempArray = this.state.experiences;
    tempArray.push(newExperience);
    this.setState({
      experiences: tempArray,
    });
  }

  onDeleteForm(id) {
    let tempArray = this.state.experiences;
    tempArray = tempArray.filter((experience) => {
      return experience.id !== id;
    });

    this.setState({
      experiences: tempArray,
    });

    console.log(this.state.experiences);
  }

  onInputChange(e, id) {
    const experiencesCopy = this.state.experiences;
    const changedKey = e.target.name;
    const changedValue = e.target.value;

    // If the experience array state is empty, start off with a new one and modify it
    if (experiencesCopy.length === 0) {
      let newExperience = this.generateNewExperience(id);
      this.handleNewExperience(newExperience, changedKey, changedValue);
      return;
    }

    // Check to see if ID is in array and modify existing expereince
    for (let i = 0; i < experiencesCopy.length; i++) {
      if (experiencesCopy[i].id === id) {
        experiencesCopy[i][changedKey] = changedValue;
        this.setState({
          experiences: experiencesCopy,
        });
        console.log(this.state.experiences);
        return;
      }
    }
    // ID not in experience array therefore create a new
    let newExperience = this.generateNewExperience(id);
    this.handleNewExperience(newExperience, changedKey, changedValue);
  }

  render() {
    return (
      <div className="section">
        <p>Work Experience</p>
        <div className="section-items">
          {this.state.experiences.map((experience, i, arr) => {
            // Makes the Add Button stick to the last fornm
            if (arr.length - 1 === i) {
              return (
                <WorkExperienceForm
                  inputChange={this.onInputChange}
                  deleteForm={this.onDeleteForm}
                  key={experience.id}
                  company={experience.company}
                  position={experience.position}
                  startYear={experience.startYear}
                  endYear={experience.endYear}
                  description={experience.description}
                  id={experience.id}
                  lastItem={true}
                  addForm={this.onNewExperienceForm}
                />
              );
            } else
              return (
                <WorkExperienceForm
                  inputChange={this.onInputChange}
                  deleteForm={this.onDeleteForm}
                  key={experience.id}
                  company={experience.company}
                  position={experience.position}
                  startYear={experience.startYear}
                  endYear={experience.endYear}
                  description={experience.description}
                  id={experience.id}
                  lastItem={false}
                />
              );
          })}
        </div>

        {this.state.experiences.length < 1 ? (
          // If experiences is empty then just add an add button here
          <button
            className="add-btn"
            onClick={() => this.onNewExperienceForm()}
          >
            Add
          </button>
        ) : null}
      </div>
    );
  }
}

export default WorkExperienceSection;
