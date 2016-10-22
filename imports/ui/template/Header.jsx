import React, { Component, PropTypes } from 'react';
 
export default class Header extends Component {
  render() {
    return (
        <div className="top-bar">
            <div className="row">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text">Yeti Store</li>
                    <li className="has-submenu">
                        <a href="#">One</a>
                        <ul className="submenu menu vertical" data-submenu>
                        <li><a href="#">One</a></li>
                        <li><a href="#">Two</a></li>
                        <li><a href="#">Three</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Two</a></li>
                    <li><a href="#">Three</a></li>
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