import React from "react";

class ProfileClass extends React.Component {
    
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo : {
        name : "Developer",
        locaton : "Computer",
      }
    };
    console.log("Child - Constructor  " + this.props.name);
  }

  async componentDidMount () {
    // API Calls  --- best place for api call
    const data = await fetch("https://api.github.com/users/Sachin-RJ7");
    const json = await data.json();

    this.setState({
      userInfo : json,
    });

    console.log("Child - componentDidMount " + this.props.name)
  }

  componentDidUpdate( ) {
    // this.timer = setInterval(() => {
    //   console.log("I love react");
    // }, 1000);

    console.log("Component - componentDidUpdate ");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component - componentWillUnmount");
  }

  render() {
    console.log("Child - render " + this.props.name);
    
    const { count } = this.state; // we can destructure like this also

    return (
      <div>
        <h1>Profile Class based Component</h1>
        <img src={this.state.userInfo.avatar_url} alt="pic" />
        <h2>Myself {this.state.userInfo.name}</h2>
        <h3>Bio : {this.state.userInfo.bio}</h3>
      </div>
    );
  }
}

export default ProfileClass;

/**
 *  --- Render phase : what changes should be made to virtual DOM ---
 *  
 *  Parent Constructor
 *  Parent render
 *    First child constructor
 *    First child render
 *    Second child constructor
 *    Second child render
 * 
 *    --- Commit phase : DOM updated for childer ---
 * 
 *    First child ComponentDidMount
 *    Second child ComponentDidMount
 *  Parent ComponentDidMount
 */