import { Component } from "react";
import UserClass from "./UserClass";
import UserInfo from "../Utils/UserInfo";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent ctor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <h1>About us</h1>
        <h2>This is about us page</h2>
        {/* Alternative for useContext() hook in Class Components */}
        <UserInfo.Consumer>
          {({ name }) => {
            console.log("userinfo.Consumer -> " + name);
          }}
        </UserInfo.Consumer>
        <UserClass name={"First"} age={23} address={"Pune"} />
        <UserClass name={"Second"} age={23} address={"Pune"} />
        <UserClass name={"Third"} age={23} address={"Pune"} />
      </>
    );
  }
}

export default About;
