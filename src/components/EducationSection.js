import React, { useState, useEffect } from "react";
import EducationForm from "./EducationForm";
import "../styles/SectionStyles.css";
import uniqid from "uniqid";

// class EducationSection extends React.Component {

//   generateNewEducation(id) {
//     return {
//       course: "",
//       university: "",
//       startYear: "",
//       endYear: "",
//       description: "",
//       id: id,
//     };
//   }

//   onResetForm(id) {
//     const educationsCopy = this.state.educations;
//     educationsCopy.forEach((education, i) => {
//       if (education.id === id) {
//         educationsCopy[i] = this.generateNewEducation(id);
//       }
//     });

//     this.setState(
//       {
//         educations: educationsCopy,
//       },
//       () => {
//         this.props.sendInputs("educations", this.state.educations);
//         console.log(this.state.educations);
//       }
//     );
//   }

//   handleNewEducation(education, key, value) {
//     const educationsCopy = this.state.educations;

//     education[key] = value;
//     educationsCopy.push(education);
//     this.setState({
//       educations: educationsCopy,
//     });
//     this.props.sendInputs("educations", this.state.educations);
//   }

//   onNewEducationForm() {
//     const newEducation = this.generateNewEducation(uniqid());
//     const tempArray = this.state.educations;
//     tempArray.push(newEducation);
//     this.setState({
//       educations: tempArray,
//     });
//     this.props.sendInputs("educations", this.state.educations);
//   }

//   onDeleteForm(id) {
//     this.setState(
//       {
//         educations: this.state.educations.filter((education) => {
//           return education.id !== id;
//         }),
//       },
//       () => {
//         this.props.sendInputs("educations", this.state.educations);
//       }
//     );
//   }

//   onInputChange(e, id) {
//     const educationsCopy = this.state.educations;
//     const changedKey = e.target.name;
//     const changedValue = e.target.value;

//     // If the educations array state is empty, start off with a new one and modify it
//     if (educationsCopy.length === 0) {
//       let newEducation = this.generateNewEducation(id);
//       this.handleNewEducation(newEducation, changedKey, changedValue);
//       return;
//     }

//     // Check to see if ID is in array and modify existing expereince
//     for (let i = 0; i < educationsCopy.length; i++) {
//       if (educationsCopy[i].id === id) {
//         educationsCopy[i][changedKey] = changedValue;
//         this.setState({
//           educations: educationsCopy,
//         });
//         this.props.sendInputs("educations", this.state.educations);
//         return;
//       }
//     }
//     // ID not in educations array therefore create a new
//     let newEducation = this.generateNewEducation(id);
//     this.handleNewEducation(newEducation, changedKey, changedValue);
//   }

// }

// export default EducationSection;

const EducationSection = (props) => {
  const [educations, setEducations] = useState([
    {
      course: "Level Million Programming",
      university: "Harvard",
      startYear: "2025",
      endYear: "2027",
      description: "",
      id: uniqid(),
    },
    {
      course: "Weapons of Coding",
      university: "Random School",
      startYear: "2028",
      endYear: "2030",
      description:
        "This is a random description that you can add to further explain a block of education",
      id: uniqid(),
    },
  ]);

  const { sendInputs } = props;

  const generateNewEducation = (id) => {
    return {
      course: "",
      university: "",
      startYear: "",
      endYear: "",
      description: "",
      id: id,
    };
  };

  useEffect(() => {
    sendInputs("educations", educations);
    console.log("jorge3");
  }, [educations, sendInputs]);

  const onResetForm = (id) => {
    const educationsCopy = [...educations];
    educationsCopy.forEach((education, i) => {
      if (education.id === id) {
        educationsCopy[i] = generateNewEducation(id);
      }
    });

    setEducations(educationsCopy);
  };

  const handleNewEducation = (education, key, value) => {
    const educationsCopy = [...educations];
    education[key] = value;
    educationsCopy.push(education);

    setEducations(educationsCopy);
  };

  const onNewEducationForm = () => {
    const newEducation = generateNewEducation(uniqid());
    const tempArray = [...educations];
    tempArray.push(newEducation);

    setEducations(tempArray);
  };
  const onDeleteForm = (id) => {
    const educationsCopy = educations.filter((education) => {
      return education.id !== id;
    });

    setEducations(educationsCopy);
  };

  const onInputChange = (e, id) => {
    const educationsCopy = [...educations];
    const changedKey = e.target.name;
    const changedValue = e.target.value;
    // If the educations array state is empty, start off with a new one and modify it
    if (educationsCopy.length === 0) {
      let newEducation = generateNewEducation(id);
      handleNewEducation(newEducation, changedKey, changedValue);
      return;
    }
    // Check to see if ID is in array and modify existing expereince
    for (let i = 0; i < educationsCopy.length; i++) {
      if (educationsCopy[i].id === id) {
        educationsCopy[i][changedKey] = changedValue;

        setEducations(educationsCopy);

        return;
      }
    }
    // ID not in educations array therefore create a new internally
    let newEducation = generateNewEducation(id);
    handleNewEducation(newEducation, changedKey, changedValue);
  };

  return (
    <div className="section">
      <p>Education</p>
      <div className="section-items">
        {educations.map((education, i, arr) => {
          // Makes the Add Button stick to the last fornm
          if (arr.length - 1 === i) {
            return (
              <EducationForm
                inputChange={onInputChange}
                deleteForm={onDeleteForm}
                key={education.id}
                course={education.course}
                university={education.university}
                startYear={education.startYear}
                endYear={education.endYear}
                description={education.description}
                id={education.id}
                resetForm={onResetForm}
                lastItem={true}
                addForm={onNewEducationForm}
              />
            );
          } else
            return (
              <EducationForm
                inputChange={onInputChange}
                deleteForm={onDeleteForm}
                key={education.id}
                course={education.course}
                university={education.university}
                startYear={education.startYear}
                endYear={education.endYear}
                description={education.description}
                id={education.id}
                resetForm={onResetForm}
                lastItem={false}
              />
            );
        })}
      </div>
      {educations.length < 1 ? (
        // If educations is empty then just add an add button here
        <button className="add-btn" onClick={() => onNewEducationForm()}>
          Add
        </button>
      ) : null}
    </div>
  );
};

export default EducationSection;
