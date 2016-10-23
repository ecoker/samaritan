import React, { Component, PropTypes } from 'react';
 
export default class Veteran extends Component {
    constructor(props){
        super(props);
        this.switchOn = this.switchOn.bind(this);
        this.switchOff = this.switchOff.bind(this);
    }    
  switchOn(ev){
      var switchObject = {
          isVeteran: true
      };
      this.props.handleSwitch( switchObject, ev.target );
  }
  switchOff(ev){
      var switchObject = {
          isVeteran: false
      };
      this.props.handleSwitch( switchObject, ev.target );
  }
  render() {
    return (
        <div id={ this.props.id } className={`form-part ${ this.props.additionalClasses || '' }`}>
            <div className="form-part-header">
                <p>Veteran</p>
            </div>
            <h2 className="coach">"Have you served in the military?"</h2>
            <div className="columns small-12 row switch">
                <button className="button  columns small-6" onClick={ this.switchOn }>Yes</button>
                <button className="button  columns small-6" onClick={ this.switchOff }>No</button>
            </div>

        </div>
    );
  }
}