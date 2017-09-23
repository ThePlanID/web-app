import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GeneralDashboard from './components/dashboard/GeneralDashboard';
import StagesDashboard from './components/dashboard/StagesDashboard';
import Contact from './components/contact/Index';

import './css/style.css';

const FourOhFour = () => <h1>Nothing to look here - 404</h1>;

const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={GeneralDashboard} />
        <Route path="/stages" component={StagesDashboard} />
        <Route path="/contact" component={Contact} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
);

export default App;
