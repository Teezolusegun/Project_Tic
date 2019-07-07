import React, { Component } from "react";
import {Link, NavLink} from 'react-router-dom'
class Login extends Component {
  constructor() {
    super();
    let loggedIn = false;
    this.state = {
      email: "",
      password: "",
      loggedIn
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let localStorageArray = localStorage.getItem("user");
    let lastSaver = JSON.parse(localStorageArray);
    let check = lastSaver.filter(
      items =>
        items.email === this.state.email &&
        items.password === this.state.password
        
    );
    console.log(check)
    if (check.length > 0) {
      alert("Login Succesfull");
      return this.props.history.push("/home");
    } else {
      alert("Username Or Password Incorrect");
    }
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="Type your password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />

          <button>Login</button><br/>
          <NavLink to='/Register'><p>Click here to SignUp</p></NavLink>
        </form>
      </div>
    );
  }
}
export default Login;
