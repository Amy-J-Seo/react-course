import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {
  static defaultProps = {
    name: 'basic name',
  };
  static propTypes = {
    name: PropTypes.string,
    favNum: PropTypes.number.isRequired,
  };

  render() {
    const { name, children, favNum } = this.props;
    return (
      <div>
        Hello my Name is {name}
        <br />
        children's name is {children}
        <br />
        my fav num's {favNum}
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: 'name!',
// };

// MyComponent.propTypes = {
//   name: PropTypes.number,
//   favNum: PropTypes.number.isRequired,
// };
