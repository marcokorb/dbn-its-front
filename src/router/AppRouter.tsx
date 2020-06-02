import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

import LoggedInRouter from './LoggedInRouter';
import PrivateRoute from './PrivateRoute';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={LoggedInRouter} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
