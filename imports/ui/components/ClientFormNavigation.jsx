import React, { Component, PropTypes } from 'react';
 
export default class ClientFormNavigation extends Component {
  render() {
    return (
        <div className="row column">
            <ul className="breadcrumbs form-navigation">
                <li><a href="#">Needs</a></li>
                <li><a href="#">Basic Information</a></li>
                <li className="unavailable"><a href="#">Military Service</a></li>
                <li className="current"><a href="#">Individual or Family</a></li>
            </ul>
        </div>
    );
  }
}