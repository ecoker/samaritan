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
  componentDidMount(){
    var $firstFormPart = $('.form-part').first();
    var firstId = $firstFormPart.attr('id');
    if (firstId.length > 0) {
      $firstFormPart.addClass('now');
      window.location = `#${firstId}`;
    } else {
      window.location.hash = '';
    }
    this.handleStateFormStateChange = this.handleStateFormStateChange.bind(this);
  }
  handleStateFormStateChange(o) {
    // KEEP A STATE AT THE PARENT. THIS IS WHAT WILL GO TO THE DB
    console.log('Current State:', this.state);
    console.log('Updates:', o );
    this.setState( o );
  }
  handleSubmit(ev){
      ev.preventDefault();
      var el = ev.target;
      setTimeout(function(){
          if ($(el).find('[data-invalid]').length == 0 ) {
              var formObject = GetFormObject(el);
              console.log('Current form object', formObject);
              // Clients.insert({ firstName: formObject.firstName, lastName: formObject.lastName, createdAt: new Date() });    
          } else {
            console.log('Form not valid');
          }
      }, 200);
  }
 
  render() {
    return (
      <div className="container">
        <Header />
        <ClientFormNavigation />
        <div id="form-parts">
          <ClientFormPart handleStateChange={ this.handleStateFormStateChange } id="needs" content={ Needs } additionalClasses="active" />
          <ClientFormPart handleStateChange={ this.handleStateFormStateChange } id="basic-info" content={ BasicInfo } />
          <ClientFormPart handleStateChange={ this.handleStateFormStateChange } id="military-service" content={ MilitaryService } />
          <ClientFormPart handleStateChange={ this.handleStateFormStateChange } id="individual-or-family" content={ IndividualOrFamily } submit={ true } />
        </div>
        <Footer />
      </div>
    );
  }
}

Form.propTypes = {};
 
export default createContainer(() => {
  return {};
}, Form);


// Form.propTypes = {
//   clients: PropTypes.array.isRequired,
// };
 
// export default createContainer(() => {
//   return {
//     Clients: Clients.find({}).fetch(),
//   };
// }, Form);