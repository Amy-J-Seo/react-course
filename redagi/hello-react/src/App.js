import './App.css';
import React, { Component } from 'react';
import Info from './Info';

class App extends Component {
  state = {
    show: false,
  };
  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShow}>show</button>
        {this.state.show && <Info />}
      </div>
    );
  }
}
export default App;
