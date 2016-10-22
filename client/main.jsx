import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

/* PAGES --- */
import Form from '../imports/ui/pages/Form.jsx';
import About from '../imports/ui/pages/About.jsx';
import Clients from '../imports/ui/pages/Clients.jsx';
import NoMatch from '../imports/ui/pages/NoMatch.jsx';

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={Form} />
      <Route path="about" component={About}/>
      <Route path="clients" component={Clients}/>
      <Route path="*" component={NoMatch}/>
    </Router>
  ), document.getElementById('render-target'))
});