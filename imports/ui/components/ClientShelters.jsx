import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Shelters } from './../../api/shelters.js';

class ClientShelters extends Component {
  constructor(props){
      super(props);
      console.log('IN CLIENT SHELTERS', props);
      this.renderShelters = this.renderShelters.bind(this);
  }
  cleanString(str) {
      if (str || typeof str == 'string') {
          return str.replace('+', '').replace(/^on$/i,'✓');
      } else {
          return str;
      }
  }
  renderShelters(){
    if (this.props.matchedShelters) {
        console.log('in shelters', this.props.matchedShelters );
        return this.props.matchedShelters.map(function(shelter){
            return (
                <tr>
                    <td>{ shelter.resource }</td>
                </tr>
            );
        });
    }
    return null;
  }
  renderOne(){
      this.props.one.forEach(function(client){
          console.log( Object.keys(client) );
      })
  }
  render() {
      return (
        <table>
            <tbody>
                { this.renderShelters() }
            </tbody>
        </table>
    );
  }
};

ClientShelters.propTypes = {};
 
export default createContainer((props) => {

    var query = [];
    if (props.gender == "male") {
        query.push( {"servemengt18":"true"} );
        query.push( {"acceptmales":"true"} );
    } else if (props.gender == "femal") {
        query.push({"servesinglewomengt18":"true"})
        query.push({"acceptfemales":"true"})
    }
    if (props.isVeteran) {
        query.push({"category":"vasystem"});
        query.push({"servesvetsonly":"true"});
    }
    if (props.healthNeed) {
        query.push({"healthServices": "true"});
    }

    console.log( query );

  return {
    matchedShelters: Shelters.find({ $or: query}).fetch()
  };
}, ClientShelters);