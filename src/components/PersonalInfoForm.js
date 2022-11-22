import React from "react";
import "../styles/FormStandard.css";

class PersonalInfoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={this.props.inputChange}
          ></input>

          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={this.props.inputChange}
          ></input>

          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={this.props.inputChange}
          ></input>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.props.inputChange}
          ></input>

          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            onChange={this.props.inputChange}
          ></input>

          <textarea
            name="description"
            rows="5"
            cols="10"
            id="description"
            placeholder="Description..."
            onChange={this.props.inputChange}
          ></textarea>
        </form>
      </div>
    );
  }
}

export default PersonalInfoForm;
