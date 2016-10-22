import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Clients } from './../../api/clients.js'; 

/* TEMPLATE SECTIONS ---- */
import Header from './../template/Header.jsx';
import Footer from './../template/Footer.jsx';

/* COMPONENTS ---- */
import Abide from './../components/Abide.jsx';
import Button from './../components/Button.jsx';
import ClientFormNavigation from './../components/ClientFormNavigation.jsx'; 
import ClientFormPart from './../components/ClientFormPart.jsx';

/* FORM PARTS ---- */
import Needs from './../components/form/Needs.jsx';
import BasicInfo from './../components/form/BasicInfo.jsx';
import MilitaryService from './../components/form/MilitaryService.jsx';
import IndividualOrFamily from './../components/form/IndividualOrFamily.jsx';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleStateFormStateChange = this.handleStateFormStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    var $firstFormPart = $('.form-part').first();
    var firstId = $firstFormPart.attr('id');
    if (firstId.length > 0) {
      $firstFormPart.addClass('now');
      window.location = `#${firstId}`;
    } else {
      window.location.hash = '';
    }
  }
  handleStateFormStateChange(o, submitToDatabase=false) {
    // KEEP A STATE AT THE PARENT. THIS IS WHAT WILL GO TO THE DB
    console.log('Current State:', this.state);
    console.log('Updates:', o );
    this.setState( o );
    if (submitToDatabase) {
      var sendToServer = {
        ...this.state,
        ...o
      };
      console.log('for the server:', sendToServer);
      Clients.insert( sendToServer );
    }
  }
  handleSubmit(ev){
      if (typeof ev !== 'undefined') ev.preventDefault();
      console.log('send to server:', this.state);
  }
 
  render() {
    console.log( this.props.clients );
    return (
      <div className="container">
        <Header />
        <ClientFormNavigation />
        <div id="form-parts">
          <ClientFormPart additionalClasses="active now" handleStateChange={ this.handleStateFormStateChange } id="individual-or-family" content={ IndividualOrFamily } submit={ true } />
        </div>
        <Footer />
      </div>
    );
  }
}

Form.propTypes = {
  clients: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    clients: Clients.find({}).fetch(),
  };
}, Form);