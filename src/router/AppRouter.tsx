import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

import LoggedInRouter from "./LoggedInRouter";
import PrivateRoute from "./PrivateRoute";

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/" component={LoggedInRouter} />
    </Switch>
  );
};

export default AppRouter;
