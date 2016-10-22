import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

/*
// TEMPLATE SECTIONS
*/
import Header from './../template/Header.jsx';
import Footer from './../template/Footer.jsx';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row column">
          <h1>About</h1>
        </div>
        <Footer />
      </div>
    );
  }
};