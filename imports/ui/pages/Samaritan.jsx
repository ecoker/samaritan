import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

/*
// TEMPLATE SECTIONS
*/



class Samaritan extends Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
        <div className="container">
            <div className="form-part-header">
                <p>THANK YOU!</p>
            </div>
            <div className="row column">
                <h2 className="coach">Thank you for being the Good Samaritan!</h2>
                <p>Your contribution of time and effort makes a real positive impact on people’s lives. Keep up the good work!</p>
            </div>
            <div className="row column cta-wrapper">
                <Link to="/register" className="button expanded">Use form again</Link>
                <Link to="/" className="button expanded">Sign Out</Link>
            </div>
        </div>
    );
  }
};

Samaritan.propTypes = {};
 
export default createContainer((props) => {
    return {};
}, Samaritan);