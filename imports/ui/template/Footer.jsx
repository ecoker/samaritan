import React, { Component, PropTypes } from 'react';
 
export default class Footer extends Component {
  render() {
    return (
        <div className="row column">
            <hr />
            <ul className="menu">
                <li>Yeti Store</li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li className="float-right">Copyright 2016</li>
            </ul>
        </div>
    );
  }
}