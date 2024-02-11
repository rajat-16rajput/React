import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "dummy",
        id: "default",
      },
    };
    console.log(this.props.name + " ctor called");
  }

  async componentDidMount() {
    console.log(this.props.name + " componentDidMount called");
    const data = await fetch("https://api.github.com/users/rajat-16rajput");
    const json = await data.json();
    //console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + "componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + "componentWillUnmount");
  }

  render() {
    console.log(this.props.name + " render called");
    const { login, id, avatar_url } = this.state.userInfo;

    return (
      <>
        <img src={avatar_url} />
        <h4>Login {login}</h4>
        <h4>id {id}</h4>
      </>
    );
  }
}

export default UserClass;
