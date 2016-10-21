import React, { Component, PropTypes } from 'react';
 
// Friend component - represents a single todo item
export default class Abide extends Component {
  render() {
    return (
        <form>
            <div className="row">
                <div className="small-12 columns">
                    <label>Number Required
                        <input type="text" placeholder="1234" aria-describedby="exampleHelpText" required pattern="number" />
                        <span className="form-error">
                        Yo, you had better fill this out, it's required.
                        </span>
                    </label>
                </div>
            </div>
        </form>
    );
  }
}