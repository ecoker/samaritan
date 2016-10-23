import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {
  render() {
    return (
        <div className="top-bar">
            <div className="row">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">Samaritan</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="clients">Clients</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}