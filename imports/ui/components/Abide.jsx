import React, { Component, PropTypes } from 'react';

import { Friends } from '../../api/friends.js';
 
import { GetFormArray, GetFormObject } from '../services/helpers.js';

export default class Abide extends Component {
    handleSubmit(ev){
        ev.preventDefault();
        var el = ev.target;
        setTimeout(function(){
            if ($(el).find('[data-invalid]').length == 0) {
                console.log( GetFormArray(el) );
                var formObject = GetFormObject(el);
                Friends.insert({ firstName: formObject.firstName, lastName: formObject.lastName, createdAt: new Date() });
            }
        }, 150);
    }
    render() {
        return (
            <form data-abide noValidate onSubmit={ this.handleSubmit }>
                <div className="name-field">
                    <label>First Name <small>required</small>
                    <input name="firstName" type="text" required pattern="[a-zA-Z]+" />
                    </label>
                    <small className="error">Name is required and must be a string.</small>
                </div>
                <div className="name-field">
                    <label>Last Name <small>required</small>
                    <input name="lastName" type="text" required pattern="[a-zA-Z]+" />
                    </label>
                    <small className="error">Name is required and must be a string.</small>
                </div>
                <div className="email-field">
                    <label>Email <small>required</small>
                    <input name="email" type="email" required />
                    </label>
                    <small className="error">An email address is required.</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}