import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Shelters } from './../../api/shelters.js';

class ClientShelters extends Component {
  constructor(props){
      super(props);
      this.renderShelters = this.renderShelters.bind(this);
  }
  cleanString(str) {
      if (str && typeof str == 'string') {
          return str.replace('+', '').replace(/^on$/i,'✓').replace(/\uFFFD/g, '');
      } else {
          return str;
      }
  }
  renderShelters(){
    if (this.props.matchedShelters) {
        return this.props.matchedShelters.map(function(shelter,i){
            if(shelter.contactp1) {
                return (
                    <div className="client-shelter" key={`client-shelter-${i}`}>
                        <section className="details">
                            <h3>{this.cleanString(shelter.resource)}</h3>
                            <address>{this.cleanString(shelter.address)}</address>
                            <span className="phone">{this.cleanString(shelter.contactp1)}</span>
                        </section>
                        <a href={`tel:${this.cleanString(shelter.contactp1)}`} className="phoneLink">
                            <svg className="icon" viewBox="284 17 41 40" version="1.1"> <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(285.000000, 17.000000)"> <path d="M38.96832,29.70544 L34.57312,25.31024 C33.25632,23.99344 31.12032,23.99344 29.80352,25.31024 L28.56192,26.55184 C28.72192,26.63344 28.87072,26.74224 28.98432,26.89744 C32.51392,31.70544 37.61312,35.48944 37.66272,35.52624 C37.71392,35.56464 37.74112,35.61744 37.78432,35.66064 L38.96832,34.47504 C40.28512,33.15824 40.28512,31.02224 38.96832,29.70544" fill="#45BCFF"></path> <path d="M4.61296,2.52544 C8.14256,7.33344 13.24016,11.11744 13.29136,11.15584 C13.36176,11.20704 13.40336,11.27744 13.45936,11.33984 L14.64496,10.15264 C15.96336,8.83584 15.96336,6.69984 14.64496,5.38304 L10.25136,0.98784 C8.93296,-0.32896 6.79696,-0.32896 5.48016,0.98784 L4.26256,2.20544 C4.39536,2.28544 4.51536,2.39264 4.61296,2.52544" fill="#45BCFF"></path> <path d="M27.0504,28.316 C27.012,28.2632 26.9992,28.2008 26.9704,28.1432 L26.1432,28.972 C25.876,29.2376 25.4616,29.2776 25.156,29.0552 C23.828,28.0888 20.2376,25.3992 17.3976,22.5592 C14.5576,19.7192 11.868,16.1288 10.9,14.7992 C10.6792,14.4952 10.7176,14.0808 10.9848,13.8136 L11.7784,13.02 C11.0552,12.4792 6.2168,8.7656 2.6792,3.9448 C2.6552,3.9112 2.6504,3.8728 2.6296,3.8392 L0.8456,5.6232 C-0.3272,6.796 -0.0664,8.4728 0.3592,10.0168 C0.3592,10.0168 2.0792,17.9608 12.0376,27.9192 C21.9944,37.8776 29.94,39.5976 29.94,39.5976 C31.484,39.964 33.1608,40.284 34.332,39.1112 L36.0936,37.3496 C35.2152,36.6856 30.5128,33.0344 27.0504,28.316" fill="#45BCFF"></path> </g> </svg>
                        </a>
                    </div>
                );
            }
        }, this);
    }
    return null;
  }
  renderOne(){
      this.props.one.forEach(function(client){
          console.log( Object.keys(client) );
      })
  }
  handlePrint(ev) {
      ev.preventDefault();
      window.print();
  }
  render() {
      return (
        <div className="client-shelter-wrapper">
            { this.renderShelters() }
            <span className="printList">
                <a href="" onClick={ this.handlePrint } className="button expanded">print list</a>
            </span>
        </div>
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

  return {
    matchedShelters: Shelters.find({ $or: query}).fetch()
  };
}, ClientShelters);