import React from "react";
import "../styles/FormStandard.css";

class PersonalInfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    document.getElementById("personal-info-form").reset();
    this.props.resetForm();
  }

  render() {
    return (
      <div>
        <form id="personal-info-form">
          <input
            value={this.props.personalInfo.name}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={this.props.inputChange}
          ></input>

          <input
            value={this.props.personalInfo.title}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={this.props.inputChange}
          ></input>

          <input
            value={this.props.personalInfo.phone}
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={this.props.inputChange}
          ></input>

          <input
            value={this.props.personalInfo.email}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.props.inputChange}
          ></input>

          <input
            value={this.props.personalInfo.location}
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            onChange={this.props.inputChange}
          ></input>

          <textarea
            value={this.props.personalInfo.description}
            name="description"
            rows="5"
            cols="10"
            id="description"
            placeholder="Description..."
            onChange={this.props.inputChange}
          ></textarea>
        </form>
        <button className="reset-button" onClick={this.resetForm}>
          Reset
        </button>
      </div>
    );
  }
}

export default PersonalInfoForm;
