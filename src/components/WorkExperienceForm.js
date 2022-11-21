import React from "react";

class WorkExperienceForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company"
            onChange={this.props.inputChange}
          ></input>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Position"
          ></input>
          <input
            type="text"
            name="start-year"
            id="start-year"
            placeholder="Start Year"
          ></input>
          <input
            type="text"
            name="end-year"
            id="end-year"
            placeholder="End Year"
          ></input>
          <input
            type="text"
            name="description"
            id="decription"
            placeholder="Decription"
          ></input>
        </form>
      </div>
    );
  }
}

export default WorkExperienceForm;
