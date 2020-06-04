import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  register = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios
      .post("/auth/register", { email, password })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        alert("Could not log in");
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        This is the landing Component
        <form onSubmit={(event) => this.login(event)}>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={(event) => this.changeHandler(event)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(event) => this.changeHandler(event)}
          />
          <input type="submit" value="Register" />
        </form>
        <span>Already have an account? Login</span>
        <Link to="/">Here</Link>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { loginUser })(Register);
