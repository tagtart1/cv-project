import React from "react";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form id={this.props.id}>
          <input
            value={this.props.course}
            type="text"
            name="course"
            id="course"
            placeholder="Course / Program"
            onChange={(event) => this.props.inputChange(event, this.props.id)}
          ></input>
          <input
            value={this.props.university}
            type="text"
            name="university"
            id="university"
            placeholder="University"
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

export default EducationForm;
