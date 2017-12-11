import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import GeneralDashboard from './components/dashboard/GeneralDashboard';
import StagesDashboard from './components/dashboard/StagesDashboard';
import PeopleDashboard from './components/dashboard/PeopleDashboard';
// import Header from './components/common/Header';
import './styles/style.scss';

import store from './redux/store';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const FourOhFour = () => <h1>Nothing to look here - 404</h1>;

const App = () => (
  <Provider store={store}>
    {/* Tell the Router to use our enhanced history */}
    <Router history={history}>
      <Route exact path="/" component={GeneralDashboard} />
      <Route path="/stages" component={StagesDashboard} />
      <Route path="/people" component={PeopleDashboard} />
      <Route component={FourOhFour} />
    </Router>
  </Provider>
);

export default App;
