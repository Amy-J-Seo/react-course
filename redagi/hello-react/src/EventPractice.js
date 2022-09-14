import React, { Component } from 'react';

export default class EventPractice extends Component {
  state = {
    message: '',
  };

  handleClick = () => {
    alert(this.state.userName + ', ' + this.state.message);
    this.setState({
      userName: '',
      message: '',
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>Event!</h1>
        <input
          type="text"
          name="userName"
          placeholder="Enter username"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Enter anything"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>confirm</button>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
