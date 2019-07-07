import React, { Component } from "react";
import Display from "./Display";

class Adding extends Component {
  state = {
    savedIput: [],
    newInput: ""
  };

  handleChange = e => {
    this.setState({ newInput: e.target.value });
    console.log(e.target.value);
  };

  handleSubmit = e => {
    this.setState(state => {
      const savedIput = this.state.savedIput.concat(state.newInput);
      return {
        savedIput,
        newInput: ""
      };
    });
    console.log(this.state.todoItems);
    e.preventDefault();
  };

  render() {
    return (
      <div className='card'>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newInput}
            onChange={this.handleChange}
          />
          <br />
          <button>Save</button>
        </form>

        <div className="saved">
          {this.state.savedIput.map(item => (
            <Display theArray={item} />
          ))}
        </div>
      </div>
    );
  }
}
export default Adding;
