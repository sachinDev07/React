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
  }

  async componentDidMount () {
    // API Calls  --- best place for api call
    const data = await fetch("https://api.github.com/users/Sachin-RJ7");
    const json = await data.json();

    this.setState({
      userInfo : json,
    });
  }

  componentDidUpdate( ) {
    // this.timer = setInterval(() => {
    //   console.log("I love react");
    // }, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    
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

