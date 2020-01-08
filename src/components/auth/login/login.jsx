import React, { Component } from "react";
import { Uservalidation } from "../../../helper/auth/login";
import "./login.css";
import FakeAuth from "../../authenticate";
import { withRouter } from "react-router";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      email: "",
      pass: "",
      user:[],
      chack:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.hnadleLogin = this.hnadleLogin.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  hnadleLogin(e) {
    e.preventDefault();
    var { email, pass } = this.state;
    this.props.history.push('/');
    Uservalidation(email,pass);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.hnadleLogin}>
          E-MAIL:
          <input
            id="name"
            name="email"
            className="bottom"
            onChange={this.handleChange}
            required
          />
          PASSWORD:
          <input
            id="pass"
            type="password"
            name="pass"
            className="bottom"
            onChange={this.handleChange}
            required
          />
          <button type="submit" className="loginbutton bottom">
            LOGIN
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
