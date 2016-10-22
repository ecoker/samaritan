import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Friends } from './../../api/friends.js'; 

/*
// TEMPLATE SECTIONS
*/
import Header from './../template/Header.jsx';
import Footer from './../template/Footer.jsx';

/*
// COMPONENTS
*/
import Friend from './../Friend.jsx';
import Abide from './../components/Abide.jsx';
import Button from './../components/Button.jsx';
 
class Form extends Component {
  renderFriends() {
    return this.props.friends.map((friend, i) => (
      <Friend key={`friend-${i}`} { ...friend } />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row column">
          <Abide />
          <ul>
            {this.renderFriends()}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

Form.propTypes = {
  friends: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    friends: Friends.find({}).fetch(),
  };
}, Form);