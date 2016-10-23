import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Shelters } from './../../api/shelters.js';
import { Clients } from './../../api/clients.js';

/*
// TEMPLATE SECTIONS
*/
import Header from './../template/Header.jsx';
import Footer from './../template/Footer.jsx';

import ClientShelters from './../components/ClientShelters.jsx';


class ShelterPage extends Component {
  constructor(props){
      super(props);
      this.renderClientShelters = this.renderClientShelters.bind(this);
  }
  cleanString(str) {
      if (str || typeof str == 'string') {
          return str.replace('+', '').replace(/^on$/i,'✓');
      } else {
          return str;
      }
  }
  renderClientShelters(){
    return this.props.client.map(function(client){
        return <ClientShelters key={client._id} {...client} />
    })
  }
  render() {
    return (
        <div className="container">
            <div className="form-part-header">
                <a className="done-button" href="#" onClick={ this.handleDoneClick }>Done</a>
                <p>Section {this.props.section}</p>
            </div>
            <div className="row column">
                { this.renderClientShelters() }
            </div>
            <Footer />
        </div>
    );
  }
};

ShelterPage.propTypes = {
  client: PropTypes.array.isRequired,
};
 
export default createContainer((props) => {
    return {
    client: Clients.find({_id:props.params.id}).fetch()
  };
}, ShelterPage);