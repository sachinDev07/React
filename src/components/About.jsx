import { Outlet } from "react-router-dom";
import ProfileFunComponent from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructor");
  }

  componentDidMount() {
    // Best place for making API calls
    console.log("Parent - ComponentDidMount");
  }

  render() {
    console.log("parent - render");
    return (
      <div>
        <h1>This is about page</h1>
        <Outlet />  
        {/* <ProfileClass name={"First child"} /> */}
        <ProfileFunComponent name={"First child"} />
      </div>
    );
  }
}

export default About;
