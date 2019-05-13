import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import EditBlogPage from '../components/EditBlogPage';
import AddBlogPage from '../components/AddBlogPage';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
// import LoginPage from '../components/LoginPage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

// createHistory
export const history = createHistory();

const AppRouter = (props) => (
  <Router history={history}>
    <div>
    <Header />
    <Switch>
    <Route exact path="/" component={DashboardPage} />
    <Route path="/create" component={AddBlogPage} />
    <Route path="/edit/:id" component={EditBlogPage} />
    <Route component={NotFoundPage} />
    </Switch>
    </div>
  </Router>
);


export default AppRouter;