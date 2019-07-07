import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type == "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let saver = [];
    console.log("The form was submitted with the following inputs");
    console.log(this.state);
    if (localStorage.getItem("user") == null) {
      saver.push(this.state);
      localStorage.setItem("user", JSON.stringify(saver));
    } else {
      saver = JSON.parse(localStorage.getItem('user'))
          saver.push(this.state)
          localStorage.setItem('user', JSON.stringify(saver))
    }
  }

  render() {
    return (
      <div className='register'>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Full-name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="email"
            placeholder="Email-address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="checkbox"
            name="hasAgreed"
            value={this.state.hasAgreed}
            onChange={this.handleChange}
          />{" "}<br/>
          I agree all statements in
          <br /> <a href="">Terms of service</a>
          <br />
          <button>Register</button><br/>
          <Link to='/' >Already A Member</Link>
        </form>
      </div>
    );
  }
}
export default Registration;
