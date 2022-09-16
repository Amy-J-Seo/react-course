import './App.css';
import React, { Component } from 'react';
import Info from './Info';
import Counter from './Counter';
import Average from './Average';

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
    return <Average />;
  }
}
export default App;
