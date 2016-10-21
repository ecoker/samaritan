import React, { Component, PropTypes } from 'react';
 
// Friend component - represents a single todo item
export default class Friend extends Component {
  render() {
    return (
      <li>{this.props.firstName} {this.props.lastName}</li>
    );
  }
}
 
Friend.propTypes = {
  // This component gets the Friend to display through a React prop.
  // We can use propTypes to indicate it is required
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};