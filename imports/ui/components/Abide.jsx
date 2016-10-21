import React, { Component, PropTypes } from 'react';
 
// Friend component - represents a single todo item
export default class Abide extends Component {
  render() {
    return (
        <form data-abide noValidate>
            <div className="row">
                <div className="name-field">
                    <label>Your name <small>required</small>
                        <input type="text" required pattern="[a-zA-Z]+" />
                    </label>
                    <small className="error">Name is required and must be a string.</small>
                </div>
            </div>
        </form>
    );
  }
}