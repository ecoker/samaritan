import React, { Component, PropTypes } from 'react';
 
import { GetFormObject } from './../../api/services/helpers.js';

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
  handleNext(el ) {
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
  handleSubmit(ev){
    ev.preventDefault();
    var el = ev.target;
    var _this = this;
    setTimeout(function(){
          if ($(el).find('[data-invalid]').length == 0 ) {
              var formObject = GetFormObject(el);
              console.log('Current form object', formObject);
              _this.handleNext(el);
              _this.props.handleStateChange( formObject, (_this.props.submit || false) );    
          } else {
            console.log('Form not valid');
          }
      }, 200);

  }
  render() {
    return (
        <form id={ this.props.id } className={`form-part ${ this.props.additionalClasses || '' }`} data-abide noValidate onSubmit={ this.handleSubmit }>
            <div className="row column">
                <this.props.content />
            </div>
            <div className="row column">
                {
                    this.props.submit ? (
                        <button className="button">Submit</button>
                    ) : (
                        <button className="button">Continue</button>
                    )
                }
            </div>
        </form>
    );
  }
}