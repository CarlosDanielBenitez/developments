import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/projectPage';
import About from './components/';
import Contact from './components/Contact';

function RoutersComponent() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/home" component={Home} />
        <Route path="/about" component={About} /> */}
        <Route path="/contact" component={Project} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default RoutersComponent;
