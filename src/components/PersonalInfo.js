import React from "react";
import "../styles/FormStandard.css";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="name" id="name" placeholder="Name"></input>

          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
          ></input>

          <input type="tel" name="phone" id="phone" placeholder="Phone"></input>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          ></input>

          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
          ></input>

          <textarea
            rows="5"
            cols="10"
            id="description"
            placeholder="Description..."
          ></textarea>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
