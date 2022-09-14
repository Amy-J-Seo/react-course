import React, { Component } from 'react';

export default class Counter extends Component {
  //state default value set
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}: not changing number</h2>
        <button
          onClick={() => {
            this.setState(
              (prevState, props) => {
                console.log(prevState);
                return {
                  number: prevState.number + 1,
                };
              },
              () => {
                console.log('setState called');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
