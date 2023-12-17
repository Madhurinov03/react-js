import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: " jharkhand",
      },
    };
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child did Mount");
    const data = await fetch("https://api.github.com/users/madhurinov03");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update ");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { login, id } = this.state.userInfo;
    console.log(this.props.name + "child render");
    return (
      <div className="userClass">
        <h3>Login: {login}</h3>
        <h3>Id:{id}</h3>
      </div>
    );
  }
}
export default UserClass;
