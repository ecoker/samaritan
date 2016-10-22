import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {
  render() {
    return (
        <div className="top-bar">
            <div className="row">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">Yeti Store</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="nomatch">No Match</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                    <li><input type="search" placeholder="Search" /></li>
                    <li><button type="button" className="button">Search</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}