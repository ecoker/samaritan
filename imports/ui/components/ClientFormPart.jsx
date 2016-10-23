import React, { Component, PropTypes } from 'react';
 
import { GetFormObject } from './../../api/services/helpers.js';

import BackArrow from './../svg/backArrow.jsx';

export default class ClientFormPart extends Component {
  constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
      $firstInput = $('form input').first();
      if ($firstInput.length > 0) {
          $firstInput.focus();
      }
  }
  handleNext(el) {
    var $current = $(el).closest('.form-part');
    var $next = $current.next('.form-part');
    if ($next.length > 0) {
        if ($next.attr('id')) {
            window.location.hash = `#${ $next.attr('id') }`;
        } else {
            $next.addClass('active');
            $current.removeClass('active');
        }
    }
  }
  handleBackClick(ev){
      ev.preventDefault();
      window.history.back();
  }
  handleSubmit(ev){
    ev.preventDefault();
    var el = ev.target;
    var _this = this;
    setTimeout(function(){
          if ($(el).find('[data-invalid]').length == 0 ) {
              var formObject = GetFormObject(el);
              _this.handleNext(el);
              if (_this.props.handleStateChange) {
                  _this.props.handleStateChange( formObject, (_this.props.submit || false) );
              }    
          } else {
            console.log('Form not valid');
          }
      }, 200);

  }
  render() {
    return (
        <form id={ this.props.id } className={`form-part ${ this.props.additionalClasses || '' }`} data-abide noValidate onSubmit={ this.handleSubmit }>
            <div className="form-part-header">
                <a className="back-arrow-button" href="#" onClick={ this.handleBackClick }>{ BackArrow() }</a>
                <p>Section {this.props.section}</p>
            </div>
            <div className="row column">
                { this.props.handleSwitch ? <this.props.content handleSwitch={ this.props.handleSwitch } /> : <this.props.content /> } 
            </div>
            <div className="row column">
                {
                    this.props.submit ? (
                        <button className="button expanded">Submit</button>
                    ) : (
                        <button className="button expanded">Continue</button>
                    )
                }
            </div>
        </form>
    );
  }
}