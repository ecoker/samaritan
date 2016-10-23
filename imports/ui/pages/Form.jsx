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
import VeteranSwitch from './../components/form/VeteranSwitch.jsx';
import MilitaryService from './../components/form/MilitaryService.jsx';
import IndividualOrFamily from './../components/form/IndividualOrFamily.jsx';

var visitedHash = [];

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleStateFormStateChange = this.handleStateFormStateChange.bind(this);
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
    setTimeout(function(){
       if (window.location.hash.length > 1) {
           visitedHash.push( window.location.hash );
       }
   }, 200);

   /* HASHTAG BINDING --- */
   if (window.location.hash.length)
   $(window).bind('hashchange', function() {
       var $activeEl = $( window.location.hash );
       if ($activeEl.length > 0) {
           if (visitedHash.indexOf( window.location.hash ) > -1) {
                $('body').addClass('back');
                visitedHash = visitedHash.slice(0, visitedHash.indexOf('#military-service'))
            } else {
                $('body').removeClass('back');
                visitedHash.push( window.location.hash );
           }
           $activeEl.addClass('active enter');
           $inactiveEl = $activeEl.siblings('.active');
           if ($inactiveEl.length > 0) {
               $inactiveEl.removeClass('now').addClass('leave').removeClass('enter');
               setTimeout(function(){
                   $inactiveEl.removeClass('active leave');
               }, 800);
           }
       }
   });
  }
  
  handleStateFormStateChange(o, submitToDatabase=false) {
    // KEEP A STATE AT THE PARENT. THIS IS WHAT WILL GO TO THE DB
    this.setState( o );
    if (submitToDatabase) {
      o.createdAt = new Date();
      var sendToServer = {
        ...this.state,
        ...o
      };
      var newClient = Clients.insert( sendToServer );
      console.log( newClient );
    }
  };
  
  handleSwitch(switchObject, el) {
    this.setState( switchObject );
    var $current = $(el).closest('.form-part');
    var _this = this;
    setTimeout(function(){
      var $next = $current.next('.form-part');
      if ($next.length > 0) {
          if ($next.attr('id')) {
              window.location.hash = `#${ $next.attr('id') }`;
          } else {
              $next.addClass('active enter');
              $current.addClass('leave').removeClass('enter');
          }
      }
    }, 200);
  }
 
  render() {
    return (
      <div className="container">
        <div id="form-parts">
          <ClientFormPart section="1" additionalClasses="active now" handleStateChange={ this.handleStateFormStateChange } id="Needs" content={ Needs } />
          <ClientFormPart section="2" handleStateChange={ this.handleStateFormStateChange } id="BasicInfo" content={ BasicInfo } />
          <VeteranSwitch section="3" handleSwitch={ this.handleSwitch } id="VeteranSwitch" />
          {
            this.state.isVeteran ?
              ( <ClientFormPart section="4" handleStateChange={ this.handleStateFormStateChange } id="MilitaryService" content={ MilitaryService } /> )
              : null
          }          
          <ClientFormPart section={ this.state.isVeteran ? '5' : '4' } handleStateChange={ this.handleStateFormStateChange } id="individual-or-family" content={ IndividualOrFamily } submit={ true } />
        </div>
        <Footer />
      </div>
    );
  }
};

Form.propTypes = {};
 
export default createContainer(() => {
  return {};
}, Form);

// Form.propTypes = {
//   clients: PropTypes.array.isRequired,
// };
 
// export default createContainer(() => {
//   return {
//     clients: Clients.find({}).fetch(),
//   };
// }, Form);