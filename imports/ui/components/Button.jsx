import React, { Component, PropTypes } from 'react';
 
// Friend component - represents a single todo item
export default class Button extends Component {
  render() {
    return (
        <button className={`button ${this.props.additionalClasses || ''}`} type="reset">{ this.props.text }</button>
    );
  }
}