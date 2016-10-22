import React, { Component, PropTypes } from 'react';
 
export default class BasicInfo extends Component {
  render() {
    return (
        <div>
            <h2>Military Service</h2>
            <div className="name-field">
                <label>First Name <small>required</small>
                <input name="firstName" type="text" required pattern="[a-zA-Z]+" />
                </label>
                <small className="error">Name is required and must be a string.</small>
            </div>
            <div className="name-field">
                <label>Last Name <small>required</small>
                <input name="lastName" type="text" required pattern="[a-zA-Z]+" />
                </label>
                <small className="error">Name is required and must be a string.</small>
            </div>
        </div>
    );
  }
}