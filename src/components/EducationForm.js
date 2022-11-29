import React from "react";

const EducationForm = (props) => {
  return (
    <div>
      <form id={props.id}>
        <input
          value={props.course}
          type="text"
          name="course"
          id="course"
          placeholder="Course / Program"
          onChange={(event) => props.inputChange(event, props.id)}
        ></input>
        <input
          value={props.university}
          type="text"
          name="university"
          id="university"
          placeholder="University"
          onChange={(event) => props.inputChange(event, props.id)}
        ></input>
        <input
          value={props.startYear}
          type="text"
          name="startYear"
          id="startYear"
          placeholder="Start Year"
          onChange={(event) => props.inputChange(event, props.id)}
        ></input>
        <input
          value={props.endYear}
          type="text"
          name="endYear"
          id="endYear"
          placeholder="End Year"
          onChange={(event) => props.inputChange(event, props.id)}
        ></input>
        <input
          value={props.description}
          type="text"
          name="description"
          id="decription"
          placeholder="Decription"
          onChange={(event) => props.inputChange(event, props.id)}
        ></input>
      </form>
      <div className="button-group">
        <button
          className="reset-button"
          onClick={() => props.resetForm(props.id)}
        >
          Reset
        </button>
        <button
          className="delete-btn"
          onClick={() => props.deleteForm(props.id)}
        >
          Delete
        </button>
        {props.lastItem ? (
          <button className="add-btn" onClick={() => props.addForm()}>
            Add
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default EducationForm;
