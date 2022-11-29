import React from "react";
import "../styles/FormStandard.css";

const PersonalInfoForm = (props) => {
  function resetForm() {
    document.getElementById("personal-info-form").reset();
    props.resetForm();
  }

  return (
    <div>
      <form id="personal-info-form">
        <input
          value={props.personalInfo.name}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={props.inputChange}
        ></input>
        <input
          value={props.personalInfo.title}
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          onChange={props.inputChange}
        ></input>
        <input
          value={props.personalInfo.phone}
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          onChange={props.inputChange}
        ></input>
        <input
          value={props.personalInfo.email}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={props.inputChange}
        ></input>
        <input
          value={props.personalInfo.location}
          type="text"
          name="location"
          id="location"
          placeholder="Location"
          onChange={props.inputChange}
        ></input>
        <textarea
          value={props.personalInfo.description}
          name="description"
          rows="5"
          cols="10"
          id="description"
          placeholder="Description..."
          onChange={props.inputChange}
        ></textarea>
      </form>
      <button className="reset-button" onClick={resetForm}>
        Reset
      </button>
    </div>
  );
};

export default PersonalInfoForm;
