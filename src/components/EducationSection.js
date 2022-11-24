import React from "react";
import EducationForm from "./EducationForm";
import "../styles/SectionStyles.css";
import uniqid from "uniqid";

class EducationSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educations: [this.generateNewEducation(uniqid())],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onDeleteForm = this.onDeleteForm.bind(this);
    this.onNewEducationForm = this.onNewEducationForm.bind(this);
  }

  generateNewEducation(id) {
    return {
      course: "",
      university: "",
      startYear: "",
      endYear: "",
      description: "",
      id: id,
    };
  }

  handleNewEducation(education, key, value) {
    const educationsCopy = this.state.educations;

    education[key] = value;
    educationsCopy.push(education);
    this.setState({
      educations: educationsCopy,
    });
    this.props.sendInputs("educations", this.state.educations);
  }

  onNewEducationForm() {
    const newEducation = this.generateNewEducation(uniqid());
    const tempArray = this.state.educations;
    tempArray.push(newEducation);
    this.setState({
      educations: tempArray,
    });
    this.props.sendInputs("educations", this.state.educations);
  }

  onDeleteForm(id) {
    this.setState(
      {
        educations: this.state.educations.filter((education) => {
          return education.id !== id;
        }),
      },
      () => {
        this.props.sendInputs("educations", this.state.educations);
      }
    );
  }

  onInputChange(e, id) {
    const educationsCopy = this.state.educations;
    const changedKey = e.target.name;
    const changedValue = e.target.value;

    // If the educations array state is empty, start off with a new one and modify it
    if (educationsCopy.length === 0) {
      let newEducation = this.generateNewEducation(id);
      this.handleNewEducation(newEducation, changedKey, changedValue);
      return;
    }

    // Check to see if ID is in array and modify existing expereince
    for (let i = 0; i < educationsCopy.length; i++) {
      if (educationsCopy[i].id === id) {
        educationsCopy[i][changedKey] = changedValue;
        this.setState({
          educations: educationsCopy,
        });
        this.props.sendInputs("educations", this.state.educations);
        return;
      }
    }
    // ID not in educations array therefore create a new
    let newEducation = this.generateNewEducation(id);
    this.handleNewEducation(newEducation, changedKey, changedValue);
  }

  render() {
    return (
      <div className="section">
        <p>Education</p>
        <div className="section-items">
          {this.state.educations.map((education, i, arr) => {
            // Makes the Add Button stick to the last fornm
            if (arr.length - 1 === i) {
              return (
                <EducationForm
                  inputChange={this.onInputChange}
                  deleteForm={this.onDeleteForm}
                  key={education.id}
                  company={education.company}
                  position={education.position}
                  startYear={education.startYear}
                  endYear={education.endYear}
                  description={education.description}
                  id={education.id}
                  lastItem={true}
                  addForm={this.onNewEducationForm}
                />
              );
            } else
              return (
                <EducationForm
                  inputChange={this.onInputChange}
                  deleteForm={this.onDeleteForm}
                  key={education.id}
                  company={education.company}
                  position={education.position}
                  startYear={education.startYear}
                  endYear={education.endYear}
                  description={education.description}
                  id={education.id}
                  lastItem={false}
                />
              );
          })}
        </div>

        {this.state.educations.length < 1 ? (
          // If educations is empty then just add an add button here
          <button className="add-btn" onClick={() => this.onNewEducationForm()}>
            Add
          </button>
        ) : null}
      </div>
    );
  }
}

export default EducationSection;
