import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from '../components/Header';
import DashBoardPage from '../components/DashBoardPage';
import NotFoundPage from '../components/NotFoundPage';
// import LoginPage from '../components/LoginPage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

// createHistory
export const history = createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header />
    <Switch>
      <Route exect path="/" component={DashBoardPage} />
      <Route component={NotFoundPage} />
    </Switch>
    </div>
  </Router>
);


export default AppRouter;