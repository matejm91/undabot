import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ContactPage from './ContactPage/ContactPage';

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  </Router>
);

export default router;