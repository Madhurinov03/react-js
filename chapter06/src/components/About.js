import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Did Mount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1> About Us</h1>
        <h3> This is react</h3>
        <UserClass name={"First"} location={"Bengalore"} />
      </div>
    );
  }
}
export default About;
