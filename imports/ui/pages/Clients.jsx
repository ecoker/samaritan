import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Clients } from './../../api/clients.js';

/*
// TEMPLATE SECTIONS
*/
import Header from './../template/Header.jsx';
import Footer from './../template/Footer.jsx';


class ClientPage extends Component {
  constructor(props){
      super(props);
      this.renderClients = this.renderClients.bind(this);
  }
  cleanString(str) {
      if (str && typeof str == 'string') {
          return str.replace('+', '').replace(/^on$/i,'✓');
      } else {
          return '';
      }
  }
  renderClients(){
    return this.props.clients.map((client, i) => (
        <tr key={`client-${i}`}>
            <td className="name-cell">{ this.cleanString( client.firstName ) } { this.cleanString( client.middleName ) } { this.cleanString( client.lastName ) }</td>
            <td>{ this.cleanString( client.dateOfBirth) }</td>
            <td>{ this.cleanString( client.gender ) }</td>
            <td className="centered">{ this.cleanString( client.safetyNeed ) }</td>
            <td className="centered">{ this.cleanString( client.healthNeed ) }</td>
            <td className="centered">{ this.cleanString( client.foodNeed ) }</td>
            <td className="centered">{ this.cleanString( client.financialNeed ) }</td>
            <td className="centered">{ this.cleanString( client.isVeteran ? 'on' : '' ) }</td>
            <td>{ this.cleanString( client.veteranOf ) }</td>
            <td>{ this.cleanString( client.serviceStart ) }</td>
            <td>{ this.cleanString( client.serviceEnd ) }</td>
            <td>{ this.cleanString( client.socialSecurity ) }</td>
        </tr>
    ));
  }
  renderOne(){
      this.props.one.forEach(function(client){
          console.log( Object.keys(client) );
      })
  }
  render() {
      this.renderOne();
      this.renderClients();
    return (
        <div className="container">
            <div className="form-part-header">
                <p>Client List</p>
            </div>
            <div className="row column all-the-overflow">
                <table className="nowrap-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Safety Need</th>
                            <th>Health Need</th>
                            <th>Food Need</th>
                            <th>Financial Need</th>
                            <th>Veteran Status</th>
                            <th>Veteran Of</th>
                            <th>Service Start</th>
                            <th>Service End</th>
                            <th>SSN</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderClients() }
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
  }
};

ClientPage.propTypes = {
  clients: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    clients: Clients.find({}, { sort: { createdAt: -1 } }).fetch(),
    one: Clients.find({_id:'RZETCREhrxAKY46JP'}).fetch()
  };
}, ClientPage);