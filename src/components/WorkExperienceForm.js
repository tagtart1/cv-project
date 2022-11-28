import React from "react";

class WorkExperienceForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form id={this.props.id}>
          <input
            value={this.props.company}
            type="text"
            name="company"
            id="company"
            placeholder="Company"
            onChange={(event) => this.props.inputChange(event, this.props.id)}
          ></input>
          <input
            value={this.props.position}
            type="text"
            name="position"
            id="position"
            placeholder="Position"
            onChange={(event) => this.props.inputChange(event, this.props.id)}
          ></input>
          <input
            value={this.props.startYear}
            type="text"
            name="startYear"
            id="startYear"
            placeholder="Start Year"
            onChange={(event) => this.props.inputChange(event, this.props.id)}
          ></input>
          <input
            value={this.props.endYear}
            type="text"
            name="endYear"
            id="endYear"
            placeholder="End Year"
            onChange={(event) => this.props.inputChange(event, this.props.id)}
          ></input>
          <input
            value={this.props.description}
            type="text"
            name="description"
            id="decription"
            placeholder="Decription"
            onChange={(event) => this.props.inputChange(event, this.props.id)}
          ></input>
        </form>
        <div className="button-group">
          <button
            className="reset-button"
            onClick={() => this.props.resetForm(this.props.id)}
          >
            Reset
          </button>
          <button
            className="delete-btn"
            onClick={() => this.props.deleteForm(this.props.id)}
          >
            Delete
          </button>
          {this.props.lastItem ? (
            <button className="add-btn" onClick={() => this.props.addForm()}>
              Add
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default WorkExperienceForm;
