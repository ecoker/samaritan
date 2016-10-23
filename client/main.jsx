import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

/* PAGES --- */
import Home from '../imports/ui/pages/Home.jsx';
import Form from '../imports/ui/pages/Form.jsx';
import About from '../imports/ui/pages/About.jsx';
import Clients from '../imports/ui/pages/Clients.jsx';
import Shelters from '../imports/ui/pages/Shelters.jsx';
import NoMatch from '../imports/ui/pages/NoMatch.jsx';

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="register" component={Form} />
      <Route path="about" component={About}/>
      <Route path="clients" component={Clients}/>
      <Route path="clients/shelters/:id" component={Shelters}/>
      <Route path="*" component={NoMatch}/>
    </Router>
  ), document.getElementById('render-target'))
});