import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'; 

export default class Footer extends Component {
  render() {
    return (
        <div className="row column">
            <hr />
            <ul className="menu">
                <li>Yeti Store</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="nomatch">No Match</Link></li>
                <li className="float-right">Copyright 2016</li>
            </ul>
        </div>
    );
  }
}